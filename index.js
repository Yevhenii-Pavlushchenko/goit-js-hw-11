import{a as f,S as y,i as c}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api",v="54685682-80977b0b5ca1319a1902ced87";f.defaults.baseURL=d;function b(s){return f({url:d,method:"get",params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>console.log(o))}const m=document.querySelector(".gallery"),p=document.querySelector(".loader");let l=null;function w(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:h,downloads:g})=>`
            <li class="list-item">
                <a href="${n}"><img src="${r}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${t}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${a}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${h}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${g}</p>
                    </div>
                </div>
            </li>
        `).join("");m.innerHTML=o,l?l.refresh():l=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function L(){m.innerHTML=""}function x(){p.style.display="inline-block"}function i(){p.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",S);i();function S(s){s.preventDefault();const o=new FormData(u).get("search-text").trim();if(o===""){c.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),i();return}L(),x(),b(o).then(({hits:r})=>{if(!r||r.length===0){c.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),i();return}w(r),i()}).catch(r=>{i(),console.log(r.message),c.show({message:"Sorry, but there was an error processing your request. Please try again.",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}),u.reset()}
//# sourceMappingURL=index.js.map
