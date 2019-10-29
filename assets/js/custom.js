$(".no-link-alert").hide();

$(".no-link").on("click", function() {
    $(".no-link-alert").show();
    setTimeout(function(){
        $(".no-link-alert").fadeOut("slow");
    }, 3000);
})
