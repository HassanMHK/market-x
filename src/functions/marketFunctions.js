function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}

function CheckPassword(input) 
{ 
// var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,15}$/;
if(input === undefined){
    return false;
}else{
    if(input.match(decimal)){ 
        return true;
    }else{ 
        // alert('Wrong...! password should be between (8 - 15 characters) which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        // alert('Wrong...! password should be between (8 - 15 characters) which contain at least one lowercase letter, one numeric digit, and one special character')
        return false;
    }
}
}

function CheckEmpty(input) 
{ 
if(input === undefined){
    return false;
}else{
    return true;
}
}

function checkDate(date){
    if(date === undefined){
        return false;
    }else{
        const d = new Date();
        const yearNow = d.getFullYear();
        // let Datenow = new Date().toISOString().slice(0, 10);
        const inputDate = Number(date.slice(0,4));
        if(inputDate > yearNow || inputDate < yearNow-150){
            // alert("Invalid Year");
            return false;
        }else{
            return true;
        }
    }
}

function checkGender(gender){
    if(gender === "male" || gender === "female"){
        return true;
    }else{
        // alert("You must choose a gender");
        return false;
    }
}


export { ValidateEmail, CheckPassword, CheckEmpty, checkDate, checkGender };