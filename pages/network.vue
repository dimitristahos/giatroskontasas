<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";

  // Reactive state
  const markerCount = ref(20);
  const animationDuration = ref(2000);
  const activeMarkers = ref([]);

  // Map configurations
  const THESSALONIKI_CITY = {
    north: 40.655,
    south: 40.615,
    east: 22.97,
    west: 22.9,
  };

  const landPolygon = [
    [40.61791029362064, 22.953224766819964],
    [40.62725885319315, 22.951036084263812],
    [40.628333690804304, 22.946487057774554],
    [40.639341637597504, 22.93082295712758],
    [40.64246782409187, 22.947688687413226],
    [40.62540227475561, 22.96609937009145],
    [40.61791029362064, 22.953224766819964],
  ];

  // Animation settings
  const MARKER_SIZE = 40;
  const MARKER_OPACITY = 0.7;
  const MARKER_COLOR = "#00c853";
  const PULSE_SETTINGS = {
    minRadius: 1,
    maxRadius: 2.5,
    duration: 1500,
    startOpacity: 0.8,
    endOpacity: 0.1,
  };

  // State for intervals
  let map = null;
  let globalAnimationTimer = 0;
  let globalAnimationInterval = null;
  let markerUpdateInterval = null;

  const isPointInPolygon = (point, polygon) => {
    const x = point[0],
      y = point[1];
    let inside = false;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0],
        yi = polygon[i][1];
      const xj = polygon[j][0],
        yj = polygon[j][1];

      const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  };

  const startGlobalPulseAnimation = () => {
    if (globalAnimationInterval) {
      clearInterval(globalAnimationInterval);
    }

    globalAnimationTimer = 0;

    globalAnimationInterval = setInterval(() => {
      globalAnimationTimer += 20;
      if (globalAnimationTimer >= PULSE_SETTINGS.duration) {
        globalAnimationTimer = 0;
      }

      updateAllMarkerAnimations();
    }, 20);
  };

  const updateAllMarkerAnimations = () => {
    const progress = globalAnimationTimer / PULSE_SETTINGS.duration;
    const easedProgress = (Math.sin(progress * Math.PI - Math.PI / 2) + 1) / 2;
    const radiusRatio = PULSE_SETTINGS.minRadius + (PULSE_SETTINGS.maxRadius - PULSE_SETTINGS.minRadius) * easedProgress;
    const opacity = PULSE_SETTINGS.startOpacity + (PULSE_SETTINGS.endOpacity - PULSE_SETTINGS.startOpacity) * easedProgress;

    activeMarkers.value.forEach((markerObj) => {
      if (markerObj && markerObj.ringMarker) {
        const currentRadius = MARKER_SIZE * radiusRatio;
        markerObj.ringMarker.setRadius(currentRadius);
        markerObj.ringMarker.setStyle({
          opacity: opacity,
          weight: 2,
        });
      }
    });
  };

  const createRandomMarker = () => {
    let lat, lng;
    let onLand = false;
    let attempts = 0;

    while (!onLand && attempts < 20) {
      attempts++;
      lat = THESSALONIKI_CITY.south + Math.random() * (THESSALONIKI_CITY.north - THESSALONIKI_CITY.south);
      lng = THESSALONIKI_CITY.west + Math.random() * (THESSALONIKI_CITY.east - THESSALONIKI_CITY.west);

      onLand = isPointInPolygon([lat, lng], landPolygon);
      if (onLand) break;
    }

    if (!onLand) {
      lat = 40.635;
      lng = 22.94;
    }

    const marker = L.circle([lat, lng], {
      color: MARKER_COLOR,
      fillColor: MARKER_COLOR,
      fillOpacity: MARKER_OPACITY,
      radius: MARKER_SIZE,
      weight: 2,
    }).addTo(map);

    const ringMarker = L.circle([lat, lng], {
      color: MARKER_COLOR,
      fillColor: "transparent",
      radius: MARKER_SIZE,
      weight: 2,
      opacity: PULSE_SETTINGS.startOpacity,
    }).addTo(map);

    const markerObj = {
      marker: marker,
      ringMarker: ringMarker,
    };

    activeMarkers.value.push(markerObj);

    marker.setStyle({ opacity: 0, fillOpacity: 0 });
    ringMarker.setStyle({ opacity: 0 });

    let fadeOpacity = 0;
    const fadeInterval = setInterval(() => {
      fadeOpacity += 0.05;
      if (fadeOpacity >= MARKER_OPACITY) {
        clearInterval(fadeInterval);
        marker.setStyle({
          opacity: 1,
          fillOpacity: MARKER_OPACITY,
        });
        return;
      }
      marker.setStyle({
        opacity: fadeOpacity,
        fillOpacity: fadeOpacity,
      });
      ringMarker.setStyle({
        opacity: fadeOpacity * PULSE_SETTINGS.startOpacity,
      });
    }, 30);

    return markerObj;
  };

  const removeMarker = (index) => {
    if (index < 0 || index >= activeMarkers.value.length) return;

    const markerObj = activeMarkers.value[index];
    if (!markerObj) return;

    let opacity = MARKER_OPACITY;
    const fadeInterval = setInterval(() => {
      opacity -= 0.05;
      if (opacity <= 0) {
        clearInterval(fadeInterval);
        if (markerObj.marker) map.removeLayer(markerObj.marker);
        if (markerObj.ringMarker) map.removeLayer(markerObj.ringMarker);
        return;
      }
      if (markerObj.marker) {
        markerObj.marker.setStyle({
          opacity: opacity,
          fillOpacity: opacity,
        });
      }
      if (markerObj.ringMarker) {
        markerObj.ringMarker.setStyle({
          opacity: opacity * PULSE_SETTINGS.startOpacity,
        });
      }
    }, 30);

    activeMarkers.value.splice(index, 1);
  };

  const startMarkerAnimation = () => {
    markerUpdateInterval = setInterval(() => {
      // Remove markers if we have too many
      while (activeMarkers.value.length > markerCount.value) {
        const indexToRemove = Math.floor(Math.random() * activeMarkers.value.length);
        removeMarker(indexToRemove);
      }

      // Add new markers if needed
      while (activeMarkers.value.length < markerCount.value) {
        createRandomMarker();
      }

      // Randomly replace some markers
      const numToReplace = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numToReplace; i++) {
        if (activeMarkers.value.length > 0) {
          const indexToReplace = Math.floor(Math.random() * activeMarkers.value.length);
          removeMarker(indexToReplace);
          createRandomMarker();
        }
      }
    }, animationDuration.value);
  };

  // Lifecycle hooks
  onMounted(() => {
    // Using Nuxt plugin pattern to ensure Leaflet is available in SSR context
    map = L.map("map", {
      zoomControl: false, // hides zoom control
      attributionControl: false,
    }).setView([40.6401, 22.9444], 13);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    map.setMaxBounds([
      [THESSALONIKI_CITY.south - 0.05, THESSALONIKI_CITY.west - 0.05],
      [THESSALONIKI_CITY.north + 0.05, THESSALONIKI_CITY.east + 0.05],
    ]);

    // Start animations
    startGlobalPulseAnimation();
    startMarkerAnimation();

    setTimeout(() => {
      map.setView([40.6401, 22.9444], 14);
    }, 1500);
  });

  onBeforeUnmount(() => {
    // Clean up resources when component is unmounted
    if (globalAnimationInterval) clearInterval(globalAnimationInterval);
    if (markerUpdateInterval) clearInterval(markerUpdateInterval);

    // Clean up map instance if it exists
    if (map) map.remove();
  });
</script>

<template>
  <div>
    <section class="py-16 container mx-auto px-4">
      <!-- Header Section -->
      <div class="flex flex-wrap justify-between mb-12">
        <h1 class="text-4xl lg:text-5xl font-semibold max-w-[650px] lg:leading-snug">Το Δίκτυο Γιατρών μας</h1>
        <div>
          <p class="mb-5 max-w-[620px] text-lg opacity-80">
            Η πλατφόρμα μας βασίζεται σε ένα ευφυές δίκτυο γιατρών που βρίσκονται σε διάφορες περιοχές. Μέσω αυτού του
            δικτύου, διασφαλίζουμε ότι ο πλησιέστερος και διαθέσιμος γιατρός θα ανταποκριθεί άμεσα στο αίτημά σας.
          </p>
          <a
            class="cursor-pointer group relative inline-flex h-10 px-5 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
            href="#contact"
          >
            <div
              class="inline-flex h-12 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]"
            >
              Ενδιαφέρομαι
            </div>
            <div
              class="absolute inline-flex h-12 w-full items-center justify-center text-neutral-950 transition duration-500 group-hover:translate-y-0 translate-y-[100%]"
            >
              <span
                class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"
              ></span>
              <span class="z-10">Ενδιαφέρομαι</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Map or Hero Image Section (Placeholder) -->
      <div
        class="relative z-10 rounded-xl w-full h-[34rem] pointer-events-auto overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:z-[999] after:content-[''] after:pointer-events-auto"
      >
        <div id="map" class="w-full h-[34rem] bg-gray-300 mb-16 pointer-events-none"></div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Κύρια Χαρακτηριστικά</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Η πλατφόρμα μας προσφέρει καινοτόμες λύσεις για την εύκολη εύρεση και διαχείριση ιατρικών ραντεβού.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <!-- Feature 1 -->
          <div class="bg-blue-50 rounded-xl p-8 text-center transition duration-300">
            <div class="inline-block p-1 bg-blue-100 rounded-full mb-6">
              <img src="/public/images/gifs/face-scan.gif" alt="Technical implementation" class="rounded-full w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Αυτόματη Ανίχνευση</h3>
            <p class="text-gray-600">
              Εντοπίζουμε τον κοντινότερο ή καταλληλότερο γιατρό βάσει γεωγραφικών και δυναμικών δεδομένων.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-indigo-50 rounded-xl p-8 text-center transition duration-300">
            <div class="inline-block p-1 bg-indigo-100 rounded-full mb-6">
              <img src="/public/images/gifs/reload.gif" alt="Technical implementation" class="rounded-full w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Δυνατότητα Αλλαγής</h3>
            <p class="text-gray-600">Αλλάξτε τον γιατρό σας έως μία ώρα πριν το ραντεβού σε περίπτωση απρόοπτου.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-purple-50 rounded-xl p-8 text-center transition duration-300">
            <div class="inline-block p-1 bg-purple-100 rounded-full mb-6">
              <img src="/public/images/gifs/appointment.gif" alt="Technical implementation" class="rounded-full w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Επαναπρογραμματισμός</h3>
            <p class="text-gray-600">Μεταφέρετε εύκολα το ραντεβού σας για άλλη ημέρα, όταν προκύπτει κάποιο πρόβλημα.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Implementation -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <img src="/public/images/giatroi-step3.png" alt="Technical implementation" class="rounded-xl shadow-lg" />
          </div>
          <div class="md:w-1/2 md:pl-10">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Τεχνολογική Υλοποίηση</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lg text-gray-800">Δικτυακή Συνδεσιμότητα</h3>
                  <p class="text-gray-600 mt-1">
                    Ο αλγόριθμος συλλέγει δεδομένα για να αντιστοιχίσει αυτόματα τον χρήστη με τον καταλληλότερο γιατρό.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lg text-gray-800">Ενημέρωση σε Πραγματικό Χρόνο</h3>
                  <p class="text-gray-600 mt-1">
                    Με τη χρήση GPS και cloud τεχνολογιών, το σύστημα ενημερώνεται συνεχώς για διαδρομές και διαθεσιμότητες.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lg text-gray-800">Δυνατότητα Διόρθωσης</h3>
                  <p class="text-gray-600 mt-1">
                    Η πλατφόρμα επιτρέπει στον χρήστη να αλλάξει ή να επαναπρογραμματίσει το ραντεβού του ώστε να
                    εξυπηρετείται καλύτερα.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Οφέλη για Όλους</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Η πλατφόρμα μας προσφέρει πολλαπλά οφέλη τόσο στους χρήστες όσο και στους γιατρούς.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Benefits for Users -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm transition duration-300">
            <div class="inline-block p-1 bg-blue-100 rounded-full mb-6">
              <img src="/public/images/gifs/patient.gif" alt="Technical implementation" class="rounded-full w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Οφέλη για τους Χρήστες</h3>

            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-green-500 mr-2"><i class="fas fa-check-circle text-xl"></i></span>
                <div>
                  <h4 class="font-semibold text-gray-800">Ταχύτερη Εξυπηρέτηση</h4>
                  <p class="text-gray-600">Η άμεση αντιστοίχιση μειώνει τον χρόνο αναμονής.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2"><i class="fas fa-check-circle text-xl"></i></span>
                <div>
                  <h4 class="font-semibold text-gray-800">Ευελιξία στη Διαχείριση</h4>
                  <p class="text-gray-600">Πλήρης έλεγχος για αλλαγή ραντεβού ή γιατρού ανάλογα με τις ανάγκες.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2"><i class="fas fa-check-circle text-xl"></i></span>
                <div>
                  <h4 class="font-semibold text-gray-800">Βελτίωση της Ποιότητας Φροντίδας</h4>
                  <p class="text-gray-600">Συνδυασμός δεδομένων για παροχή βέλτιστης ιατρικής φροντίδας.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Benefits for Doctors -->
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-sm transition duration-300">
            <div class="inline-block p-1 bg-indigo-100 rounded-full mb-6">
              <img
                src="/public/images/gifs/health-monitoring.gif"
                alt="Technical implementation"
                class="rounded-full w-12 h-12"
              />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Οφέλη για τους Γιατρούς</h3>

            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-green-500 mr-2"><i class="fas fa-check-circle text-xl"></i></span>
                <div>
                  <h4 class="font-semibold text-gray-800">Καλύτερη Διαχείριση Χρόνου</h4>
                  <p class="text-gray-600">Αποδοτικότερη οργάνωση ραντεβού, μειώνοντας τα κενά μεταξύ επισκέψεων.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2"><i class="fas fa-check-circle text-xl"></i></span>
                <div>
                  <h4 class="font-semibold text-gray-800">Ενίσχυση Συνεργασίας</h4>
                  <p class="text-gray-600">Το δίκτυο προωθεί την ανταλλαγή πληροφοριών και την άμεση επικοινωνία.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2"><i class="fas fa-check-circle text-xl"></i></span>
                <div>
                  <h4 class="font-semibold text-gray-800">Αποτελεσματικότητα Λειτουργίας</h4>
                  <p class="text-gray-600">Ψηφιοποίηση διαχείρισης ραντεβού για καλύτερη καταγραφή δεδομένων.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
