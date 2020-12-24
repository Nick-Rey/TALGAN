
let header = document.querySelector("header");
window.onload = function rep(){
    let window_width = document.documentElement.clientWidth;
    if(window_width<899){
    console.log(window_width);
    create ()
  }
}
 window.onresize = function res(){
    let window_width = document.documentElement.clientWidth;
    if(window_width>899){
       document.body.querySelector(".nav_menu").remove();
       document.body.querySelector(".nav_menu_img_arrow").remove();
      }
    
      if(window_width<899 &&  document.body.querySelector(".nav_menu") ==null ){
        console.log(window_width);
        create ()
          
      }
}



function create (){
    let nav_menu = document.createElement('div');
    nav_menu.classList.add("nav_menu");
    
    let nav_menu_img_line = document.createElement('img');
    nav_menu_img_line.classList.add("nav_menu_img");
    nav_menu_img_line.src="CSS/image/navmenu.png";
    nav_menu.prepend(nav_menu_img_line);

    let nav_menu_img_arrow = document.createElement('img');
    nav_menu_img_arrow.classList.add("nav_menu_img_arrow");
    nav_menu_img_arrow.src="CSS/image/ar.png";
    header.prepend(nav_menu_img_arrow);
     header.style.transition = "0.5s ease";

    document.body.prepend(nav_menu);
    
    nav_menu_img_line.onclick = function open (){
        header.style.left= "0%"; 
        
        nav_menu_img_arrow.onclick = function close (){
            header.style.left= "-100%"; 
        }
    }  
}