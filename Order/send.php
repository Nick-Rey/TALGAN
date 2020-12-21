<?php
  session_start();
 if(isset($_POST["send"])){
    if($_POST["user_selectsize"]=="0.9кг"){
      $cost= 150*$_POST["user_selectnumber"];
    }
    if($_POST["user_selectsize"]=="0.45кг"){
      $cost= 85*$_POST["user_selectnumber"];
    }

    $from = htmlspecialchars("\n"."Номер телефона: " . $_POST["user_number"]."\n"."Как обращаться к заказчику:".$_POST["user_name"]);
    $to ="paulbor@mail.ru";
    $subject =htmlspecialchars("Онлайн заказ с сайта ");
    $message =htmlspecialchars("Новый заказ с сайта"."\n"."Наименование товара:".$_POST["name_product"]."\n"."Объём: ". $_POST["user_selectsize"]."\n"."Количество:".$_POST["user_selectnumber"]."\n"."Цена: ". $cost."р");
    $_SESSION["from"] = $from;
    $_SESSION["to"] = $to;
    $_SESSION["subject"] = $subject;
    $_SESSION["message"] = $message;
    
    $subject = "=?utf-8?b?".base64_encode($subject)."?=";
    $headers = "From:$from \r\n Reply-to:$from\r\n Content-type:text/plain; charset= utf-8\r\n";
    mail($to, $subject, $message, $headers);
    header("Location:order.php");
 }
?>