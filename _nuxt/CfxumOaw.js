import{r as y,o as C,aa as E,c as j,D as z,i as B}from"./Cah5knN4.js";const g=window.setInterval,K={class:"py-16 container mx-auto px-4"},x=40,h=.7,b="#00c853",V={__name:"network",setup(G){const w=y(20),R=y(2e3),s=y([]),i={north:40.655,south:40.615,east:22.97,west:22.9},O=[[40.61791029362064,22.953224766819964],[40.62725885319315,22.951036084263812],[40.628333690804304,22.946487057774554],[40.639341637597504,22.93082295712758],[40.64246782409187,22.947688687413226],[40.62540227475561,22.96609937009145],[40.61791029362064,22.953224766819964]],l={minRadius:1,maxRadius:2.5,duration:1500,startOpacity:.8,endOpacity:.1};let n=null,p=0,f=null,v=null;const S=(e,t)=>{const a=e[0],o=e[1];let r=!1;for(let c=0,u=t.length-1;c<t.length;u=c++){const d=t[c][0],m=t[c][1],P=t[u][0],I=t[u][1];m>o!=I>o&&a<(P-d)*(o-m)/(I-m)+d&&(r=!r)}return r},T=()=>{f&&clearInterval(f),p=0,f=g(()=>{p+=20,p>=l.duration&&(p=0),_()},20)},_=()=>{const e=p/l.duration,t=(Math.sin(e*Math.PI-Math.PI/2)+1)/2,a=l.minRadius+(l.maxRadius-l.minRadius)*t,o=l.startOpacity+(l.endOpacity-l.startOpacity)*t;s.value.forEach(r=>{if(r&&r.ringMarker){const c=x*a;r.ringMarker.setRadius(c),r.ringMarker.setStyle({opacity:o,weight:2})}})},M=()=>{let e,t,a=!1,o=0;for(;!a&&o<20&&(o++,e=i.south+Math.random()*(i.north-i.south),t=i.west+Math.random()*(i.east-i.west),a=S([e,t],O),!a););a||(e=40.635,t=22.94);const r=L.circle([e,t],{color:b,fillColor:b,fillOpacity:h,radius:x,weight:2}).addTo(n),c=L.circle([e,t],{color:b,fillColor:"transparent",radius:x,weight:2,opacity:l.startOpacity}).addTo(n),u={marker:r,ringMarker:c};s.value.push(u),r.setStyle({opacity:0,fillOpacity:0}),c.setStyle({opacity:0});let d=0;const m=g(()=>{if(d+=.05,d>=h){clearInterval(m),r.setStyle({opacity:1,fillOpacity:h});return}r.setStyle({opacity:d,fillOpacity:d}),c.setStyle({opacity:d*l.startOpacity})},30);return u},k=e=>{if(e<0||e>=s.value.length)return;const t=s.value[e];if(!t)return;let a=h;const o=g(()=>{if(a-=.05,a<=0){clearInterval(o),t.marker&&n.removeLayer(t.marker),t.ringMarker&&n.removeLayer(t.ringMarker);return}t.marker&&t.marker.setStyle({opacity:a,fillOpacity:a}),t.ringMarker&&t.ringMarker.setStyle({opacity:a*l.startOpacity})},30);s.value.splice(e,1)},A=()=>{v=g(()=>{for(;s.value.length>w.value;){const t=Math.floor(Math.random()*s.value.length);k(t)}for(;s.value.length<w.value;)M();const e=Math.floor(Math.random()*3)+1;for(let t=0;t<e;t++)if(s.value.length>0){const a=Math.floor(Math.random()*s.value.length);k(a),M()}},R.value)};return C(()=>{n=L.map("map",{zoomControl:!1,attributionControl:!1}).setView([40.6401,22.9444],13),L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(n),n.setMaxBounds([[i.south-.05,i.west-.05],[i.north+.05,i.east+.05]]),T(),A(),setTimeout(()=>{n.setView([40.6401,22.9444],14)},1500)}),E(()=>{f&&clearInterval(f),v&&clearInterval(v),n&&n.remove()}),(e,t)=>(B(),j("section",K,t[0]||(t[0]=[z('<div class="flex flex-wrap justify-between mb-12"><h1 class="text-4xl lg:text-5xl font-semibold max-w-[650px] lg:leading-snug">Το Δίκτυο Γιατρών μας</h1><div><p class="mb-5 max-w-[620px] text-lg opacity-80"> Η πλατφόρμα μας βασίζεται σε ένα ευφυές δίκτυο γιατρών που βρίσκονται σε διάφορες περιοχές. Μέσω αυτού του δικτύου, διασφαλίζουμε ότι ο πλησιέστερος και διαθέσιμος γιατρός θα ανταποκριθεί άμεσα στο αίτημά σας. </p><a class="cursor-pointer group relative inline-flex h-10 px-5 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium" href="#contact"><div class="inline-flex h-12 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]"> Ενδιαφέρομαι </div><div class="absolute inline-flex h-12 w-full items-center justify-center text-neutral-950 transition duration-500 group-hover:translate-y-0 translate-y-[100%]"><span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span><span class="z-10">Ενδιαφέρομαι</span></div></a></div></div><div class="relative z-10 rounded-xl w-full h-[34rem] pointer-events-auto overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:z-[999] after:content-[&#39;&#39;] after:pointer-events-auto"><div id="map" class="w-full h-[34rem] bg-gray-300 mb-16 pointer-events-none"></div></div><div class="mt-16"><h2 class="text-3xl font-semibold mb-5">Ιδέα και Στόχος</h2><p class="max-w-[820px] text-xl opacity-80 leading-relaxed"> Η βασική ιδέα είναι να δημιουργηθεί ένα διασυνδεδεμένο δίκτυο γιατρών που επιτρέπει στους χρήστες να κλείνουν ραντεβού μέσω μιας ψηφιακής πλατφόρμας. <br><br><strong>Αυτόματη Ανίχνευση:</strong> Ο χρήστης όταν ζητά ραντεβού, εντοπίζει τον κοντινότερο γιατρό ή τον πλέον κατάλληλο βάσει γεωγραφικών και δυναμικών δεδομένων (π.χ. διαθεσιμότητα, ειδικότητα). <br><br><strong>Δυνατότητα Αλλαγής:</strong> Ο χρήστης μπορεί να αλλάξει τον γιατρό που θα τον εξυπηρετήσει (έως μία ώρα πριν την άφιξή του στο σπίτι) σε περίπτωση αλλαγής στο πρόγραμμα ή ανάγκης. <br><br><strong>Επαναπρογραμματισμός:</strong> Ο χρήστης έχει τη δυνατότητα να μεταφέρει το ραντεβού για άλλη ημέρα, εάν παρουσιαστεί κάποιο πρόβλημα. </p></div><div class="mt-16"><h2 class="text-3xl font-semibold mb-5">Τεχνική Εφαρμογή και Οφέλη</h2><div class="space-y-8"><div><h3 class="text-2xl font-bold mb-3">Τεχνολογική Υλοποίηση</h3><ul class="list-disc list-inside text-lg opacity-80 leading-relaxed"><li><strong>Δικτυακή Συνδεσιμότητα:</strong> Ο αλγόριθμος συλλέγει δεδομένα (τοποθεσία, διαθεσιμότητα, εξειδίκευση) για να αντιστοιχίσει αυτόματα τον χρήστη με τον καταλληλότερο γιατρό. </li><li><strong>Ενημέρωση σε Πραγματικό Χρόνο:</strong> Με τη χρήση GPS και cloud τεχνολογιών, το σύστημα ενημερώνεται συνεχώς ώστε ο γιατρός να είναι ενημερωμένος για τις διαδρομές και διαθεσιμότητες. </li><li><strong>Δυνατότητα Διόρθωσης:</strong> Η πλατφόρμα επιτρέπει στον χρήστη να αλλάξει ή να επαναπρογραμματίσει το ραντεβού του ώστε να εξυπηρετείται καλύτερα. </li></ul></div><div><h3 class="text-2xl font-bold mb-3">Οφέλη για τους Χρήστες</h3><ul class="list-disc list-inside text-lg opacity-80 leading-relaxed"><li><strong>Ταχύτερη Εξυπηρέτηση:</strong> Η άμεση αντιστοίχιση μειώνει τον χρόνο αναμονής. </li><li><strong>Ευελιξία στη Διαχείριση:</strong> Ο χρήστης έχει τον πλήρη έλεγχο για αλλαγή ραντεβού ή γιατρού ανάλογα με τις μεταβαλλόμενες ανάγκες. </li><li><strong>Βελτίωση της Ποιότητας Φροντίδας:</strong> Ο συνδυασμός δεδομένων για την ειδικότητα και την εμπειρία του γιατρού βοηθά στο να παρασχεθεί η βέλτιστη ιατρική φροντίδα. </li></ul></div><div><h3 class="text-2xl font-bold mb-3">Οφέλη για τους Γιατρούς και τις Επιχειρήσεις</h3><ul class="list-disc list-inside text-lg opacity-80 leading-relaxed"><li><strong>Καλύτερη Διαχείριση Χρόνου:</strong> Οι γιατροί μπορούν να οργανώνουν τα ραντεβού τους πιο αποδοτικά, μειώνοντας τα κενά μεταξύ των επισκέψεων. </li><li><strong>Ενίσχυση Συνεργασίας:</strong> Το δίκτυο προωθεί την ανταλλαγή πληροφοριών και την άμεση επικοινωνία μεταξύ των γιατρών. </li><li><strong>Αποτελεσματικότητα Λειτουργίας:</strong> Η ψηφιοποίηση της διαχείρισης των ραντεβού επιτρέπει την καλύτερη καταγραφή δεδομένων, διενέργεια αναλύσεων και μείωση διοικητικών εξόδων. </li></ul></div></div></div><div class="mt-16 mb-16"><h2 class="text-3xl font-semibold mb-5">Συμπέρασμα</h2><p class="max-w-[820px] text-xl opacity-80 leading-relaxed"> Η ανάπτυξη ενός διασυνδεδεμένου δίκτυου γιατρών μέσω ψηφιακής πλατφόρμας προσφέρει μια καινοτόμο προσέγγιση στην οικιακή περίθαλψη. Επιτρέπει στους ασθενείς να κλείνουν ραντεβού με τον κοντινότερο ή καταλληλότερο γιατρό, να αλλάζουν ραντεβού ή γιατρό (μέχρι μία ώρα πριν) και να επαναπρογραμματίζουν εύκολα σύμφωνα με τις ανάγκες τους. <br><br> Αυτό το μοντέλο μπορεί να μειώσει σημαντικά τον χρόνο αναμονής, να βελτιώσει την εμπειρία των ασθενών και να αυξήσει την αποτελεσματικότητα του συστήματος υγείας. </p></div>',5)])))}};export{V as default};
