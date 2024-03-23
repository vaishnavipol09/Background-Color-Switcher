const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e){
        console.log(e); // e means mouse event
        console.log(e.target); // when you click the button then they will show you who was the target you clicked(html node)

        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "aqua"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id;
        }
    })
})