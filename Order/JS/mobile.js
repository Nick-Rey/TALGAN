let window_width = window.innerWidth;
let header = document.querySelector("header");
if(window_width<900){
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
    if(window_width>900){
        nav_menu.remove();
    }
}