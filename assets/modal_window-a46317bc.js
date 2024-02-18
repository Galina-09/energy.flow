import{a as K}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const v="/energy.flow/assets/symbol-defs-de218909.svg",O=window.location.pathname,G=O.lastIndexOf("/"),I=O.substring(G);function Q(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let S="favorites",b=Q(S),g=JSON.parse(b);document.querySelector(".add-favorites");const a=document.querySelector(".favorites-list");let E;const P=document.querySelector(".message-favorites"),w=document.querySelector(".favorites-pagination-block"),y=document.querySelector(".div-favorites-section"),X=document.querySelectorAll(".favorites-list-item");if(I==="/favorites.html"){if(!b||g.length==0)P.classList.add("is-open-message-favorites"),w.classList.add("close");else if(b)try{g.forEach(e=>{R()})}catch(e){console.log(e.name),console.log(e.message)}}I==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){return a&&a.offsetParent!==null}function t(){const n=window.innerWidth<=767&&e()?8:a.children.length,o=Math.ceil(a.children.length/n);if(window.innerWidth>767&&e()){for(let c=0;c<a.children.length;c++)a.children[c].style.display="block";return}let i=1;function h(c){const m=(c-1)*n,L=m+n;for(let d=0;d<a.children.length;d++)a.children[d].style.display="none";for(let d=m;d<L&&d<a.children.length;d++)a.children[d].style.display="block"}h(i),w.innerHTML="";for(let c=1;c<=o;c++){const m=document.createElement("button");m.textContent=c,m.addEventListener("click",function(){i=c,h(i),N(i)}),w.appendChild(m)}function N(c){w.querySelectorAll("button").forEach((L,d)=>{d===c-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}N(i)}t(),window.addEventListener("resize",t);function s(){const n=Array.from(a.children).reduce((o,i)=>o+i.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?y.style.maxHeight="500px":y.style.maxHeight="none",n>y.offsetHeight?y.style.overflowY="scroll":y.style.overflowY="visible",window.scrollBy(0,10)}s(),window.addEventListener("resize",function(){t(),s()}),e()&&a.children.length>=8&&t()});function Z(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;j(t)}}I==="/favorites.html"&&a.addEventListener("click",Z);function j(e){const t=g.findIndex(s=>s._id==e);g.splice(t,1),localStorage.setItem(S,JSON.stringify(g)),X.forEach(s=>{s._id==e&&(E=s)}),E&&a.removeChild(E),(!b||g.length==0)&&(P.classList.add("is-open-message-info"),w.classList.add("close"),window.location.reload()),R()}function R(){a.innerHTML="",g.forEach(e=>{const t=T(e);a.insertAdjacentHTML("beforeend",t)})}function T(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${v}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${v}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${v}#icon-running'></use>
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

    </li>`}function B(e){let t=JSON.parse(localStorage.getItem(S))||[];t.findIndex(n=>n._id===e._id)===-1&&(t.push(e),localStorage.setItem(S,JSON.stringify(t)))}const p=document.querySelector(".backdrop"),ee=document.querySelector(".exercise-filters-list-subcategories"),te=document.querySelector(".search-list"),J=document.querySelector("body"),oe=document.querySelector(".favorites-list"),F=document.querySelector(".favorites-list"),H="is-open";let f={},_,U,r,k,u,l=JSON.parse(localStorage.getItem("favorites"))||[];J.classList.contains("home-style")&&(ee.addEventListener("click",A),te.addEventListener("click",A));J.classList.contains("favorites-style")&&oe.addEventListener("click",ie);async function A(e){const t=e.target.closest("li").id;try{let n=function(o){o.target===s&&(C(),x(),s.removeEventListener("click",n))};if(e.target.nodeName!=="BUTTON")return;f=await D(t),V(),W(f),Y(),z(),document.querySelectorAll("span").forEach(function(o){o.textContent=o.textContent.charAt(0).toUpperCase()+o.textContent.slice(1)}),r=document.querySelector(".add-remove-favorites"),u=r.textContent,l=JSON.parse(localStorage.getItem("favorites"))||[],l.some(o=>o._id===f._id)&&(r.textContent=" Remove from "),r.addEventListener("click",se);const s=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),p.addEventListener("click",q),s.addEventListener("click",n)}catch{}finally{}}function se(){l=JSON.parse(localStorage.getItem("favorites"))||[],u.trim().toLowerCase()=="add to favorites"?(r.textContent=" Remove from ",u=r.textContent,B(f)):u.trim().toLowerCase()=="remove from"&&(r.textContent=" Add to favorites ",u=r.textContent,l=l.filter(e=>e._id!==f._id),localStorage.setItem("favorites",JSON.stringify(l)))}async function D(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await K.get(t)).data}catch{}}function W(e){const t=`<div class="modal">
   <button class="modal-close" type="button">
          <svg class="close-modal-icon" width="25" height="25">
            <use href="${v}#icon-close"></use>
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
            <use href="${v}#icon-vector"></use>
          </svg>
  <ul class="modal-list">
  <li class="modal-list-item"><span class="item-title">Target</span> <span class="item-data">${e.target}</span></li>
  <li class="modal-list-item"><span class="item-title">Body Part</span> <span class="item-data">${e.bodyPart}</span></li>
  <li class="modal-list-item"><span class="item-title">Equipment</span><span class="item-data">${e.equipment}</span></li>
  <li class="modal-list-item"><span class="item-title">Popular</span><span class="item-data">${e.popularity}</span></li>
  <li class="modal-list-item"><span class="item-title">Burned Calories</span><span class="item-data">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${v}#icon-vector"></use>
          </svg>
  <p class="description">${e.description}</p>
 <div class="button-favourites"> <button class="add-remove-favorites" type="button">Add to favorites</button>
  <svg class="heart-modal-icon" width="18" height="18">
            <use href="${v}#icon-heart"></use></svg>
             
          </div>
          </div>
  </div>
  </div> `;p.innerHTML=t}async function ie(e){const t=e.target.closest("li").id;try{let n=function(o){o.target===s&&(C(),x(),s.removeEventListener("click",n))};if(e.target.nodeName!=="BUTTON")return;f=await D(t),V(),W(f),Y(),z(),document.querySelectorAll("span").forEach(function(o){o.textContent=o.textContent.charAt(0).toUpperCase()+o.textContent.slice(1)}),r=document.querySelector(".add-remove-favorites"),r.textContent=" Remove from ",u=r.textContent,r.addEventListener("click",ne);const s=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),p.addEventListener("click",q),s.addEventListener("click",n)}catch{}finally{}}function ne(){l=JSON.parse(localStorage.getItem("favorites"))||[],u.trim().toLowerCase()=="add to favorites"?(r.textContent=" Remove from ",u=r.textContent,B(f),M()):u.trim().toLowerCase()=="remove from"&&(r.textContent=" Add to favorites ",u=r.textContent,l=l.filter(e=>e._id!==f._id),localStorage.setItem("favorites",JSON.stringify(l)),l=JSON.parse(localStorage.getItem("favorites"))||[],M())}function $(e){e.key==="Escape"&&(C(),x(),document.removeEventListener("keydown",$))}function q(e){e.target===p&&(C(),x(),p.removeEventListener("click",q))}function V(){p.classList.add(H)}function C(){p.classList.remove(H)}function Y(){ae(),re()}function ae(){_=document.querySelector(".rating-active"),U=document.querySelector(".number-rating")}function re(e=U.innerHTML){const t=e/.05;_.style.width=`${t}%`}function z(){k=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${k}px`}function x(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,k)}function M(){l=JSON.parse(localStorage.getItem("favorites"))||[],F.innerHTML="",l.forEach(e=>{const t=T(e);F.insertAdjacentHTML("beforeend",t)})}export{v as i};
//# sourceMappingURL=modal_window-a46317bc.js.map
