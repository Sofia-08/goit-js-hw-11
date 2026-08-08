import{a as d,S as p,i as a}from"./assets/vendor-D4X_Z5W8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="57070176-1d3ec272671065a7e5a57d0b3";function h(r){return d.get("https://pixabay.com/api/",{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data)}function y(r){return r.map(({webformatURL:o,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${s}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${e}</p>
        <p class="info-item"><b>Views</b> ${t}</p>
        <p class="info-item"><b>Comments</b> ${n}</p>
        <p class="info-item"><b>Downloads</b> ${m}</p>
      </div>
    </li>
  `).join("")}function b(r){r.classList.remove("hidden")}function c(r){r.classList.add("hidden")}const u=document.querySelector(".form"),f=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements.searchQuery.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}f.innerHTML="",b(l),h(o).then(i=>{if(c(l),i.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=y(i.hits);f.innerHTML=s,L.refresh()}).catch(()=>{c(l),a.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"})}).finally(()=>{u.reset()})});
//# sourceMappingURL=index.js.map
