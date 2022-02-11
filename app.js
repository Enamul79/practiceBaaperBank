document.getElementById('submit-btn').addEventListener('click',function(){
 
    const emailField= document.getElementById('user-email');
    const userEmail = emailField.value; //user-email
   //  console.log(userEmail);

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value; //user-password
   //  console.log(userPassword);
   if(userEmail == 'enahaque79@gmail.com' && userPassword == 'enahaque79@'){
         // console.log('welcome!!');
         window.location.href = "index.html";
   }

})

