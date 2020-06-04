

    function validation() 
        {
            var name = document.getElementById('name')
            var num = document.getElementById('sub')
            var email = document.getElementById('mail')
            var sms = document.getElementById('area')
            var package = document.getElementById('area')

            if (name.value.trim()==""||num.value.trim()==""||email.value.trim()==""||sms.value.trim()==""||package.value.trim()=="") {
                alert("Dont let any field empty")
                return false;
                }
            if (!/^[a-zA-Z ]*$/g.test(name.value)) 
                {
                alert ("only characters are allowed in Name");
                return false;
                }
            if (!/^[0-9]*$/g.test(num.value)) 
                {
                alert ("only numbers are allowed in Mobile Number");
                return false;
                }
                if (num.value.length != 11) 
                    {
                        alert("Enter 11 digits phone number");
                        return false; 
                    }
                if (num.value[0] != 0 || num.value[1] != 3) 
                    {
                        alert("Invalid number (Number Starts with 03)");
                        return false;
                    }   
            else 
                {
                alert ("Now click on send button to mail at zeerak71@yahoo.com")
                return true;
                }
            }

    function valid()
        {
            var address = document.getElementById('email')

            if (address.value.trim()=="") {
                alert("Write your Email Address")
                return false;
                }
            else 
                {
                alert ("Now click on send button to mail at zeerak71@yahoo.com")
                return true;
                }
        }