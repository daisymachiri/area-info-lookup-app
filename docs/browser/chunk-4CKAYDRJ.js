import{i as h}from"./chunk-3IVKBF6N.js";import{c as p}from"./chunk-JWIEPCRG.js";import"./chunk-C5RQ2IC2.js";import"./chunk-RW4GY4BD.js";var a=e=>e&&e.dir!==""?e.dir.toLowerCase()==="rtl":(document==null?void 0:document.dir.toLowerCase())==="rtl";var G=(e,g,f,w,v)=>{let i=e.ownerDocument.defaultView,n=a(e),X=t=>{let{startX:o}=t;return n?o>=i.innerWidth-50:o<=50},d=t=>n?-t.deltaX:t.deltaX,y=t=>n?-t.velocityX:t.velocityX;return p({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(n=a(e),X(t)&&g()),onStart:f,onMove:t=>{let o=d(t)/i.innerWidth;w(o)},onEnd:t=>{let r=d(t),o=i.innerWidth,s=r/o,c=y(t),D=o/2,u=c>=0&&(c>.2||r>D),l=(u?1-s:s)*o,m=0;if(l>5){let L=l/Math.abs(c);m=Math.min(L,540)}v(u,s<=0?.01:h(0,s,.9999),m)}})};export{G as createSwipeBackGesture};
