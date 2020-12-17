let helpful_container_picture = document.getElementsByClassName('helpful_container_picture');

for(let i=0; i<=helpful_container_picture.length; i++){
 let helpful_container_picture_height = helpful_container_picture[i].offsetHeight;
 helpful_container_picture[i].style.width= helpful_container_picture_height + 'px';
}