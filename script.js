let light_theme = {
    very_pale_blue : '#f5f7ff',     // (Top BG Pattern)
    light_grayish_blue : '#f0f2fa',  //(Card BG)
    dark_grayish_blue : '#63687e',     //(Text)
    very_dark_blue_txt : '#1e202a',
    white: '#ffffff'
}

let dark_theme = {
    toggle_gradient_start: '#378fe6',
    toggle_gradient_end: '#3eda82',

    very_dark_blue : '#1e202a',          //(BG)
    very_dark_blue_top_bg : '#1f212e',  //(Top BG Pattern)
    dark_desaturated_blue : '#252a41', //(Card BG)
    desaturated_blue : '#8b97c6',    //(Text)
    white : '#ffffff'            //(Text)
}

let domStyles = document.documentElement.style;

// domStyles.setProperty('--lime_green', '#000')


$(document).ready(function(){
    $("#toggle_switch").click(function(){
        var main_parent = $(this).closest("#social_dashboard");

        if($(main_parent).hasClass("activated_dark_theme")){
            $(main_parent).removeClass("activated_dark_theme");
            $(main_parent).addClass("activated_light_theme");

            domStyles.setProperty('--dark_desaturated_blue', light_theme.light_grayish_blue)
            domStyles.setProperty('--very_dark_blue_top_bg', light_theme.very_pale_blue)
            domStyles.setProperty('--very_dark_blue', light_theme.white)
            domStyles.setProperty('--white', light_theme.very_dark_blue_txt)
            domStyles.setProperty('--desaturated_blue', light_theme.dark_grayish_blue)
            domStyles.setProperty('--dark_desaturated_blue', light_theme.light_grayish_blue)


        }
        else{
            $(main_parent).removeClass("activated_light_theme");
            $(main_parent).addClass("activated_dark_theme");

            domStyles.setProperty('--dark_desaturated_blue', dark_theme.dark_desaturated_blue)
            domStyles.setProperty('--very_dark_blue_top_bg', dark_theme.very_dark_blue_top_bg)
            domStyles.setProperty('--very_dark_blue', dark_theme.very_dark_blue)
            domStyles.setProperty('--white', dark_theme.white)
            domStyles.setProperty('--desaturated_blue', dark_theme.desaturated_blue)
            domStyles.setProperty('--dark_desaturated_blue', dark_theme.light_grayish_blue)
        }
    });
});