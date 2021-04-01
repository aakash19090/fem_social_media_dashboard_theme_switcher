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

let headerTitle = $(".header_title , .followers");
let headerTitle2 = $(".overview_dashboard .title");
let modeSwitch =  $("#social_dashboard .toggle_wrapper");
let socialMediaCols =  $("#social_dashboard .sm_stats .col");
let detailCols =  $("#social_dashboard .detailed_dashboard .col");

let timeline = new gsap.timeline();

function animationOnPageLoad(){
    timeline.from('body', { duration: 0.2, opacity: 0, backgroundColor: '#000' });
    timeline.from(headerTitle, { duration: 1, x: -50, opacity: 0 });
    timeline.from(modeSwitch, { duration: 1, x: 50, opacity: 0 }, '-=1');
    timeline.from(socialMediaCols, { duration: 0.5, opacity: 0, y:-50, stagger: 0.2 });
    timeline.from(headerTitle2, { duration: 1, x: -50, opacity: 0 });
    timeline.from(detailCols, { duration: 0.5, opacity: 0, y:50, stagger: 0.2 }, '-=0.5');
}

function animationOnToggle(){
    timeline.from(socialMediaCols, { duration: 0.5, opacity: 0, stagger: 0.2 });
    timeline.from(detailCols, { duration: 0.5, opacity: 0, stagger: 0.2 }, '-=0.5');
}

$(document).ready(function(){
    animationOnPageLoad();

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
           
            // animationOnToggle();
            
        }
        else{
            $(main_parent).removeClass("activated_light_theme");
            $(main_parent).addClass("activated_dark_theme");

            domStyles.setProperty('--dark_desaturated_blue', dark_theme.dark_desaturated_blue)
            domStyles.setProperty('--very_dark_blue_top_bg', dark_theme.very_dark_blue_top_bg)
            domStyles.setProperty('--very_dark_blue', dark_theme.very_dark_blue)
            domStyles.setProperty('--white', dark_theme.white)
            domStyles.setProperty('--desaturated_blue', dark_theme.desaturated_blue)

            // animationOnToggle();

        }
    });
});