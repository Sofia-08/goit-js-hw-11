import{a as p,S as g,i as a}from"./assets/vendor-CMFIJsrw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="57070176-1d3ec272671065a7e5a57d0b3";function y(i){return p.get("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data)}const u=document.querySelector(".gallery"),m=document.querySelector(".loader");let b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(){u.innerHTML=""}function w(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${t}</p>
        <p class="info-item"><b>Views</b> ${s}</p>
        <p class="info-item"><b>Comments</b> ${f}</p>
        <p class="info-item"><b>Downloads</b> ${d}</p>
      </div>
    </li>
  `).join("");u.innerHTML=r,b.refresh()}function P(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements.searchQuery.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),P(),y(r).then(o=>{if(l(),o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(o.hits)}).catch(o=>{l(),a.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{c.reset()})});
//# sourceMappingURL=index.js.map
