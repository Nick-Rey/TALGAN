<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Главная</title>
    <link rel="stylesheet" href="CSS/mainpagestyle.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Начало шапки сайта -->
    <header>
      <nav class="header_navigation">
           <nav class="nav_page"><a class="a_main" href="http://talgan/">Главная</a></nav>
           <nav class="nav_page"><a class="a_recepts" href="http://talgan/Recepts/recepts.php">Рецепты</a></nav>
           <nav class="nav_page"><a class="a_order" href="http://talgan/Order/order.php">Заказать</a></nav>
           <nav class="nav_page"><a class="a_about" href="http://talgan/Aboutus/aboutus.php">О производстве</a></nav>
           <nav class="nav_page"><a class="a_contact" href="http://talgan/Contacts/Contacts.php">Контакты</a></nav>
      </nav>
      <div class="bl_for_header_describe">
      <div class="header_describe">
         <div class="header_describe_email">paulbor@mail.ru</div>
         <div class="header_describe_number">+7(913)449-53-31</div>
         <div class="header_describe_name">Боргояков Павел Геннадьевич</div>
      </div>
      </div>
    </header>

    <div class="background"></div>
    <!-- Начало первого landing блока -->
    <div class="landing_page">
      <div class="landing_page_leftblock">
        <div class="landing_page_leftblock_name">ТАЛFAH</div>
        <div class="landing_page_leftblock_describe">- полезный продукт питания, позволяющий за короткое время эффективно восстановить свои силы,а также укрепить здоровье и энергетический тонус организма на долгие годы.</div>
        <div class="landing_page_leftblock_buttons">
          <a class="landing_page_leftblock_buttons_order" href="@">Оформить заказ</a>
          <div class="landing_page_leftblock_buttons_knowmore">Узнать подробнее </div>
        </div>
      </div>
       <div class="landing_page_rightblock">
         <div class="landing_page_rightblock_image"><img src="CSS/image/landing_page/image_landingpage.png"></div>
       </div>
    </div>
    <!-- Начало блока о производстве -->
    <div class="production_block">
         <div class="production_block_leftblock">
           <div class="production_block_leftblock_title">О производстве</div>
           <div class="production_block_leftblock_text">В производстве нашей продукции,мы используем традиционный способприготовления:  Для начала зерна обжариваем на огне. Далее мы перемалываем их на каменных жерновах. В целях поддержания высокого качества обжарки, была сконструирована печь под управлением микроконтроллера, что гарантирует высокое и однородное качество товара и исключает человеческий фактор с процесса обжарки. </div>
           <div class="production_block_leftblock_button">Подробнее</div>
         </div>
         <div class="production_block_rightblock">
           <video class="production_block_rightblock_video" src="CSS/video/talganvideo.mp4" controls></video>
         </div>
    </div>
    <div class="partners_block">
     <div class="partners_block_leftblock">
       <div class="partners_block_lefrblock_title">Где вы сможете приобрести нашу продукцию</div>
       <div class="partners_block_lefrblock_icon">
          <img src="CSS/image/partners/vsk.png" alt="">
          <img src="CSS/image/partners/askiz.png" alt="">
          <img src="CSS/image/partners/orion.png" alt="">
          <img src="CSS/image/partners/malinniki.png" alt="">
          <img src="CSS/image/partners/khakassia.png" alt="">
       </div>
     </div>
     <div class="partners_block_rightblock partners_block_rightblock1"><script class="map" type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4d7bdfbd6eb2ddc19a6e60ff304f4d4e97c48cf8e7606e12563dbe4a362950c4&amp;width=100%25&amp;height=60%&amp;lang=ru_RU&amp;scroll=true"></script></div>
     <div class="partners_block_rightblock partners_block_rightblock2"><script class="map" type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4d7bdfbd6eb2ddc19a6e60ff304f4d4e97c48cf8e7606e12563dbe4a362950c4&amp;width=100%25&amp;height=90%&amp;lang=ru_RU&amp;scroll=true"></script></div>
    </div>
    <footer>
      <div class="footer_describe">Глава КФХ Боргояков Павел Геннадьевич <br> ИНН 190116626196 • ОГРНИП 315190200000650</div>
       <div class="footer_social">
         <div class="footer_social_block_for_icon">
         <img src="CSS/image/social/whatsapp.png" alt="" class="footer_social_icon">
         <img src="CSS/image/social/vk.png" alt="" class="footer_social_icon">
         <img src="CSS/image/social/inst.png" alt="" class="footer_social_icon">
         </div>
         <div class="talgan19">talgan19</div>
       </div>
      <div class="footer_geo">655700, Республика Хакасия<br> с. Аскиз, ул. Калинина, 38</div>
    </footer>
    <script type="text/javascript" src="JS/mobile.js"></script>
</body>
</html>