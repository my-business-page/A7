
const t=document.querySelector('.toggle'),n=document.querySelector('nav');t?.addEventListener('click',()=>n?.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');else if(e.boundingClientRect.top<0)e.target.classList.add('out')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((e,i)=>{e.style.transitionDelay=Math.min(i*70,350)+'ms';io.observe(e)});
document.querySelectorAll('a[href$=".html"]').forEach(a=>a.addEventListener('click',e=>{const u=new URL(a.href);if(u.origin===location.origin&&u.pathname!==location.pathname){e.preventDefault();document.body.style.opacity='.65';setTimeout(()=>location.href=a.href,180)}}));
