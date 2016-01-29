$(function(){
    // -->
    $("#add").click(function() {
        $("#second").append($("#first option:selected"));
    });
    
    // ==>
    $("#add_all").click(function() {
        $("#second").append($("#first option"));
    });
    
    // <--
    $("#remove").click(function() {
        $("#first").append($("#second option:selected"));
    });
    
    // <==
    $("#remove_all").click(function() {
        $("#first").append($("#second option"));
    });
});
