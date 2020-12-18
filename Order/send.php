<?php
  session_start();
 if(isset($_POST["send"])){
    $from = htmlspecialchars("\n"."Номер телефона: " . $_POST["user_number"]."\n"."Как обращаться к заказчику:".$_POST["user_name"]);
    $to ="paulbor@mail.ru";
    $subject =htmlspecialchars("Онлайн заказ с сайта ");
    $message =htmlspecialchars("Новый заказ с сайта"."\n"."Объём: ". $_POST["user_selectsize"]."\n"."Количество:".$_POST["user_selectnumber"]);
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