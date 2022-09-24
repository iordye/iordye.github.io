$(document).ready(function(){
    $("#submitRequest").click(function(){
        var firstName = $("#firstName");
        var otherName = $("#otherNames");
        var address = $("#address");
        var phoneNumber = $("#phoneNumber");
        var email = $("#email");
        var state = $("#state");
        var outdoor = $("#outdoor");
        var home = $("#home");
        var model = $("#model");
        var event = $("#event");
        var other = $("#others");
        var startTime = $("#startTime");
        var endTime = $("#endTime");
        var sessionDate = $("#sessionDate");
        var numberOfPhoto = $("#numberOfPhoto");
        var submitRequest = $("#submitRequest");
        var emptyBox = $("#empty_box");
        var alertArea = $("#alert_area");
        var submit = true;

        //INPUT VALIDATION
        if(firstName.val() == "" || firstName.val() == null){
            submit = false;
            firstName.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            firstName.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(otherName.val() == "" || otherName.val() == null){
            submit = false;
            otherName.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            otherName.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(address.val() == "" || address.val() == null){
            submit = false;
            address.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            address.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(phoneNumber.val() == "" || phoneNumber.val() == null){
            submit = false;
            phoneNumber.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            phoneNumber.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(email.val() == "" || email.val() == null){
            submit = false;
            email.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            email.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(state.val() == "" || state.val() == null){
            submit = false;
            state.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            state.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(document.getElementById("outdoor").checked || document.getElementById("home").checked || document.getElementById("model").checked || document.getElementById("event").checked || document.getElementById("others").checked){
            $("#showError").text("");
            if(!document.getElementById("outdoor").checked){ outdoor = emptyBox;}
            if(!document.getElementById("home").checked){ home = emptyBox;}
            if(!document.getElementById("model").checked){ model = emptyBox;}
            if(!document.getElementById("event").checked){ event = emptyBox;}
            if(!document.getElementById("others").checked){ other = emptyBox;}
        }else{
            submit = false;
            $("#showError").text("Please select one or more session(s) below");
        }
        //INPUT VALIDATION
        if(startTime.val() == "" || startTime.val() == null){
            submit = false;
            startTime.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            startTime.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(endTime.val() == "" || endTime.val() == null){
            submit = false;
            endTime.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            endTime.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(sessionDate.val() == "" || sessionDate.val() == null){
            submit = false;
            sessionDate.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            sessionDate.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }
        //INPUT VALIDATION
        if(numberOfPhoto.val() == "" || numberOfPhoto.val() == null){
            submit = false;
            numberOfPhoto.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            numberOfPhoto.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }

        //CHECK IF EMAIL IS A VALID EMAIL ADDRESS
        if(!document.getElementById("email").value.includes("@")){
            submit = false;
            email.css({
                borderColor : "red",
                boxShadow : "0px 0px 8px rgba(255, 0, 0, 0.5)"
            });
        }else{
            email.css({
                borderColor : "gray",
                boxShadow : "0px 0px 0px lightblue"
            });
        }


        if(submit === true){
            submitRequest.html("<span class='loader'><span class='loading'></span></span>");
            $.post(
                "engine/email.php",
                {
                    first_name : firstName.val(),
                    other_name : otherName.val(),
                    address : address.val(),
                    phone_number : phoneNumber.val(),
                    email : email.val(),
                    state : state.val(),
                    outdoor : outdoor.val(),
                    home : home.val(),
                    model : model.val(),
                    event : event.val(),
                    other : other.val(),
                    session_date : sessionDate.val(),
                    start_time : startTime.val(),
                    end_time : endTime.val(),
                    number_of_photo : numberOfPhoto.val(),
                    submit : "SUBMIT_REQUEST"
                },
                function(data,status){
                    /*
                        ***************
                        * success
                        * notmodified
                        * error
                        * timeout
                        * parsererror
                        * *************
                    */
                    if(status == "success"){
                        //alert(data);
                        alertArea.html("<span class='alert'>"+data+"</span>");
                        setTimeout(callScrollTop, 2000);
                        function callScrollTop(){
                            $('html, body').animate({scrollTop: (alertArea.offset().top - 100)}, 500);
                        }

                        /*
                        @RESET INPUT BOXS ON SUCCESS
                        ***************************
                        */
                        if(!data.includes("Error")){
                            firstName.val("");
                            otherName.val("");
                            address.val("");
                            phoneNumber.val("");
                            email.val("");
                            state.val("");
                            document.getElementById("outdoor").checked = false;
                            document.getElementById("home").checked = false;
                            document.getElementById("model").checked = false;
                            document.getElementById("event").checked = false;
                            document.getElementById("others").checked = false;
                            sessionDate.val("");
                            startTime.val("");
                            endTime.val("");
                            numberOfPhoto.val("");
                            submitRequest.html("Submit");
                        }
                        submitRequest.html("Submit");                  
                    }else{
                        if(status == "nocontent"){
                            alertArea.html("<span class='alert'>We are sorry we detect empty field(s)</span>\n");
                            setTimeout(callScrollTop, 2000);
                        }else{
                            alertArea.html("<span class='alert'>We are sorry an error ocured while sending your request</span>\n");
                            setTimeout(callScrollTop, 2000);
                        }
                        function callScrollTop(){
                            $('html, body').animate({scrollTop: (alertArea.offset().top - 100)}, 500);
                            submitRequest.html("Submit");
                        }
                    }
                
            });
        }else{
            setTimeout(callScrollTop, 1000);
            submitRequest.html("Submit");
            function callScrollTop(){
                $('html, body').animate({scrollTop: (alertArea.offset().top - 100)}, 200);
                submitRequest.html("Submit");
            }
        }
    });


    //SENDING REQUEST MANUAL
    $("#bookSessionManual").click(function(){
        //mailto:webmaster@gmail.com?subject=I%20am%20booking%20a%20session&
        var firstName = $("#firstName");
        var otherName = $("#otherNames");
        var address = $("#address");
        var phoneNumber = $("#phoneNumber");
        var email = $("#email");
        var state = $("#state");
        var outdoor = $("#outdoor");
        var home = $("#home");
        var model = $("#model");
        var event = $("#event");
        var other = $("#others");
        var startTime = $("#startTime");
        var endTime = $("#endTime");
        var sessionDate = $("#sessionDate");
        var numberOfPhoto = $("#numberOfPhoto");
        var submitRequest = $("#submitRequest");
        var emptyBox = $("#empty_box");
        var alertArea = $("#alert_area");
        var submit = true;

        if(!document.getElementById("outdoor").checked){ outdoor = emptyBox;}
        if(!document.getElementById("home").checked){ home = emptyBox;}
        if(!document.getElementById("model").checked){ model = emptyBox;}
        if(!document.getElementById("event").checked){ event = emptyBox;}
        if(!document.getElementById("others").checked){ other = emptyBox;}

        if(submit === true){
            $("#bookSessionManual").html("<span class='loader'><span class='loading'></span></span>");
            setTimeout(callScrollTop, 1000);
            function callScrollTop(){
                $('html, body').animate({scrollTop: (alertArea.offset().top - 100)}, 200);
                $("#bookSessionManual").html("Submit manualy");
                window.location.href="mailto:dlightphotographi@gmail.com";
            }
            /*$.post(
                "engine/email.php",
                {
                    first_name : firstName.val(),
                    other_name : otherName.val(),
                    address : address.val(),
                    phone_number : phoneNumber.val(),
                    email : email.val(),
                    state : state.val(),
                    outdoor : outdoor.val(),
                    home : home.val(),
                    model : model.val(),
                    event : event.val(),
                    other : other.val(),
                    session_date : sessionDate.val(),
                    start_time : startTime.val(),
                    end_time : endTime.val(),
                    number_of_photo : numberOfPhoto.val(),
                    submit : "SUBMIT_REQUEST_MANUAL"
                },
                function(data,status){
                    if(status == "success"){
                        //let body = data;
                        //let link ="mailto:webmaster@gmail.com?subject=I%20am%20booking%20a%20session&body="+=body;
                        window.location.href="mailto:dlightphotographi@gmail.com?subject=I%20am%20booking%20a%20session&body="+data;

                        $("#bookSessionManual").html("Submit manualy");                
                    }else{
                        alertArea.html("<span class='alert'>We are sorry an error ocured while sending your request manualy</span>\n");
                        setTimeout(callScrollTop, 2000);
                        function callScrollTop(){
                            $('html, body').animate({scrollTop: (alertArea.offset().top - 100)}, 500);
                            $("#bookSessionManual").html("Submit manualy");
                        }
                    }
            });*/
        }else{
            setTimeout(callScrollTop, 1000);
            function callScrollTop(){
                $('html, body').animate({scrollTop: (alertArea.offset().top - 100)}, 200);
                $("#bookSessionManual").html("Submit manualy");
            }
        }
    });
});
