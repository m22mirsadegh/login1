

function validateEmail(){

    let Email=document.getElementById("Emaill").value;


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
    {
      return (true)
    }
    else{
      alert("You have entered an invalid email address!")
      return (false)

    }

   
  
    
    
}


 