import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */const a=document.querySelector(".js-feedback-form");let o={email:"",message:""};const s=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},m=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},n=e=>{localStorage.removeItem(e)},c=()=>{try{const e=m("feedback-form-state");if(e===null)return;o=e;for(let t in e)a.elements[t].value=e[t]}catch(e){console.log(e)}};c();const i=e=>{const{target:t}=e,r=t.value,l=t.name;o[l]=r,s("feedback-form-state",o),console.log(o)},f=e=>{e.preventDefault();const{currentTarget:t}=e;if(!o.email.trim()||!o.message.trim()){alert("Fill please all fields");return}console.log("Submitted Data:",o),t.reset(),o={email:"",message:""},n("feedback-form-state")};a.addEventListener("input",i);a.addEventListener("submit",f);
//# sourceMappingURL=2-form.js.map
