const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DnIC83Sh.js","./Bp7-Etcb.js","./ZpYlJ7kN.js"])))=>i.map(i=>d[i]);
import{B as _n,a as J,C as En,D as rn,E as R,r as Bn,G as Un,H as ln,I as an,J as V,K as $,L as In,M as jn,s as $n,k as K,N as un,n as Nn,O as N,P as zn,_ as sn,Q as Hn,R as Fn,S as qn,f as Wn}from"./Bp7-Etcb.js";import{t as Vn,u as Kn}from"./ZpYlJ7kN.js";import{u as Xn}from"./8jbg-enr.js";function Yn(n,l){const{title:e,titleTemplate:t,...r}=n;return Xn({title:e,titleTemplate:t,_flatMeta:r},{...l,transform(o){const u=_n({...o._flatMeta});return delete o._flatMeta,{...o,meta:u}}})}const Qn=/\d/,Gn=["-","_","/","."];function Zn(n=""){if(!Qn.test(n))return n!==n.toLowerCase()}function cn(n,l){const e=Gn,t=[];if(!n||typeof n!="string")return t;let r="",o,u;for(const s of n){const p=e.includes(s);if(p===!0){t.push(r),r="",o=void 0;continue}const d=Zn(s);if(u===!1){if(o===!1&&d===!0){t.push(r),r=s,o=d;continue}if(o===!0&&d===!1&&r.length>1){const f=r.at(-1);t.push(r.slice(0,Math.max(0,r.length-1))),r=f+s,o=d;continue}}r+=s,o=d,u=p}return t.push(r),t}function Jn(n){return n?n[0].toUpperCase()+n.slice(1):""}function _(n,l){return n?(Array.isArray(n)?n:cn(n)).map(e=>Jn(e)).join(""):""}function pn(n,l){return n?(Array.isArray(n)?n:cn(n)).map(e=>e.toLowerCase()).join("-"):""}const I=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class j{constructor(l,e,t){this.property=l,this.normal=e,t&&(this.space=t)}}j.prototype.property={};j.prototype.normal={};j.prototype.space=null;function dn(n,l){const e={},t={};let r=-1;for(;++r<n.length;)Object.assign(e,n[r].property),Object.assign(t,n[r].normal);return new j(e,t,l)}function X(n){return n.toLowerCase()}class k{constructor(l,e){this.property=l,this.attribute=e}}k.prototype.space=null;k.prototype.boolean=!1;k.prototype.booleanish=!1;k.prototype.overloadedBoolean=!1;k.prototype.number=!1;k.prototype.commaSeparated=!1;k.prototype.spaceSeparated=!1;k.prototype.commaOrSpaceSeparated=!1;k.prototype.mustUseProperty=!1;k.prototype.defined=!1;let ne=0;const i=L(),y=L(),fn=L(),a=L(),h=L(),E=L(),S=L();function L(){return 2**++ne}const Y=Object.freeze(Object.defineProperty({__proto__:null,boolean:i,booleanish:y,commaOrSpaceSeparated:S,commaSeparated:E,number:a,overloadedBoolean:fn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),W=Object.keys(Y);class nn extends k{constructor(l,e,t,r){let o=-1;if(super(l,e),tn(this,"space",r),typeof t=="number")for(;++o<W.length;){const u=W[o];tn(this,W[o],(t&Y[u])===Y[u])}}}nn.prototype.defined=!0;function tn(n,l,e){e&&(n[l]=e)}const ee={}.hasOwnProperty;function B(n){const l={},e={};let t;for(t in n.properties)if(ee.call(n.properties,t)){const r=n.properties[t],o=new nn(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(o.mustUseProperty=!0),l[t]=o,e[X(t)]=t,e[X(o.attribute)]=t}return new j(l,e,n.space)}const gn=B({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),hn=B({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function mn(n,l){return l in n?n[l]:l}function yn(n,l){return mn(n,l.toLowerCase())}const vn=B({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:yn,properties:{xmlns:null,xmlnsXLink:null}}),bn=B({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:y,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:h,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:a,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:h,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:y,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}}),le=B({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:yn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:E,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:h,autoFocus:i,autoPlay:i,blocking:h,capture:null,charSet:null,checked:i,cite:null,className:h,cols:a,colSpan:null,content:null,contentEditable:y,controls:i,controlsList:h,coords:a|E,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:fn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:h,height:a,hidden:i,high:a,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:i,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:h,itemRef:h,itemScope:i,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:a,pattern:null,ping:h,placeholder:null,playsInline:i,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:h,required:i,reversed:i,rows:a,rowSpan:a,sandbox:h,scope:null,scoped:i,seamless:i,selected:i,shadowRootClonable:i,shadowRootDelegatesFocus:i,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:y,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,disableRemotePlayback:i,prefix:null,property:null,results:a,security:null,unselectable:null}}),te=B({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:mn,properties:{about:S,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:E,g2:E,glyphName:E,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),oe=/^data[-\w.:]+$/i,on=/-[a-z]/g,re=/[A-Z]/g;function ae(n,l){const e=X(l);let t=l,r=k;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&oe.test(l)){if(l.charAt(4)==="-"){const o=l.slice(5).replace(on,ie);t="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=l.slice(4);if(!on.test(o)){let u=o.replace(re,ue);u.charAt(0)!=="-"&&(u="-"+u),l="data"+u}}r=nn}return new r(t,l)}function ue(n){return"-"+n.toLowerCase()}function ie(n){return n.charAt(1).toUpperCase()}const se=dn([hn,gn,vn,bn,le],"html");dn([hn,gn,vn,bn,te],"svg");const ce=["p","h1","h2","h3","h4","h5","h6","li"];function z(n,l){return n.type===l||typeof n.type=="object"&&n.type.tag===l||n.tag===l}function en(n){return z(n,"text")||z(n,Symbol.for("v-txt"))}function Cn(n){var l;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((l=n.children)==null?void 0:l.default)=="function"?n.children.default():[]}function Q(n){if(!n)return"";if(Array.isArray(n))return n.map(Q).join("");if(en(n))return n.value||n.children||"";const l=Cn(n);return Array.isArray(l)?l.map(Q).filter(Boolean).join(""):""}function Sn(n,l=[]){if(Array.isArray(n))return n.flatMap(t=>Sn(t,l));let e=n;return l.some(t=>t==="*"||z(n,t))&&(e=Cn(n)||n,!Array.isArray(e)&&ce.some(t=>z(n,t))&&(e=[e])),e}function kn(n,l=[]){return n=Array.isArray(n)?n:[n],l.length?n.flatMap(e=>kn(Sn(e,[l[0]]),l.slice(1))).filter(e=>!(en(e)&&Q(e).trim()==="")):n}function wn(n,l=[]){return typeof l=="string"&&(l=l.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),l.length?kn(n,l).reduce((e,t)=>(en(t)?typeof e[e.length-1]=="string"?e[e.length-1]+=t.children:e.push(t.children):e.push(t),e),[]):n}function pe(n,l){return l.reduce((e,t)=>{const r=de(n,t);return r!==void 0&&(e[t]=r),e},{})}function de(n,l){return l.split(".").reduce((e,t)=>e&&e[t],n)}const G="default",Pn=/^@|^v-on:/,xn=/^:|^v-bind:/,fe=/^v-model/,ge=["select","textarea","input"],he=["math","svg"],me=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),ye=J({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var p,d,f,g,b,O,x,C;const l=(f=(d=(p=En())==null?void 0:p.appContext)==null?void 0:d.app)==null?void 0:f.$nuxt,e=(l==null?void 0:l.$route)||(l==null?void 0:l._route),{mdc:t}=((g=l==null?void 0:l.$config)==null?void 0:g.public)||{},r={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?me:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...rn(((C=(x=n.data)==null?void 0:x.mdc)==null?void 0:C.components)||{}),...n.components},o=R(()=>{var M;const w=(((M=n.body)==null?void 0:M.children)||[]).map(T=>T.tag||T.type).filter(T=>!I.includes(T));return Array.from(new Set(w)).sort().join(".")}),u=Bn({...n.data});Un(()=>n.data,w=>{Object.assign(u,w)}),await De(n.body,{tags:r});function s(w,M){const T=w.split(".").length-1;return w.split(".").reduce((D,c,m)=>m==T&&D?(D[c]=M,D[c]):typeof D=="object"?D[c]:void 0,u)}return{tags:r,contentKey:o,route:e,runtimeData:u,updateRuntimeData:s}},render(n){var O,x;const{tags:l,tag:e,body:t,data:r,contentKey:o,route:u,unwrap:s,runtimeData:p,updateRuntimeData:d}=n;if(!t)return null;const f={...r,tags:l,$route:u,runtimeData:p,updateRuntimeData:d},g=e!==!1?Z(e||((O=f.component)==null?void 0:O.name)||f.component||"div"):void 0;return g?ln(g,{...(x=f.component)==null?void 0:x.props,class:n.class,...this.$attrs,key:o},{default:b}):b==null?void 0:b();function b(){const C=On(t,ln,{documentMeta:f,parentScope:f,resolveComponent:Z});return C!=null&&C.default?s?wn(C.default(),typeof s=="string"?s.split(" "):["*"]):C.default():null}}});function ve(n,l,e){const{documentMeta:t,parentScope:r,resolveComponent:o}=e;if(n.type==="text")return l($,n.value);if(n.type==="comment")return l(In,null,n.value);const u=n.tag,s=Dn(n,t.tags);if(n.tag==="binding")return be(n,l,t,r);const p=Tn(s)?g=>g:o,d=p(s);typeof d=="object"&&(d.tag=u);const f=Ce(n,t);return l(d,f,On(n,l,{documentMeta:t,parentScope:{...r,...f},resolveComponent:p}))}function On(n,l,e){const{documentMeta:t,parentScope:r,resolveComponent:o}=e,s=(n.children||[]).reduce((d,f)=>{if(!Oe(f))return d[G].children.push(f),d;const g=xe(f);return d[g]=d[g]||{props:{},children:[]},f.type==="element"&&(d[g].props=f.props,d[g].children.push(...f.children||[])),d},{[G]:{props:{},children:[]}});return Object.entries(s).reduce((d,[f,{props:g,children:b}])=>(b.length&&(d[f]=(O={})=>{const x=pe(O,Object.keys(g||{}));let C=b.map(w=>ve(w,l,{documentMeta:t,parentScope:{...r,...x},resolveComponent:o}));return g!=null&&g.unwrap&&(C=wn(C,g.unwrap)),Te(C)}),d),{})}function be(n,l,e,t={}){var d,f;const r={...e.runtimeData,...t,$document:e,$doc:e},o=/\.|\[(\d+)\]/,s=((d=n.props)==null?void 0:d.value.trim().split(o).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},r),p=(f=n.props)==null?void 0:f.defaultValue;return l($,s??p??"")}function Ce(n,l){const{tag:e="",props:t={}}=n;return Object.keys(t).reduce(function(r,o){if(o==="__ignoreMap")return r;const u=t[o];if(fe.test(o))return Se(o,u,r,l,{native:ge.includes(e)});if(o==="v-bind")return ke(o,u,r,l);if(Pn.test(o))return we(o,u,r,l);if(xn.test(o))return Pe(o,u,r,l);const{attribute:s}=ae(se,o);return Array.isArray(u)&&u.every(p=>typeof p=="string")?(r[s]=u.join(" "),r):(r[s]=u,r)},{})}function Se(n,l,e,t,{native:r}){var p;const o=((p=n.match(/^v-model:([^=]+)/))==null?void 0:p[1])||"modelValue",u=r?"value":o,s=r?"onInput":`onUpdate:${o}`;return e[u]=q(l,t.runtimeData),e[s]=d=>{var f;t.updateRuntimeData(l,r?(f=d.target)==null?void 0:f.value:d)},e}function ke(n,l,e,t){const r=q(l,t);return e=Object.assign(e,r),e}function we(n,l,e,t){return n=n.replace(Pn,""),e.on=e.on||{},e.on[n]=()=>q(l,t),e}function Pe(n,l,e,t){return n=n.replace(xn,""),e[n]=q(l,t),e}const Z=n=>{if(typeof n=="string"){if(I.includes(n))return n;const l=an(_(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?V(()=>new Promise(e=>e(l))):l}return n};function q(n,l){const e=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,l);return typeof e>"u"?jn(n):e}function xe(n){let l="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){l=e.split(/[:#]/,2)[1];break}return l||G}function Oe(n){return n.tag==="template"}function Tn(n){return he.includes(n)}function Te(n){const l=[];for(const e of n){const t=l[l.length-1];e.type===$&&(t==null?void 0:t.type)===$?t.children=t.children+e.children:l.push(e)}return l}async function De(n,l){if(!n)return;const e=Array.from(new Set(t(n,l)));await Promise.all(e.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const o=Z(r);o!=null&&o.__asyncLoader&&!o.__asyncResolved&&await o.__asyncLoader()}));function t(r,o){const u=r.tag;if(r.type==="text"||u==="binding"||r.type==="comment")return[];const s=Dn(r,o.tags);if(Tn(s))return[];const p=[];r.type!=="root"&&!I.includes(s)&&p.push(s);for(const d of r.children||[])p.push(...t(d,o));return p}}function Dn(n,l){var t;const e=n.tag;return!e||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?e:l[e]||l[_(e)]||l[pn(n.tag)]||e}function Me(n){return{type:"root",children:n.value.map(Mn)}}function Mn(n){if(typeof n=="string")return{type:"text",value:n};const[l,e,...t]=n;return{type:"element",tag:l,props:e,children:t.map(Mn)}}const Ln=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl"],An=[],Le=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:Ln,localComponents:An},Symbol.toStringTag,{value:"Module"})),Ae=J({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var w,M,T,D;const l=["render","ssrRender","__ssrInlineRender"],e=n,t=!1,r=R(()=>{let c=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(c=e.value.excerpt),c.type==="minimal"?Me(c):c}),o=R(()=>{var c,m;return!((m=(c=r.value)==null?void 0:c.children)!=null&&m.length)}),u=R(()=>{const{body:c,excerpt:m,...v}=e.value;return{...v,...e.data}}),s=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(c=>[c,`prose-${c}`])),{mdc:p}=$n().public||{},d={...(w=p==null?void 0:p.components)!=null&&w.prose&&e.prose!==!1?s:{},...((M=p==null?void 0:p.components)==null?void 0:M.map)||{},...rn(((D=(T=e.data)==null?void 0:T.mdc)==null?void 0:D.components)||{}),...e.components},f=R(()=>{}),g=R(()=>r.value?O(r.value,{tags:d}):{});function b(c){let m=c;if(typeof c=="string"){if(I.includes(c))return c;if(Ln.includes(_(c))?m=an(c,!1):An.includes(_(c))&&(m=V(()=>sn(()=>Promise.resolve().then(()=>Le),void 0,import.meta.url).then(P=>P[_(c)]()))),typeof m=="string")return m}if(!m)return m;const v=m;return"__asyncLoader"in v?v:"setup"in v?V(()=>Promise.resolve(v)):v}function O(c,m){if(!c)return;const v=Array.from(new Set(x(c,m))),P={};for(const[A,U]of v)typeof U=="object"&&l.some(Rn=>Object.hasOwnProperty.call(U,Rn))||P[A]||(P[A]=b(U));return P}function x(c,m){const v=c.tag;if(c.type==="text"||v==="binding"||c.type==="comment")return[];const P=C(c,m.tags),A=[];c.type!=="root"&&!I.includes(P)&&A.push([v,P]);for(const U of c.children||[])A.push(...x(U,m));return A}function C(c,m){var P;const v=c.tag;return!v||typeof((P=c.props)==null?void 0:P.__ignoreMap)<"u"?v:m[v]||m[_(v)]||m[pn(c.tag)]||v}return(c,m)=>o.value?zn(c.$slots,"empty",{key:1,body:r.value,data:u.value,dataContentId:N(t)?n.value.id:void 0}):(K(),un(ye,{key:f.value,body:r.value,data:u.value,class:Nn(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:g.value,"data-content-id":N(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),H=(n,l)=>{const e=n._conditions;return e.length>0?`(${e.join(` ${l} `)})`:""},F=n=>{const l=[],e={_conditions:l,where(t,r,o){let u;switch(r.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(o)){const s=o.map(p=>`'${p}'`).join(", ");u=`"${String(t)}" ${r.toUpperCase()} (${s})`}else throw new TypeError(`Value for ${r} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(o)&&o.length===2)u=`"${String(t)}" ${r.toUpperCase()} '${o[0]}' AND '${o[1]}'`;else throw new Error(`Value for ${r} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":u=`"${String(t)}" ${r.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":u=`"${String(t)}" ${r.toUpperCase()} '${o}'`;break;default:u=`"${String(t)}" ${r} '${o}'`}return l.push(`${u}`),e},andWhere(t){const r=t(F());return l.push(H(r,"AND")),e},orWhere(t){const r=t(F());return l.push(H(r,"OR")),e}};return e},Re=(n,l)=>{const e={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},t={__params:e,andWhere(o){const u=o(F());return e.conditions.push(H(u,"AND")),t},orWhere(o){const u=o(F());return e.conditions.push(H(u,"OR")),t},path(o){return t.where("path","=",Hn(o))},skip(o){return e.offset=o,t},where(o,u,s){return t.andWhere(p=>p.where(String(o),u,s)),t},limit(o){return e.limit=o,t},select(...o){return o.length&&e.selectedFields.push(...o),t},order(o,u){return e.orderBy.push(`"${String(o)}" ${u}`),t},async all(){return l(n,r()).then(o=>o||[])},async first(){return l(n,r({limit:1})).then(o=>o[0]||null)},async count(o="*",u=!1){return l(n,r({count:{field:String(o),distinct:u}})).then(s=>s[0].count)}};function r(o={}){let u="SELECT ";if(o!=null&&o.count)u+=`COUNT(${o.count.distinct?"DISTINCT":""} ${o.count.field}) as count`;else{const p=Array.from(new Set(e.selectedFields));u+=p.length>0?p.map(d=>`"${String(d)}"`).join(", "):"*"}u+=` FROM ${Vn[String(n)]}`,e.conditions.length>0&&(u+=` WHERE ${e.conditions.join(" AND ")}`),e.orderBy.length>0?u+=` ORDER BY ${e.orderBy.join(", ")}`:u+=" ORDER BY stem ASC";const s=(o==null?void 0:o.limit)||e.limit;return s>0&&(e.offset>0?u+=` LIMIT ${s} OFFSET ${e.offset}`:u+=` LIMIT ${s}`),u}return t},_e=n=>{var e,t;const l=(t=(e=Fn())==null?void 0:e.ssrContext)==null?void 0:t.event;return Re(n,(r,o)=>Ee(l,r,o))};async function Ee(n,l,e){return Be(l,e)}async function Be(n,l){return await sn(()=>import("./DnIC83Sh.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.loadDatabaseAdapter(n)).then(t=>t.all(l))}const Ue={key:1},Ne=J({__name:"index",async setup(n){var r,o;let l,e;const{data:t}=([l,e]=qn(()=>Kn(()=>_e("content").path("/").first(),"$pqtWcjQkdb")),l=await l,e(),l);return Yn({title:(r=t.value)==null?void 0:r.title,description:(o=t.value)==null?void 0:o.description}),(u,s)=>{const p=Ae;return N(t)?(K(),un(p,{key:0,value:N(t)},null,8,["value"])):(K(),Wn("div",Ue,"Home not found"))}}});export{Ne as default};
