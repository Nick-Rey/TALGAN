
let select_product_button = document.getElementsByClassName("select_product_button");
for(let i = 0; i<=select_product_button.length; i++){
select_product_button[i].onclick = function rt () {
    
    let select_product = select_product_button[i].parentElement;

    let select_product_weight = select_product.querySelector("#select_product_weight");
    let select_product_cost = select_product.querySelector("#select_product_cost");
    
    //Создание блока затемнения фона
    let select_product_info_container_background = document.createElement('div');
    select_product_info_container_background.classList.add("select_product_info_container_background");

    //Создание блока с подробным описанием товара
    let select_product_info_container = document.createElement('div');
    select_product_info_container.classList.add("select_product_info_container");
    select_product_info_container_background.appendChild(select_product_info_container);
    
    //Блок с подробным описанием товара был разделен на две "Строки", в первой название товара и закрытие блока 
    //Во второй форма отправки, таблица цен и размеров, Стоимость и изображения товара.

    //Первая "строка" данных
    let select_product_info_container_firstrow = document.createElement('div');
    select_product_info_container_firstrow.classList.add("select_product_info_container_firstrow");
    select_product_info_container.appendChild(select_product_info_container_firstrow);
    
    //Вторая "строка" данных
    let select_product_info_container_secondrow = document.createElement('div');
    select_product_info_container_secondrow.classList.add("select_product_info_container_secondrow");
    select_product_info_container.appendChild(select_product_info_container_secondrow);
    
    //Поиск названия выбранного товара 
    let select_product_title = select_product.querySelector(".select_product_title");
    //Создание блока названия выбранного товара 
    let select_product_info_container_firstrow_title = document.createElement('div');
    select_product_info_container_firstrow_title.classList.add("select_product_info_container_firstrow_title");
    select_product_info_container_firstrow_title.innerHTML = select_product_title.textContent;
    select_product_info_container_firstrow.appendChild(select_product_info_container_firstrow_title);
    //Создание блока закрытия подробного описания товара(крестик)
    let select_product_info_container_firstrow_close = document.createElement('div');
    select_product_info_container_firstrow_close.classList.add("select_product_info_container_firstrow_close");
    select_product_info_container_firstrow_close.innerHTML = "&#215;";
    select_product_info_container_firstrow.appendChild(select_product_info_container_firstrow_close);
    
    //Создание формы отправки 
    let select_product_info_container_secondrow_form = document.createElement('form');
    select_product_info_container_secondrow_form.classList.add("select_product_info_container_secondrow_form");
    select_product_info_container_secondrow_form.method = "POST";
    select_product_info_container_secondrow_form.action = "send.php"
    select_product_info_container_secondrow.appendChild(select_product_info_container_secondrow_form);
    
    //Создание блока номера телефона покупателя 
    let select_product_info_container_secondrow_form_input_number = document.createElement('input');
    select_product_info_container_secondrow_form_input_number.classList.add("select_product_info_container_secondrow_form_input");
    select_product_info_container_secondrow_form_input_number.type = "text";
    select_product_info_container_secondrow_form_input_number.name = "user_number";
    select_product_info_container_secondrow_form_input_number.placeholder = "Номер телефона";
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_form_input_number);
     
    //Создание блока ошибки при неправильном вводе формы номера телефона или пустого поля
    let select_product_info_container_secondrow_form_errornum = document.createElement('div');
    select_product_info_container_secondrow_form_errornum.classList.add("select_product_info_container_secondrow_form_errornum");
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_form_errornum);
   
    //Создание контейнера для выбора объема и количества покупаемого товара 
    let select_product_info_container_secondrow_contselect = document.createElement('div');
    select_product_info_container_secondrow_contselect.classList.add("select_product_info_container_secondrow_contselect");
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_contselect);

    //Создание блока выбора объема товара
    let select_product_info_container_secondrow_form_selectsize = document.createElement('select');
    select_product_info_container_secondrow_form_selectsize.classList.add("select_product_info_container_secondrow_form_selectsize");
    select_product_info_container_secondrow_form_selectsize.name = "user_selectsize";
    select_product_info_container_secondrow_contselect.appendChild(select_product_info_container_secondrow_form_selectsize);
    
    let sizearray = ["0.9кг", "0.45кг"];
    for (var v = 0; v < sizearray.length; v++) {
        let select_product_info_container_secondrow_form_selectsize_option = document.createElement("option");
        select_product_info_container_secondrow_form_selectsize_option.value = sizearray[v];
        select_product_info_container_secondrow_form_selectsize_option.text = sizearray[v];
        select_product_info_container_secondrow_form_selectsize.appendChild(select_product_info_container_secondrow_form_selectsize_option);
    }
    
    //Создание блока выбора количества товара
    let select_product_info_container_secondrow_form_number = document.createElement('select');
    select_product_info_container_secondrow_form_number.classList.add("select_product_info_container_secondrow_form_number");
    select_product_info_container_secondrow_form_number.name = "user_selectnumber";
    select_product_info_container_secondrow_contselect.appendChild(select_product_info_container_secondrow_form_number);
    
    let y=1;
    for (let t = 0; t < y; t++) {
        let select_product_info_container_secondrow_contselect_option = document.createElement("option");
        select_product_info_container_secondrow_contselect_option.value = y;
        select_product_info_container_secondrow_contselect_option.text = y;
        select_product_info_container_secondrow_form_number.appendChild(select_product_info_container_secondrow_contselect_option);
        y++;
        if(y>50){
            break
        }
    }
    
    //Создание блока имени покупателя
    let select_product_info_container_secondrow_form_input_name = document.createElement('input');
    select_product_info_container_secondrow_form_input_name.classList.add("select_product_info_container_secondrow_form_input");
    select_product_info_container_secondrow_form_input_name.type = "text";
    select_product_info_container_secondrow_form_input_name.name = "user_name";
    select_product_info_container_secondrow_form_input_name.placeholder = "Как к вам обращаться";
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_form_input_name);

    //Создание блока ошибки при невведении номера телефона
    let select_product_info_container_secondrow_form_errorname = document.createElement('div');
    select_product_info_container_secondrow_form_errorname.classList.add("select_product_info_container_secondrow_form_errorname");
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_form_errorname);
    
    //скрытый блок для отправки названия товара 
    let select_product_info_container_secondrow_form_input_nameproduct = document.createElement('input');
    select_product_info_container_secondrow_form_input_nameproduct.classList.add("select_product_info_container_secondrow_form_input_nameproduct");
    select_product_info_container_secondrow_form_input_nameproduct.type = "text";
    select_product_info_container_secondrow_form_input_nameproduct.name = "name_product";
    select_product_info_container_secondrow_form_input_nameproduct.value = select_product_title.textContent;
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_form_input_nameproduct);
    //Создание кнопки отправки
    let select_product_info_container_secondrow_form_submit = document.createElement('input');
    select_product_info_container_secondrow_form_submit.classList.add("select_product_info_container_secondrow_form_submit");
    select_product_info_container_secondrow_form_submit.type = "submit";
    select_product_info_container_secondrow_form_submit.name = "send";
    select_product_info_container_secondrow_form_submit.value = "Отправить";
    select_product_info_container_secondrow_form.appendChild(select_product_info_container_secondrow_form_submit);
    
    //Создание блока для таблицы и стоимости 
    let select_product_info_container_secondrow_cont = document.createElement('div');
    select_product_info_container_secondrow_cont.classList.add("select_product_info_container_secondrow_cont");
    select_product_info_container_secondrow.appendChild(select_product_info_container_secondrow_cont);

    //Создание таблицы 
    let select_product_info_container_secondrow_cont_table = document.createElement('table');
    select_product_info_container_secondrow_cont_table.classList.add("select_product_info_container_secondrow_cont_table");
    select_product_info_container_secondrow_cont.appendChild(select_product_info_container_secondrow_cont_table);
    let n=0;
    let td_array = ["Объемы","Цена","0.9кг","150р","0.45кг","85р"]
    for(let x=0; x<=2;x++){
        let select_product_info_container_secondrow_cont_table_tr = document.createElement("tr");

        select_product_info_container_secondrow_cont_table.appendChild(select_product_info_container_secondrow_cont_table_tr);
        let select_product_info_container_secondrow_cont_table_td1 = document.createElement("td");
        select_product_info_container_secondrow_cont_table_td1.classList.add("select_product_info_container_secondrow_cont_table_td");
        select_product_info_container_secondrow_cont_table_td1.innerHTML = td_array[n];
        n++;
        let select_product_info_container_secondrow_cont_table_td2 = document.createElement("td");
        select_product_info_container_secondrow_cont_table_td2.classList.add("select_product_info_container_secondrow_cont_table_td");
        select_product_info_container_secondrow_cont_table_td2.innerHTML = td_array[n];
        n++;
        select_product_info_container_secondrow_cont_table_tr.appendChild(select_product_info_container_secondrow_cont_table_td1);
        select_product_info_container_secondrow_cont_table_tr.appendChild(select_product_info_container_secondrow_cont_table_td2);
        if(x==1){
            select_product_info_container_secondrow_cont_table_td1.style.borderTop  = "2px solid white";
            select_product_info_container_secondrow_cont_table_td1.style.borderBottom  = "2px solid white";
            select_product_info_container_secondrow_cont_table_td2.style.borderTop  = "2px solid white";
            select_product_info_container_secondrow_cont_table_td2.style.borderBottom  = "2px solid white";
        }
    }
    
    //Создание блока стоимости 
    let select_product_info_container_secondrow_cont_cost = document.createElement('div');
    select_product_info_container_secondrow_cont_cost.classList.add("select_product_info_container_secondrow_cont_cost");
    select_product_info_container_secondrow_cont.appendChild(select_product_info_container_secondrow_cont_cost);

    //Создание блока стоимости название  
    let select_product_info_container_secondrow_cont_cost_title = document.createElement('div');
    select_product_info_container_secondrow_cont_cost_title.innerHTML="Стоимость";
    select_product_info_container_secondrow_cont_cost_title.classList.add("select_product_info_container_secondrow_cont_cost_title");
    select_product_info_container_secondrow_cont_cost.appendChild(select_product_info_container_secondrow_cont_cost_title);
    
    
    //Создание блока стоимости 
    let select_product_info_container_secondrow_cont_cost_number = document.createElement('div');
    select_product_info_container_secondrow_cont_cost_number.classList.add("select_product_info_container_secondrow_cont_cost_titlecost");
    select_product_info_container_secondrow_cont_cost.appendChild(select_product_info_container_secondrow_cont_cost_number);
    select_product_info_container_secondrow_cont_cost_number.innerHTML = "150р"
    
    //Функция расчета цены при изменении размера
    select_product_info_container_secondrow_form_selectsize.onchange = function po(){
        select_product_info_container_secondrow_form_selectsize_value=select_product_info_container_secondrow_form_selectsize.value;
        select_product_info_container_secondrow_form_number_value = select_product_info_container_secondrow_form_number.value;
        if(select_product_info_container_secondrow_form_selectsize_value=="0.9кг"){
        select_product_info_container_secondrow_cont_cost_number.innerHTML = 150*select_product_info_container_secondrow_form_number_value + "p";
         }
        if(select_product_info_container_secondrow_form_selectsize_value=="0.45кг"){
            select_product_info_container_secondrow_cont_cost_number.innerHTML = 85 * select_product_info_container_secondrow_form_number_value + "p";
        }
    }

    //Функция расчета цены при изменении количества
    select_product_info_container_secondrow_form_number.onchange = function po2(){
        select_product_info_container_secondrow_form_selectsize_value=select_product_info_container_secondrow_form_selectsize.value;
        select_product_info_container_secondrow_form_number_value = select_product_info_container_secondrow_form_number.value;
        if(select_product_info_container_secondrow_form_selectsize_value=="0.9кг"){
            select_product_info_container_secondrow_cont_cost_number.innerHTML = 150*select_product_info_container_secondrow_form_number_value + "p";
        }
        if(select_product_info_container_secondrow_form_selectsize_value=="0.45кг"){
            select_product_info_container_secondrow_cont_cost_number.innerHTML = 85 * select_product_info_container_secondrow_form_number_value + "p";
        }    
    }
     
    //Блок изображения товара 
    let select_product_info_container_secondrow_cont1 = document.createElement('div');
    select_product_info_container_secondrow_cont1.classList.add("select_product_info_container_secondrow_cont1");
    select_product_info_container_secondrow.appendChild(select_product_info_container_secondrow_cont1);
   
    //Изображение 
    select_product_image = select_product.querySelector("#select_product_image");
    select_product_image_src=select_product_image.src;

    let select_product_info_container_secondrow_cont1_img1 = document.createElement('img');
    select_product_info_container_secondrow_cont1_img1.src=select_product_image_src;
    select_product_info_container_secondrow_cont1_img1.classList.add("select_product_image","image1");
    select_product_info_container_secondrow_cont1.appendChild(select_product_info_container_secondrow_cont1_img1);
    

    let select_product_info_container_secondrow_cont1_img2 = document.createElement('img');
    select_product_info_container_secondrow_cont1_img2.src=select_product_image_src;
    select_product_info_container_secondrow_cont1_img2.classList.add("select_product_image", "image2");
    select_product_info_container_secondrow_cont1.appendChild(select_product_info_container_secondrow_cont1_img2);

    select_product.appendChild(select_product_info_container_background);
    select_product_info_container_background.style.display = "flex";
    //ВАЛИДАЦИЯ ФОРМЫ ВАЛИДАЦИЯ ФОРМЫ ВАЛИДАЦИЯ ФОРМЫ ВАЛИДАЦИЯ ФОРМЫ ВАЛИДАЦИЯ ФОРМЫ ВАЛИДАЦИЯ ФОРМЫ 


    select_product_info_container_secondrow_form.onsubmit = function (event) {
        select_product_info_container_secondrow_form_errorname.style.display="none";
        select_product_info_container_secondrow_form_errornum.style.display="none";
        select_product_info_container_secondrow_form_errornum.value = "";
        select_product_info_container_secondrow_form_errorname.value = "";
        if(select_product_info_container_secondrow_form_input_number.value==""){
            select_product_info_container_secondrow_form_errornum.style.display="block";
            select_product_info_container_secondrow_form_errornum.innerHTML="Введите номер телефона";
            event.preventDefault();
        }

        if(!select_product_info_container_secondrow_form_input_number.value.startsWith("+7")){
            select_product_info_container_secondrow_form_errornum.style.display="block";
            select_product_info_container_secondrow_form_errornum.innerHTML="Корректно введите номер телефона </br> (в формате  +7...)";
            event.preventDefault();
        }
        if(select_product_info_container_secondrow_form_input_number.value.length>12 || select_product_info_container_secondrow_form_input_number.value.length<12){
            select_product_info_container_secondrow_form_errornum.style.display="block";
            select_product_info_container_secondrow_form_errornum.innerHTML="Корректно введите номер телефона </br> (в формате  +7...)";
            event.preventDefault();
        }

        if(select_product_info_container_secondrow_form_input_name.value==""){
            select_product_info_container_secondrow_form_errorname.style.display="block";
            select_product_info_container_secondrow_form_errorname.innerHTML="Введите, как к вам можно обращаться";
            event.preventDefault();
        }
    };


    //Закрытие блока заказать
    select_product_info_container_firstrow_close.onclick = function close(){
        select_product_info_container_background.remove();
    }
}

}

