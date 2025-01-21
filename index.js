import{a as L,S as P,i as m}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const b="48306613-fd23d021c55686c3494b56897";async function u(t,e,o){const l=new URLSearchParams({key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o});return await L.get("https://pixabay.com/api/",{params:l})}function d(t){return t.map(({webformatURL:e,tags:o,likes:l,views:a,comments:r,downloads:c,largeImageURL:f})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${f}">
                    <img class="gallery-image" src="${e}" alt="${o}" height=312 width=200>
                    <ul class="gallery-image-data">
                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Likes</p>
                            <p class="gallery-image-data-item-value">${l}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Views</p>
                            <p class="gallery-image-data-item-value">${a}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Comments</p>
                            <p class="gallery-image-data-item-value">${r}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Downloads</p>
                            <p class="gallery-image-data-item-value">${c}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}const p=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".image-search-form"),n=document.querySelector(".load-more-btn"),i={page:1,perPage:15,maxPages:1,searchQuery:""},h=new P(".gallery li a",{captionsData:"alt",captionDelay:250});y.addEventListener("input",t=>{i.searchQuery=t.target.value.trim()});n.addEventListener("click",async t=>{i.page+=1,s(g,!0),s(n,!1);const e=await u(i.searchQuery,i.page,i.perPage);s(g,!1),p.insertAdjacentHTML("beforeend",d(e.hits)),v(),h.refresh(),e.totalHits<=i.page*i.perPage?m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):s(n,!0)});y.addEventListener("submit",async t=>{t.preventDefault(),i.page=1,i.searchQuery&&(p.innerHTML="",s(g,!0),s(n,!1),await u(i.searchQuery,i.page,i.perPage).then(e=>{s(g,!1),e.hits.length?(p.innerHTML=d(e.hits),h.refresh(),e.totalHits>i.perPage&&s(n,!0)):m.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{m.error({message:"There are some errors with loading pictures.",position:"topRight"}),console.error(e)}))});function v(){const t=document.querySelector(".gallery-card");window.scrollBy({top:t.getBoundingClientRect().height*2,behavior:"smooth"})}function s(t,e){e?t.style.display="block":t.style.display="none"}
//# sourceMappingURL=index.js.map
