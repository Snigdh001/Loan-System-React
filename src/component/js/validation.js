
    $(document).ready(function() {
        $.validator.addMethod("email", function(value, element)
            {
            return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
            }, "Please enter a valid email address.");
            $.validator.addMethod("password",function(value,element)
            {
            return this.optional(element) || (/^[A-Za-z0-9!@#$%^&*()_]{6,16}$/i).test(value);
            },"Passwords are 5-20 characters");

        $('#signupform').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 3,
                    number:false,
                },
                lname: {
                    required: true,
                    minlength: 3,
                    number:false,
                },
                email: {
                    required: true,
                    email: true
                    
                },
                password: {
                    required: true,
                    minlength: 5,
                },
                cpassword: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                mobile: {
                    required: true,
                    number:true,
                    minlength: 10,
                    maxlength: 10
                }
            }
        });
    })
