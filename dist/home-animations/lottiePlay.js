(()=>{function i(o,r){let t=new DotLottie({autoplay:!1,loop:!1,canvas:o,src:r});t.load().then(()=>{gsap.registerPlugin(ScrollTrigger),ScrollTrigger.create({trigger:".home-intro_lottie-wrap",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{let l=e.progress.toFixed(3),s=t.totalFrames,a=Math.floor(l*s);t.goToAndStop(a,!0)}})}).catch(e=>{console.error("Error loading dotLottie animation:",e)})}var n=new IntersectionObserver((o,r)=>{o.forEach(t=>{if(t.isIntersecting){let e=t.target.querySelector(".dotlottie-canvas"),l=t.target.getAttribute("data-lottie-url");i(e,l),r.unobserve(t.target)}})});document.querySelectorAll(".home-intro_lottie").forEach(o=>{n.observe(o)});})();
