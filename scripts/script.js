document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("status");

    
    if (!email.includes("@")) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Your message has been sent!";
    status.style.color = "green";

    document.getElementById("contact").reset();


});