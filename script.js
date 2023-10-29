function validateForm() {
    // Validation for password matching
    const password = document.getElementById("password").value;
    const reenterPassword = document.getElementById("reenterPassword").value;

    if (password !== reenterPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Validation for username availability
    const existingUsernames = ["Admin", "Harry", "Elizabeth", "Shana"];
    const username = document.getElementById("username").value;

    if (existingUsernames.includes(username)) {
        alert("Username is already taken");
        return false;
    }

    // Additional validation can be added here

    return true;
}

var canvas = document.getElementById("goodCanvas1");
var ctx = canvas.getContext("2d");
ctx.font= "30px Comic Sans MS";
ctx.fillStyle = "gray";
ctx.fillRect(0,0,400,100);
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Hello ARIA World", canvas.width/2, canvas.height/2);


document.getElementsByTagName('div')[0].focus();