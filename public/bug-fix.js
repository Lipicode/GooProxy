document.addEventListener("DOMContentLoaded",()=>{console.log("Bug-fix.js loaded.");document.querySelectorAll("a").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();let href=a.getAttribute("href");if(href&&href.startsWith("/?url="))window.location.href=href;})});});
