const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['blue','pink','green','violet','red','brown'];
body.style.backgroundColor='grey';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];

});