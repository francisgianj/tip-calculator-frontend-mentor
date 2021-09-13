
document.addEventListener("DOMContentLoaded", ()=> {
    document.addEventListener("keyup", (event)=> {

        let billInput = document.querySelector("#bill");

        let testing = document.querySelector("#testing");

        testing.innerHTML = `${billInput.value}`;
        return;

    });



});