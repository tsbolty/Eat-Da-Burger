$(function(){
    $("#submit").on("click", event=>{
        event.preventDefault();

        const newBurger = {
            name: $("#burger-name").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(()=>{
            console.log("Created new burger")
            location.reload()
        }
    })
})