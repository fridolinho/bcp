<?php
    if( isset($_POST['email']) && isset($_POST['message']) ){
        $e = $_POST['email']; // HINT: use preg_replace() to filter the data
        $m = $_POST['message'];
        $to = "karamujack@gmail.com";	
        $from = $e;
        $subject = 'Contact Form submission(Isha.co.rw)';
        $message = '<b>Message:</b><p>'.$m.'</p>';
        $headers = "From: $from\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\n";
        if( mail($to, $subject, $message, $headers) ){
            echo "success";
        } else {
            echo "not sent.";
        }
    }
?>