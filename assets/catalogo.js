/* Netsu Store — búsqueda y filtros locales: no requiere API, funciona con las fichas HTML. */
(function(){
'use strict';
const grid=document.getElementById('catalogo-productos');
const input=document.getElementById('catalogo-busqueda');
const sort=document.getElementById('catalogo-orden');
const count=document.getElementById('catalogo-conteo');
const empty=document.getElementById('catalogo-vacio');
const reset=document.getElementById('catalogo-limpiar');
const chips=Array.from(document.querySelectorAll('[data-filtro-categoria]'));
const details=document.getElementById('detalle-productos');
if(!grid||!input||!sort||!count||!empty||!details)return;
const items=Array.from(grid.querySelectorAll('[data-producto-id]'));
const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const categories=['todos','personalizados','auto','hogar','fitness'];
const sorts=['destacados','precio-asc','precio-desc','nombre'];
const params=new URLSearchParams(location.search);
let category=categories.includes(params.get('categoria'))?params.get('categoria'):'todos';
let order=sorts.includes(params.get('orden'))?params.get('orden'):'destacados';
input.value=(params.get('buscar')||'').slice(0,120);
sort.value=order;
function update(){
 const query=normalize(input.value);
 let visible=0;
 for(const card of items){
  const inCategory=category==='todos'||card.dataset.categoria===category;
  const inSearch=!query||normalize(card.dataset.buscar+' '+card.textContent).includes(query);
  card.hidden=!(inCategory&&inSearch);
  if(!card.hidden)visible++;
 }
 const compare=(a,b)=>{if(order==='precio-asc')return Number(a.dataset.precio)-Number(b.dataset.precio);if(order==='precio-desc')return Number(b.dataset.precio)-Number(a.dataset.precio);if(order==='nombre')return normalize(a.dataset.nombre).localeCompare(normalize(b.dataset.nombre),'es');return Number(a.dataset.orden)-Number(b.dataset.orden)};
 items.slice().sort(compare).forEach(card=>grid.appendChild(card));
 chips.forEach(chip=>{const selected=chip.dataset.filtroCategoria===category;chip.setAttribute('aria-pressed',selected?'true':'false')});
 count.textContent=visible===1?'1 producto encontrado':visible+' productos encontrados';
 empty.hidden=visible!==0;
 reset.hidden=!query&&category==='todos'&&order==='destacados';
 const url=new URL(location.href);
 if(query)url.searchParams.set('buscar',input.value.trim());else url.searchParams.delete('buscar');
 if(category!=='todos')url.searchParams.set('categoria',category);else url.searchParams.delete('categoria');
 if(order!=='destacados')url.searchParams.set('orden',order);else url.searchParams.delete('orden');
 if(history.replaceState)history.replaceState(null,'',url.pathname+url.search+url.hash);
}
chips.forEach(chip=>chip.addEventListener('click',()=>{category=chip.dataset.filtroCategoria;update()}));
input.addEventListener('input',update);
sort.addEventListener('change',()=>{order=sort.value;update()});
reset.addEventListener('click',()=>{category='todos';order='destacados';input.value='';sort.value=order;update();input.focus()});
function revealHash(){
 const id=decodeURIComponent(location.hash.slice(1));
 if(!id||!details.contains(document.getElementById(id)))return;
 details.open=true;
 requestAnimationFrame(()=>{const node=document.getElementById(id);if(node)node.scrollIntoView({block:'start'})});
}
document.querySelectorAll('a[href="#portalatas"],a[href="#carrito"],a[href="#inflador-netsu-t01"],a[href="#arrancador-netsu-t02"],a[href="#tabla-flexiones-feature"],a[href="#shoedryer-feature"]').forEach(link=>link.addEventListener('click',()=>{details.open=true}));
window.addEventListener('hashchange',revealHash);
update();
revealHash();
})();
