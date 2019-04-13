$(function(){
    $("#submit-btn").on("click", function(event){
        console.log("Submit button clicked");
        event.preventDefault();
        
        var newItem = {
            text: $("#textbox").val().trim(),
            finished:false
        }

        $.ajax("/api/list", {
            type:"POST",
            data:newItem
        }).then(function(){
            console.log("Added " + newItem.text + " to the database.");
            window.location.reload();
        });
    });
    
    $("li").on("click", function(){
        console.log("list item "+ $(this).data("id") +" clicked");
        var id = $(this).data("id");
        var finished = $(this).data("finished");

        if (finished == true){
            console.log("This item is finished, and clicked.");

            $.ajax("/api/list/" + id, {
                type:"DELETE"
            }).then(function(){
                console.log("Deleted an Item from the List");
                location.reload();
            });
        }

        else if (finished == false){
            console.log("This item isn't finished, and is clicked.");
            var newData = {
                text:$(this).text(),
                finished:true
            }
            $.ajax("/api/list/" + id, {
                type:"PUT",
                data:newData
            }).then(function(){

                console.log("Moved the item to 'finished'");
                location.reload();
            })
        }

    });

    
});


