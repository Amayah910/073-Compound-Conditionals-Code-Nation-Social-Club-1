// set the correct username and password combination below
var correctUsername = "AmayahRRG";
var correctPassword = "codenation123";


$("button").click(function() {
     var username = $(".username").val();
    var password = $(".password").val();

    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
if (username === "AmayahRRG" && password === "codenation123"){
        $(".message").text( "Successful Login");
    }
            
      else if (username === "AmayahRRG" || password === "codenation123"){
        $(".message").text( "Wrong!Try Again");
        
} else if ("Empty"){
    $(".message").text("Incomplete");
}


});