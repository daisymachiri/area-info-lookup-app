import{d as a,e as c}from"./chunk-5ETUQV6D.js";import"./chunk-LN54NTR4.js";import{a as i}from"./chunk-FQ42KCOL.js";import{b as r,c as s}from"./chunk-ZWIP3AYQ.js";import{f as n}from"./chunk-RW4GY4BD.js";var h=()=>{let e=window;e.addEventListener("statusTap",()=>{r(()=>{let m=e.innerWidth,d=e.innerHeight,o=document.elementFromPoint(m/2,d/2);if(!o)return;let t=a(o);t&&new Promise(l=>i(t,l)).then(()=>{s(()=>n(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield c(t,300),t.style.removeProperty("--overflow")}))})})})};export{h as startStatusTap};
