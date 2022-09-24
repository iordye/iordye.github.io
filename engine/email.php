<?php
    /*
        RESPONSE CODE:
                      102 - processing
                      200 - Ok
                      201 - created
                      202 - accepted
                      204 - no content
                      208 - already reported
                      400 - bad request
                      403 - forbidden
                      404 - not found
                      405 - method not allowed
                      406 - not acceptable
                      408 - request - timeout
                      429 - too many requests
                      500 - internal server error
                      503 - service unavailable
        ******************************************
    */
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["submit"]) && $_POST["submit"] === "SUBMIT_REQUEST"){
            $first_name = htmlspecialchars(trim(stripslashes($_POST["first_name"])));
            $other_name = htmlspecialchars(trim(stripslashes($_POST["other_name"])));
            $address = htmlspecialchars(trim(stripslashes($_POST["address"])));
            $phone_number = htmlspecialchars(trim(stripslashes($_POST["phone_number"])));
            $email = htmlspecialchars(trim(stripslashes($_POST["email"])));
            $state = htmlspecialchars(trim(stripslashes($_POST["state"])));
            $outdoor = htmlspecialchars(trim(stripslashes($_POST["outdoor"])));
            $home = htmlspecialchars(trim(stripslashes($_POST["home"])));
            $model = htmlspecialchars(trim(stripslashes($_POST["model"])));
            $event = htmlspecialchars(trim(stripslashes($_POST["event"])));
            $other = htmlspecialchars(trim(stripslashes($_POST["other"])));
            $session_date = htmlspecialchars(trim(stripslashes($_POST["session_date"])));
            $start_time = htmlspecialchars(trim(stripslashes($_POST["start_time"])));
            $end_time = htmlspecialchars(trim(stripslashes($_POST["end_time"])));
            $number_of_photos = htmlspecialchars(trim(stripslashes($_POST["number_of_photo"])));
            $submit = true;

            if(empty($first_name)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($other_name)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($address)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($phone_number)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($email)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($state)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($session_date)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($start_time)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($end_time)){
                $submit = false;
                http_response_code(204);
            }
            if(empty($number_of_photos)){
                $submit = false;
                http_response_code(204);
            }
            if($submit === true){
                $to = "dlightphotographi@gmail.com";
                $from = $email;
                $header = $first_name . " Booked a session";
                $full_name = $first_name . " " .$other_name;
                $user_contact = $first_name."'s phone number: ".$phone_number;
                $user_contact.=" \n".$first_name."'s email address: ".$email;
                $client_address = "Client address is: ".$address.", ".$state;
                #if(!empty($outdoor)){ $outdoor.=", "; };
                if(!empty($home)){ $outdoor.=", ";};
                if(!empty($model)){  $home.=", ";};
                if(!empty($event)){  $model.=", ";};
                if(!empty($other)){  $event.=", ";};
                $types_of_session = "Session type(s): ".$outdoor.$home.$model.$event.$other;
                $start_and_end_time_plus_date = "Starting time is: ".$start_time." and ending time is: ".$end_time." \nDate: ".$session_date;
                $photo_number = "You will be taking up to ".$number_of_photos." photo(s).";
                $all_data_to_send = "From: ".$from;
                $all_data_to_send.="\nTo: ".$to;
                $all_data_to_send.="\n".$header;
                $all_data_to_send.="\nClient name: ".$full_name;
                $all_data_to_send.="\n".$user_contact;
                $all_data_to_send.="\n".$client_address;
                $all_data_to_send.="\n".$types_of_session;
                $all_data_to_send.="\n".$start_and_end_time_plus_date;
                $all_data_to_send.="\n".$photo_number;
                
                /*
                $types_of_session = "Session type(s): ".$outdoor.$home.$model.$event.$other;
                $start_and_end_time_plus_date = "Starting time is: ".$start_time." and ending time is: ".$end_time." \nDate: ".$session_date;
                $photo_number = "You will be taking up to ".$number_of_photos." photo(s).";
                $full_body = "From: ".$from;
                $full_body.="\nTo: ".$to;
                $full_body.="\n".$header;
                $full_body.="\nClient name: ".$full_name;
                $full_body.="\n".$user_contact;
                $full_body.="\n".$client_address;
                $full_body.="\n".$types_of_session;
                $full_body.="\n".$start_and_end_time_plus_date;
                $full_body.="\n".$photo_number;
                */

                $headers = "MIME-Version:1.0"."\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                $headers .= "From: <dlightphotographi@gmail.com>";
                $server = $_SERVER["HTTP_HOST"];
                ini_set("SMTP", "ssl://$server");
                ini_set("smtp_port", 25);
                ini_set("sendmail_from", "dlightphotographi@gmail.com");
                ini_set("smtp_server", $server);
                $all_data_to_send = wordwrap($all_data_to_send,70);

                if(mail($to, $header, $all_data_to_send, $headers)){
                    echo("Your request was sent\n \n".$all_data_to_send);
                }else{
                    echo("\nWe are sorry an Error ocured while sending your request\n");
                    echo(ini_get("smtp_server"));
                }
                
            }
        }

        if(isset($_POST["submit"]) && $_POST["submit"] === "SUBMIT_REQUEST_MANUAL"){
            $first_name = htmlspecialchars(trim(stripslashes($_POST["first_name"])));
            $other_name = htmlspecialchars(trim(stripslashes($_POST["other_name"])));
            $address = htmlspecialchars(trim(stripslashes($_POST["address"])));
            $phone_number = htmlspecialchars(trim(stripslashes($_POST["phone_number"])));
            $email = htmlspecialchars(trim(stripslashes($_POST["email"])));
            $state = htmlspecialchars(trim(stripslashes($_POST["state"])));
            $outdoor = htmlspecialchars(trim(stripslashes($_POST["outdoor"])));
            $home = htmlspecialchars(trim(stripslashes($_POST["home"])));
            $model = htmlspecialchars(trim(stripslashes($_POST["model"])));
            $event = htmlspecialchars(trim(stripslashes($_POST["event"])));
            $other = htmlspecialchars(trim(stripslashes($_POST["other"])));
            $session_date = htmlspecialchars(trim(stripslashes($_POST["session_date"])));
            $start_time = htmlspecialchars(trim(stripslashes($_POST["start_time"])));
            $end_time = htmlspecialchars(trim(stripslashes($_POST["end_time"])));
            $number_of_photos = htmlspecialchars(trim(stripslashes($_POST["number_of_photo"])));
            $submit = true;

            if($submit === true){
                $to = "dlightphotographi@gmail.com";
                $from = $email;
                $header = $first_name . " Booked a session";
                $full_name = $first_name . " " .$other_name;
                $user_contact = $first_name."'s phone number: ".$phone_number;
                $user_contact.=" \n".$first_name."'s email address: ".$email;
                $client_address = "Client address is: ".$address.", ".$state;
                #if(!empty($outdoor)){ $outdoor.=", "; };
                if(!empty($home)){ $outdoor.=", ";};
                if(!empty($model)){  $home.=", ";};
                if(!empty($event)){  $model.=", ";};
                if(!empty($other)){  $event.=", ";};
                $types_of_session = "Session type(s): ".$outdoor.$home.$model.$event.$other;
                $start_and_end_time_plus_date = "Starting time is: ".$start_time." and ending time is: ".$end_time." \nDate: ".$session_date;
                $photo_number = "You will be taking up to ".$number_of_photos." photo(s).";
                $all_data_to_send = "From: ".$from;
                $all_data_to_send.="\nTo: ".$to;
                $all_data_to_send.="\n".$header;
                $all_data_to_send.="\nClient name: ".$full_name;
                $all_data_to_send.="\n".$user_contact;
                $all_data_to_send.="\n".$client_address;
                $all_data_to_send.="\n".$types_of_session;
                $all_data_to_send.="\n".$start_and_end_time_plus_date;
                $all_data_to_send.="\n".$photo_number;
                $all_data_to_send = wordwrap($all_data_to_send,70);
                echo($all_data_to_send);    
            }
        }

    }else{
        http_response_code(400);
        echo("Error");
        exit;
    }
?>