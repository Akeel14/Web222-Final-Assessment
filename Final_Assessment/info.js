
var form = document.getElementById("signupForm");
var errText = document.getElementById("errMsg");
form.addEventListener('submit', (event) => {
    var userName = form.elements['userName'].value;
    var pwd = form.elements['pwd'].value;
    var confirmPwd = form.elements['confirmPwd'].value;

    if(userName.length < 6){
        event.preventDefault(); 
        errText.innerHTML = "User name must be greater than or equal to 6 charaters"    
    }
    else{
        if (/[^a-zA-Z]/.test(userName[0])){
            event.preventDefault(); 
            errText.innerHTML = "User name must be started with an alphabet" 
        }
        else{
            if(pwd.length < 6){
                event.preventDefault(); 
                errText.innerHTML = "Password must be greater than or equal to 6 charaters"    
            }
            else{
                if (/[^a-zA-Z]/.test(pwd[0])){
                    event.preventDefault(); 
                    errText.innerHTML = "Password must be started with a alphabet" 
                    console.log(/[^a-zA-Z]/.test(pwd[0]))
                }
                else{
                    re = /^(?=\S*[A-Z])(?=\S*\d)/;
                    if(!re.test(pwd)){
                        event.preventDefault(); 
                        errText.innerHTML = "Password must have at least 1 digit and 1 uppercase" 
                    }
                    else{
                        if(pwd != confirmPwd){
                            event.preventDefault(); 
                            errText.innerHTML = "Confirm password must be same with password" 
                        }
                        else
                            alert("Form data was submitted successfully!")
                    }
                }
            }
        }
    }
    // else
    //     form.submit();
});