import{b as f}from"./chunk-NK3O5DJF.js";import{b as d,c as p,d as u,f as b,g as h,j as y}from"./chunk-ZJYFYRHS.js";import"./chunk-BAKMWPBW.js";import{f as m}from"./chunk-RW4GY4BD.js";var E=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",C=E,O=class{constructor(t){d(this,t),this.type="bounded"}addRipple(t,w){return m(this,null,function*(){return new Promise(k=>{p(()=>{let a=this.el.getBoundingClientRect(),e=a.width,i=a.height,g=Math.sqrt(e*e+i*i),l=Math.max(i,e),v=this.unbounded?l:g+L,o=Math.floor(l*M),A=v/o,r=t-a.left,c=w-a.top;this.unbounded&&(r=e*.5,c=i*.5);let I=r-o*.5,x=c-o*.5,R=e*.5-r,z=i*.5-c;u(()=>{let s=document.createElement("div");s.classList.add("ripple-effect");let n=s.style;n.top=x+"px",n.left=I+"px",n.width=n.height=o+"px",n.setProperty("--final-scale",`${A}`),n.setProperty("--translate-end",`${R}px, ${z}px`),(this.el.shadowRoot||this.el).appendChild(s),setTimeout(()=>{k(()=>{T(s)})},325)})})})})}get unbounded(){return this.type==="unbounded"}render(){let t=f(this);return b(h,{key:"40c7f73e7f5f67e29f83e1236a61c6e1c9943c42",role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return y(this)}},T=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},L=10,M=.5;O.style=C;export{O as ion_ripple_effect};
