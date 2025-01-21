import{a as L,S as P,i as p}from"./assets/vendor-DEenWwFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const b="48306613-fd23d021c55686c3494b56897";async function u(t,a,l){const o=new URLSearchParams({key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:l});return(await L.get("https://pixabay.com/api/",{params:o})).data}function d(t){return t.map(({webformatURL:a,tags:l,likes:o,views:e,comments:r,downloads:n,largeImageURL:f})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${f}">
                    <img class="gallery-image" src="${a}" alt="${l}" height=312 width=200>
                    <ul class="gallery-image-data">
                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Likes</p>
                            <p class="gallery-image-data-item-value">${o}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Views</p>
                            <p class="gallery-image-data-item-value">${e}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Comments</p>
                            <p class="gallery-image-data-item-value">${r}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Downloads</p>
                            <p class="gallery-image-data-item-value">${n}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".image-search-form"),c=document.querySelector(".load-more-btn"),s={page:1,perPage:15,maxPages:1,searchQuery:""},h=new P(".gallery li a",{captionsData:"alt",captionDelay:250});y.addEventListener("input",t=>{s.searchQuery=t.target.value.trim()});c.addEventListener("click",async t=>{s.page+=1,i(g,!0),i(c,!1);const a=await u(s.searchQuery,s.page,s.perPage);i(g,!1),m.insertAdjacentHTML("beforeend",d(a.hits)),v(),h.refresh(),a.totalHits<=s.page*s.perPage?p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):i(c,!0)});y.addEventListener("submit",async t=>{if(t.preventDefault(),s.page=1,!s.searchQuery)return;m.innerHTML="",i(g,!0),i(c,!1);const a=await u(s.searchQuery,s.page,s.perPage).catch(l=>{p.error({message:"There are some errors with loading pictures.",position:"topRight"}),console.error(l)});a&&(i(g,!1),a.hits.length?(m.innerHTML=d(a.hits),h.refresh(),a.totalHits>s.perPage&&i(c,!0)):p.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))});function v(){const t=document.querySelector(".gallery-card");window.scrollBy({top:t.getBoundingClientRect().height*2,behavior:"smooth"})}function i(t,a){a?t.style.display="block":t.style.display="none"}
//# sourceMappingURL=index.js.map
