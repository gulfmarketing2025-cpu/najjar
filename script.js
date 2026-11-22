const n=document.querySelector('nav'),b=document.getElementById('mb');
b.onclick=()=>{n.classList.toggle('on');b.setAttribute('aria-expanded',n.classList.contains('on'))};
n.querySelectorAll('a').forEach(a=>a.onclick=()=>n.classList.remove('on'));
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.gal img').forEach(i=>i.onclick=()=>{li.src=i.src;li.alt=i.alt;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'));
