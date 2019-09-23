$(document).ready(function() {
    $("#submit-btn").on("click", function(e) {
        e.preventDefault();

        let newBurger = {
            burgerName: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });

    });

    $(".devour-it-btn").on("click", function() {
        var id = $(this).data("id");

        $.ajax("/api/burgers" + id, {
            type: "PUT"
        }).then(
            function() {
                location.reload();
            }
        );
    });
});