let recepts= document.getElementById('recepts');
let recepts_height = recepts.clientHeight;
let recepts_right_block_skew = recepts.lastElementChild;
recepts_right_block_skew.style.height = recepts_height + 'px';
