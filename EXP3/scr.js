function validate() {
    var name = document.getElementById("one").value;
    var email = document.getElementById("two").value;
    var password = document.getElementById("t").value;
    var confirmPassword = document.getElementById("f").value;


    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return false; 
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }

    if (password.length < 9) {
        alert("Password length must be greater than 9.");
        return false; 
    }

 
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; 
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);  

    alert("Registration Successful! Your details have been saved.");

 
    window.location.href = "userlog.html"; 

    return false; 
}

function validate1()
{
    var email=document.getElementById("two").value;
    var pass=document.getElementById("t").value;
    var x = localStorage.getItem("email");
    var y = localStorage.getItem("password");
    if(x!==email || y!==pass)
    {
        alert("Either you entered a invalid email or password");
        return false;
    }
    else{
        alert("Logged in successfully")
        
    }
    
    window.location.href = "credit.html"; 
    return false;
}

window.onload = function() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    document.getElementById("profile-name").innerText = name ? name : "Not available";
    document.getElementById("profile-email").innerText = email ? email : "Not available";
    document.getElementById("profile-password").innerText = password ? password : "Not available";
}
