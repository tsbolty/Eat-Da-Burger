$(function(){
    $("#submit").on("click", event=>{
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger-name").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(()=>{
            console.log("Created new burger")
            location.reload()
        })
    })

    $("#devour").on("click", event=>{
        event.preventDefault()
        const id = $(this).data("id")
        const devoured = $(this).data("devoured")

        const newState = { devoured: devoured}

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newState
        }).then(()=>{
            location.reload()
        })
    })
})

