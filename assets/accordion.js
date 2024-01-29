$(document).ready(function(){
    $(".accordion-title").on( "click", function() {
        $(this).next().toggle()
    });
})