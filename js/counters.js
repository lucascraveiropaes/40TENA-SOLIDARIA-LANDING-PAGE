$(document).ready(function() {
    $.get("https://quarentena-solidaria.herokuapp.com/statistics", function(data) {
        if (data.status) {
            $("#users").text(data.users);
            $("#volunteers").text(data.volunteers);
            $("#total").text(data.allUsers);

            $("#counters").show();
        }
    });
});
