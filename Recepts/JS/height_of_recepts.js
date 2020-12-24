let recepts= document.getElementsByClassName('recepts');
let window_wi = window.innerWidth;
for(let i =0; i<=recepts.length; i++){
let recepts_height = recepts[i].clientHeight;
let recepts_right_block_skew = recepts[i].lastElementChild;
recepts_right_block_skew.style.height = recepts_height + 'px';
if(window_wi<=900){
    recepts_right_block_skew.style.height="auto";
}
}


