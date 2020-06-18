$(document).ready(function(){
    $("#toggle_switch").click(function(){
        var main_parent = $(this).closest("#social_dashboard");

        if($(main_parent).hasClass("activated_dark_theme")){
            $(main_parent).removeClass("activated_dark_theme");
            $(main_parent).addClass("activated_light_theme");

        }
        else{
            $(main_parent).removeClass("activated_light_theme");
            $(main_parent).addClass("activated_dark_theme");
        }
    });
});