import{a as G}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const p="/energy.flow/assets/symbol-defs-de218909.svg",O=window.location.pathname,Q=O.lastIndexOf("/"),x=O.substring(Q);console.log(x);function X(e){let o=localStorage.getItem(e);return o||(localStorage.setItem(e,JSON.stringify([])),o="[]"),o}let S="favorites",b=X(S),h=JSON.parse(b);document.querySelector(".add-favorites");const i=document.querySelector(".favorites-list");let k;const R=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),Z=document.querySelectorAll(".favorites-list-item");if(x==="/favorites.html"){if(!b||h.length==0)R.classList.add("is-open-message-favorites"),g.classList.add("close");else if(b)try{h.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}x==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&o()?g.style.display="flex":g.style.display="none"}function o(){return i&&i.offsetParent!==null}function s(){const t=window.innerWidth<=767&&o()?8:i.children.length,a=Math.ceil(i.children.length/t);if(window.innerWidth>767&&o()){for(let c=0;c<i.children.length;c++)i.children[c].style.display="block";return}let d=1;function N(c){const v=(c-1)*t,L=v+t;for(let f=0;f<i.children.length;f++)i.children[f].style.display="none";for(let f=v;f<L&&f<i.children.length;f++)i.children[f].style.display="block"}N(d),g.innerHTML="";for(let c=1;c<=a;c++){const v=document.createElement("button");v.textContent=c,v.addEventListener("click",function(){d=c,N(d),F(d)}),g.appendChild(v)}function F(c){g.querySelectorAll("button").forEach((L,f)=>{f===c-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}F(d)}s(),window.addEventListener("resize",s);function r(){const t=Array.from(i.children).reduce((a,d)=>a+d.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",t>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),o()&&i.children.length>=8&&s()});function j(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const o=e.target.closest("li").id;ee(o)}}x==="/favorites.html"&&i.addEventListener("click",j);function ee(e){const o=h.findIndex(s=>s._id==e);h.splice(o,1),localStorage.setItem(S,JSON.stringify(h)),Z.forEach(s=>{s._id==e&&(k=s)}),k&&i.removeChild(k),(!b||h.length==0)&&(R.classList.add("is-open-message-info"),g.classList.add("close"),window.location.reload()),T()}function T(){i.innerHTML="",h.forEach(e=>{const o=B(e);i.insertAdjacentHTML("beforeend",o)})}function B(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${p}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${p}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${p}#icon-running'></use>
          </svg>
        </div>
        <p class='favorites-name-part'>${e.name}</p>
      </div>

      <ul class="favorites-card-footer-list">
        <li>
          <p class='favorites-card-footer-title'>Burned calories: <span class='favorites-footer-text-value'>${e.burnedCalories} / ${e.time} min</span></p>
        </li>
        <li>
          <p class='favorites-card-footer-title'>Body part: <span class='favorites-footer-text-value'>${e.bodyPart}</span></p>
        </li>
        <li>
          <p class='favorites-card-footer-title'>Target: <span class='favorites-footer-text-value'>${e.target}</span></p>
        </li>
      </ul>

    </li>`}function J(e){let o=JSON.parse(localStorage.getItem(S))||[];o.findIndex(r=>r._id===e._id)===-1&&(o.push(e),localStorage.setItem(S,JSON.stringify(o)))}const y=document.querySelector(".backdrop"),te=document.querySelector(".exercise-filters-list-subcategories"),oe=document.querySelector(".search-list"),H=document.querySelector("body"),se=document.querySelector(".favorites-list"),P=document.querySelector(".favorites-list"),_="is-open";let m={},U,W,n,I,u,l=JSON.parse(localStorage.getItem("favorites"))||[];H.classList.contains("home-style")&&(te.addEventListener("click",A),oe.addEventListener("click",A));H.classList.contains("favorites-style")&&se.addEventListener("click",ne);async function A(e){const o=e.target.closest("li").id;try{let r=function(t){t.target===s&&(C(),E(),s.removeEventListener("click",r))};if(e.target.nodeName!=="BUTTON")return;m=await D(o),Y(),V(m),z(),K(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),n=document.querySelector(".add-remove-favorites"),u=n.textContent,l=JSON.parse(localStorage.getItem("favorites"))||[],l.some(t=>t._id===m._id)&&(n.textContent=" Remove from "),n.addEventListener("click",ie);const s=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),y.addEventListener("click",q),s.addEventListener("click",r)}catch{}finally{}}function ie(){l=JSON.parse(localStorage.getItem("favorites"))||[],u.trim().toLowerCase()=="add to favorites"?(n.textContent=" Remove from ",u=n.textContent,J(m)):u.trim().toLowerCase()=="remove from"&&(n.textContent=" Add to favorites ",u=n.textContent,l=l.filter(e=>e._id!==m._id),localStorage.setItem("favorites",JSON.stringify(l)))}async function D(e){const o=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await G.get(o)).data}catch{}}function V(e){const o=`<div class="modal">
   <button class="modal-close" type="button">
          <svg class="close-modal-icon" width="25" height="25">
            <use href="${p}#icon-close"></use>
          </svg>
        </button>
  <div class="modal-image">     
  <img class="image-gif" src="${e.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="modal-title">${e.name}</h3>
  <div class="modal-rating">
  <div class="number-rating">${e.rating}</div>
  <div class="rating-body">
    <div class="rating-active"></div>
    <div class="rating-items">
      <input type="radio" class="rating-item" value="1" name="Rating" />
      <input type="radio" class="rating-item" value="2" name="Rating" />
      <input type="radio" class="rating-item" value="3" name="Rating" />
      <input type="radio" class="rating-item" value="4" name="Rating" />
      <input type="radio" class="rating-item" value="5" name="Rating" />
    </div>
  </div>
  </div>
  <svg class="vector" width="25" height="2">
            <use href="${p}#icon-vector"></use>
          </svg>
  <ul class="modal-list">
  <li class="modal-list-item"><span class="item-title">Target</span> <span class="item-data">${e.target}</span></li>
  <li class="modal-list-item"><span class="item-title">Body Part</span> <span class="item-data">${e.bodyPart}</span></li>
  <li class="modal-list-item"><span class="item-title">Equipment</span><span class="item-data">${e.equipment}</span></li>
  <li class="modal-list-item"><span class="item-title">Popular</span><span class="item-data">${e.popularity}</span></li>
  <li class="modal-list-item"><span class="item-title">Burned Calories</span><span class="item-data">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${p}#icon-vector"></use>
          </svg>
  <p class="description">${e.description}</p>
 <div class="button-favourites"> <button class="add-remove-favorites" type="button">Add to favorites</button>
  <svg class="heart-modal-icon" width="18" height="18">
            <use href="${p}#icon-heart"></use></svg>
             
          </div>
          </div>
  </div>
  </div> `;y.innerHTML=o}async function ne(e){const o=e.target.closest("li").id;try{let r=function(t){t.target===s&&(C(),E(),s.removeEventListener("click",r))};if(e.target.nodeName!=="BUTTON")return;m=await D(o),Y(),V(m),z(),K(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),n=document.querySelector(".add-remove-favorites"),n.textContent=" Remove from ",u=n.textContent,n.addEventListener("click",ae);const s=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),y.addEventListener("click",q),s.addEventListener("click",r)}catch{}finally{}}function ae(){l=JSON.parse(localStorage.getItem("favorites"))||[],u.trim().toLowerCase()=="add to favorites"?(n.textContent=" Remove from ",u=n.textContent,J(m),M()):u.trim().toLowerCase()=="remove from"&&(n.textContent=" Add to favorites ",u=n.textContent,l=l.filter(e=>e._id!==m._id),localStorage.setItem("favorites",JSON.stringify(l)),l=JSON.parse(localStorage.getItem("favorites"))||[],M())}function $(e){e.key==="Escape"&&(C(),E(),document.removeEventListener("keydown",$))}function q(e){e.target===y&&(C(),E(),y.removeEventListener("click",q))}function Y(){y.classList.add(_)}function C(){y.classList.remove(_)}function z(){re(),le()}function re(){U=document.querySelector(".rating-active"),W=document.querySelector(".number-rating")}function le(e=W.innerHTML){const o=e/.05;U.style.width=`${o}%`}function K(){I=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${I}px`}function E(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,I)}function M(){l=JSON.parse(localStorage.getItem("favorites"))||[],P.innerHTML="",l.forEach(e=>{const o=B(e);P.insertAdjacentHTML("beforeend",o)})}export{p as i};
//# sourceMappingURL=modal_window-7d3c67d9.js.map
