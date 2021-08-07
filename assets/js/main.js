$(document).ready(function() {

	$("#fname_error_message").hide();

	$("#sname_error_message").hide();
	$("#email_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();

	var error_fname = false;
	var error_sname = false;
	var error_email = false;
	var error_password = false;
	var error_retype_password = false;

	$("#form_fname").focusout(function(){
		check_fname();
	});
	$("#form_sname").focusout(function() {
		check_sname();
	});
	$("#form_email").focusout(function() {
		check_email();
	});
	$("#pass").focusout(function() {
		check_password();
	});
	$("#re-pass").focusout(function() {
		check_retype_password();
	});

	function check_fname(){
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val();
        if (pattern.test(fname) && fname !== '') {
           $("#fname_error_message").hide();
           $("#form_fname").css("border","2px solid #34F458");
        } else {
           $("#fname_error_message").html("Should contain only Characters");
           $("#fname_error_message").show();
           $("#form_fname").css("box-shadow","2px 2px 5px 0 #f8b2b2");
           error_fname = true;
        }
     };

     function check_sname() {
        var pattern = /^[a-zA-Z]*$/;
        var sname = $("#form_sname").val()
        if (pattern.test(sname) && sname !== '') {
           $("#sname_error_message").hide();
           $("#form_sname").css("border","2px solid #34F458");
        } else {
           $("#sname_error_message").html("Should contain only Characters");
           $("#sname_error_message").show();
           $("#form_sname").css("box-shadow","2px 2px 5px 0 #f8b2b2");
           error_fname = true;
        }
     }

         function check_password() {
            var password_length = $("#pass").val().length;
            if (password_length < 8) {
               $("#password_error_message").html("Atleast 8 Characters");
               $("#password_error_message").show();
               $("#pass").css("box-shadow","2px 2px 5px 0 #f8b2b2");
               error_password = true;
            } else {
               $("#password_error_message").hide();
               $("#pass").css("border","2px solid #34F458");
            }
         }

         function check_retype_password() {
            var password = $("#pass").val();
            var retype_password = $("#re-pass").val();
            if (password !== retype_password) {
               $("#retype_password_error_message").html("Passwords Did not Matched");
               $("#retype_password_error_message").show();
               $("#re-pass").css("box-shadow","2px 2px 5px 0 #f8b2b2");
               error_retype_password = true;
            } else {
               $("#retype_password_error_message").hide();
               $("#re-pass").css("border","2px solid #34F458");
            }
         }

         function check_email() {
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#form_email").val();
            if (pattern.test(email) && email !== '') {
               $("#email_error_message").hide();
               $("#form_email").css("border","2px solid #34F458");
            } else {
               $("#email_error_message").html("Invalid Email");
               $("#email_error_message").show();
               $("#form_email").css("box-shadow","2px 2px 5px 0 #f8b2b2");
               error_email = true;
            }
         }

         $("#registration_form").submit(function() {
            error_fname = false;
            error_sname = false;
            error_email = false;
            error_password = false;
            error_retype_password = false;

            check_fname();
            check_sname();
            check_email();
            check_password();
            check_retype_password();

            if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
               alert("Registration Successfull");
               return true;
            } else {
               alert("Please Fill the form Correctly");
               return false;
            }
        });
      


	//Show&Hide Password
	$("#icon-click").click(function(){
		$("#icon").toggleClass('fa-eye-slash');

		var input = $("#pass");
		if(input.attr("type")==="password"){
			input.attr("type","text");
		}else{
			input.attr("type","password");
		};

		var input = $("#re-pass");
		if(input.attr("type")==="password"){
			input.attr("type","text");
		}else{
			input.attr("type","password");
		}
	});



});