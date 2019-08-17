
var abc=[];
//function validation
		function validation(){

			var user = document.getElementById('user').value;
			var pass = document.getElementById('pass').value;
			var confirmpass = document.getElementById('confirmpass').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;
//enter the username in the field
			if(user == ""){
				document.getElementById('username').innerHTML =" ** Please fill the username field";
				return false;
			}
			//set the length of the username
			if((user.length <= 2) || (user.length > 20)) {
				document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 15";
				return false;	
			}
			//to show the message  when you are enter the wrong character
			if(!isNaN(user)){
				document.getElementById('username').innerHTML =" ** enter characters are allowed";
				return false;
			}
			//enter the password in the field
			if(pass == ""){
				document.getElementById('passwords').innerHTML =" ** Please fill the password field";
				return false;
			}
			//set the length of the password
			if((pass.length <= 5) || (pass.length > 20)) {
				document.getElementById('passwords').innerHTML =" ** Passwords lenght must be between 4   and 15";
				return false;	
			}

//to show the message  when you are enter the wrong password
			if(pass!=confirmpass){
				document.getElementById('confirmpass').innerHTML =" ** Password does not match the confirm password";
				return false;
			}

//enter the confirmpassword in the field

			if(confirmpass == ""){
				document.getElementById('confirmpass').innerHTML =" ** Enter the confirmpassword field";
				return false;
			}


//enter the mobilenummber in the field

			if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
				return false;
			}
			//set the specific number  of the mobilenumber
			if(isNaN(mobileNumber)){
				document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
				return false;
			}
			//to show the message  when you are not enter the correct the mobilenumber
			if(mobileNumber.length!=10){
				document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
				return false;
			}

//enter the emailid in the field

			if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Please fill the email id` field";
				return false;
			}
			//set the sybmol of the email
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
				return false;
			}

			//to show the message  when you are enter the wrong character
			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Invalid Position";
				return false;
			}
		 abc.push(user.toString);
		 for(var i=0;i<abc.length;i++)

		 {
			console.log(user[i]);
		 }
		
		}

		function check()
		{
		
		}

