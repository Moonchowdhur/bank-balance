

document.getElementById("btn-submit").addEventListener("click", function(){
    const email=document.getElementById("email");
    const emailvalue=document.getElementById("email").value;
    const password=document.getElementById("password");
    const passwordvalue=document.getElementById("password").value;
    if(emailvalue==="snehasni@gmail.com" && passwordvalue==="secret"){
      location.href='index2.html';
  
    }
    else{
      alert("invalid user, please check with right input");
    }
  })
  