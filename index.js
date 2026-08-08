import{S as h,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="57070176-1d3ec272671065a7e5a57d0b3";function p(o){const i=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r})}function g(o){return o.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${i}" alt="${s}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${e}</p>
        <p class="info-item"><b>Views</b> ${t}</p>
        <p class="info-item"><b>Comments</b> ${n}</p>
        <p class="info-item"><b>Downloads</b> ${m}</p>
      </div>
    </li>
  `).join("")}function y(o){o.classList.remove("hidden")}function l(o){o.classList.add("hidden")}const u=document.querySelector(".search-form"),f=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new h(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",o=>{o.preventDefault();const i=o.currentTarget.elements.searchQuery.value.trim();if(!i){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}f.innerHTML="",y(c),p(i).then(r=>{if(l(c),r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=g(r.hits);f.innerHTML=s,b.refresh()}).catch(()=>{l(c),a.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"})}).finally(()=>{u.reset()})});
//# sourceMappingURL=index.js.map
