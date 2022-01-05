import $ from 'jquery';
import anime from 'animejs';
import ScrollMagic from 'scrollmagic';

import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

$(document).ready(function() {

    //add animation and events for back button
    $('.back-arrow').on('click', function() {
        anime({
            targets: "nav",
            translateX: -256,
            duration: 750,
            easing: 'easeInOutSine',
            complete: (anim) => {
              window.location.replace("https://risc.uchicago.edu");
            },
          });
    });
    
    //scrollmagic controller and scenes addition
    const controller = new ScrollMagic.Controller();

    addFadeInScrollMagic(1, '#risc-logo');
    addFadeInScrollMagic(4, '.fa-globe-americas')
    addFadeInScrollMagic(5, '.fa-chart-area');
    addFadeInScrollMagic(6, '.fa-lightbulb');
    addFadeInScrollMagic(7, '.fa-graduation-cap');
    addFadeInScrollMagic(8, '.fa-flag-usa');



    //HELPER FUNCTIONS

    //create scene using animejs fade
    function addFadeInScrollMagic(section, target) {
        new ScrollMagic.Scene({
            triggerElement: `.stat:nth-of-type(${section})`,
            triggerHook: 'onCenter',
        })
        .on('enter', () => {
            anime({
                targets: target,
                opacity: 1,
                duration: 2000,
                easing: 'easeInOutSine',
              });
        })
        .addTo(controller);
    }

});
