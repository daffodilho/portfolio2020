<?php

var_dump($_POST);

// If you are using Composer
require 'vendor/autoload.php';

// $from = new SendGrid\Email(null, "luckydaffodil@gmail.com");
// $subject = "Hello World from the SendGrid PHP Library!";
// $to = new SendGrid\Email(null, "daffodilho@gmail.com");
// $content = new SendGrid\Content("text/plain", "Hello, Email!");
// $mail = new SendGrid\Mail($from, $subject, $to, $content);

// $apiKey = getenv('SENDGRID_API_KEY');
// $sg = new \SendGrid($apiKey);

// $response = $sg->client->mail()->send()->post($mail);
// echo $response->statusCode();
// echo $response->headers();
// echo $response->body();

// if($response){
//     echo 'Yay, message sent.';
// }else {
//     echo 'Something went wrong.';
// }

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("test@example.com", "Example User");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo("test@example.com", "Example User");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}

// // Validate all data
// $name = '';
// $email = '';
// $subject = 'mail from portfolio';
// $message = '';
// $recipient = 'daffodilho@gmail.com';

// if(isset($_POST['name'])){
//     $name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
// }

// if(isset($_POST['email'])){
//     $email = str_replace(array("\r", "\n", "%0a", "%0d"), '',$_POST['email']);
//     $email = filter_var($email,FILTER_VALIDATE_EMAIL);
// }

// if(isset($_POST['message'])){
//     $message = $_POST['message'];
// }

// // Send out email
// $headers = array(
//     'FROM'=>'noreply@test.ca',
//     'Reply-To'=> ".$name.'<'.$email.'>'."
// );

// if(mail($recipient, $subject, $message, $headers)){
//     echo '<p>Thank you for contacting us, '.$name.'</p>';
// }else{
//     echo '<p>We are sorry but the email did not go through</p>';
// }
?>