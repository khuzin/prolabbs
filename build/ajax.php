<?php

$error = false;

$status = true;
$msg = "Произошла ошибка";

$email = @$_POST['email'];


$name = "";


    $to = 'ravil.irken@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $site_name = "PRODIGITAL@khuzin.ru";
    $site_name_from = "PRODIGITAL@khuzin.ru";

    $subject = 'Заявка c PRO DIGITAL'; 

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
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: ".$site_name_from." <" .$site_name. "> <".$to.">\r\n"; 
    if(mail($to, $site_name, $message, $headers)){
        $status = true;
        $msg = "Ваше письмо успешно отправлено";
    }else{
        $msg = "Отправка не удалась";
    }

echo json_encode(array('status' => true, 'msg' => $msg,'t'=>$to));


$servername = "localhost";
$database = "mybase"; 
$username = "user";
$password = "1234";

$sql = "mysql:host=$servername;dbname=$database;";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try { 
  $my_Db_Connection = new PDO($sql, $username, $password, $dsn_Options);
  echo "Connected successfully";
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();

$first_Name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$my_Insert_Statement = $my_Db_Connection->prepare("INSERT INTO Clients (name, phone, email) VALUES (:first_name, :phone, :email)");

$my_Insert_Statement->bindParam(:first_name, $first_Name);
$my_Insert_Statement->bindParam(:phone, $phone);
$my_Insert_Statement->bindParam(:email, $email);

if ($my_Insert_Statement->execute()) {
  echo "SUCCESS";
} else {
  echo "LOSE";
}
$my_Insert_Statement->execute();

exit;
?>
