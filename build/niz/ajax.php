<?php

$error = false;

$status = true;
$msg = "Произошла ошибка";

$email = @$_POST['email'];


$name = "";


    $to = 'daniil.seo@ya.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $site_name = "info@labbs.ru";
    $site_name_from = "info@labbs.ru";

    $subject = 'Заявка c PRO DIGITAL'; //Загаловок сообщения

    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                '.(($name == null) ? "<p>E-mail: ".$email."</p>" : "<p>E-mail: ".@$_POST['email']."</p>").'
                <p>Имя: '.@$_POST['name'].'</p>
                <p>Телефон: '.@$_POST['phone'].'</p>
            </body>
        </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: ".$site_name_from." <" .$site_name. "> <".$to.">\r\n"; //Наименование и почта отправителя
    if(mail($to, $site_name, $message, $headers)){
        $status = true;
        $msg = "Ваше письмо успешно отправлено";
    }else{
        $msg = "Отправка не удалась";
    }

echo json_encode(array('status' => true, 'msg' => $msg,'t'=>$to));
exit;
?>
