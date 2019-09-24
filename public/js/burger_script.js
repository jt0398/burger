$(document).ready(function() {
    //Handles Submit button click
    $("#submit-btn").on("click", function(e) {
        e.preventDefault();

        //Gets form object
        let form = $(".needs-validation")[0];

        //Prevent form from being submitted if there's a validation error
        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
            return;
        }

        //Get burger name from the form control
        let newBurger = {
            burgerName: $("#burgerName").val().trim()
        };

        //Ajax post to add new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload(); //Reload page
        });

    });

    //Handle Devour-It button click
    $(".devour-it-btn").on("click", function() {
        //Get id from the data properties of the clicked button
        var id = $(this).data("id");

        //Ajax put to update burger status
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                location.reload(); //Reload page
            }
        );
    });
});