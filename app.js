document.querySelector(".start-login").addEventListener("click", loginOn = () => {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".Reset-password").style.display = "none";
    document.querySelector(".animated-paragraph").style.display = "none";
})

document.querySelector(".register-btn").addEventListener("click", registerOn = () => {
    document.querySelector(".register").style.display = "block";
    document.querySelector(".login").style.display = "none";
})

document.querySelector(".login-btn").addEventListener("click", loginOn2 = () => {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
    

});

document.querySelector(".gotologin-btn").addEventListener("click", loginOn2 = () => {
    document.querySelector(".login").style.display = "block";
    document.querySelector(".Reset-password").style.display = "none";

});

document.querySelector(".psw").addEventListener("click", loginOn = () => {
    document.querySelector(".Reset-password").style.display = "block";
    document.querySelector(".login").style.display = "none";

})

document.querySelector(".close-loginbtn").addEventListener("click", closeloginwindow = () => {
    document.querySelector(".login").style.display = "none";
})
document.querySelector(".close-registerbtn").addEventListener("click", closeregisterwindow = () => {
    document.querySelector(".register").style.display = "none";
    document.querySelector(".login").style.display = "block";
})
document.querySelector(".close-resetbtn").addEventListener("click", closeresetwindow = () => {
    document.querySelector(".Reset-password").style.display = "none";

})


const users = [];
function loginfunc() {
    loginusername = document.querySelector(".input_loginusername").value;
    loginpassword = document.querySelector(".input_loginpassword").value;

    if (loginusername === registerusername && loginpassword === registerpassword) {
        alert("you are logined")
    } else if (loginusername != registerusername) {
        document.querySelector(".wrong-username").innerHTML = `username not match*`
    } else {
        document.querySelector(".wrong-password").innerHTML = `password not match*`
    }
}

function resetpasswordfunc() {
    currentpassword = document.querySelector(".input_currentpassword").value;
    console.log(currentpassword);
    newpassword = document.querySelector(".input_newpassword").value;
    console.log(newpassword);
    reenterpassword = document.querySelector(".input_reenterpassword").value;
    console.log(reenterpassword);
    if (currentpassword === registerpassword && newpassword === reenterpassword) {
        registerpassword = newpassword;
        alert("password changed");
    } else if (currentpassword != registerpassword) {
        document.querySelector(".notcurrentpsw").innerHTML = `Enter your Current password.*`
    } else {
        document.querySelector(".pswnotmatch").innerHTML = `please re-enter password.*`
    }
    

}
const register = document.querySelector(".submit-register");

function adduser() {

    registerusername = document.querySelector(".input_registerusername").value;
    registeremail = document.querySelector(".input_registeremail").value;
    registerpassword = document.querySelector(".input_registerpassword").value;

    users.push({ username: registerusername, email: registeremail, password: registerpassword });
    alert("you are registered");
    document.querySelector(".register").style.display = "none";
    document.querySelector(".login").style.display = "block";

    const login = document.querySelector(".submit-login");
    login.addEventListener("click", loginfunc);

    const reset = document.querySelector(".submit-continue");
    reset.addEventListener("click", resetpasswordfunc);


}
register.addEventListener("click", adduser);

























