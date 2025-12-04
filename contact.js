document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let response = document.getElementById("response");
    let thisform = document.getElementById("form");

   /* if (name === "" || email === "" || message === "") {
        response.style.color = "red";
        response.textContent = "Please fill all fields!";
        return;
    }*/

        if(!this.checkValidity()){
            return;
        }
    thisform.style.display = "none" ;
    response.textContent = "Form submitted successfully!";
    alert("Form submitted successfully!");


    document.getElementById("form").reset();
});





