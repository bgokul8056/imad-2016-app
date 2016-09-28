console.log('Loaded!');


var x=document.getElementById('content');
x.innerHTML="Changed the COntent";


var img=document.getElementById('madi');
var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var variable= setInterval(moveRight,50);
};
