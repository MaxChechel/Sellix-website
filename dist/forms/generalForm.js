(()=>{var l=document.getElementById("wf-form-General-Contact-Form"),m="https://api-internal.sellix.io/v1/sales/general_contact_form";function u(){return{full_name:document.getElementById("contact_full_name").value,work_email:document.getElementById("contact_work_email").value,website:document.getElementById("contact_website").value,volume:document.getElementById("contact_volume").value,business_type:document.getElementById("contact_business_type").value,message:document.getElementById("contact_message").value}}function d(t,n,o){t.addEventListener("submit",function(a){a.preventDefault();let c=t.parentElement.querySelector(".success-message"),s=n();fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(e=>e.json()).then(e=>{t.style.display="none",c.style.display="block"}).catch(e=>{console.error("Error:",e)})})}d(l,u,m);})();
