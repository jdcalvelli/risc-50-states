import $ from 'jquery';
import anime from 'animejs';
import ScrollMagic from 'scrollmagic';

import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

$(document).ready(function() {

   
    
    //scrollmagic controller and scenes addition
    const controller = new ScrollMagic.Controller();

    addFadeInScrollMagic(1, '.fa-globe-americas')
    addFadeInScrollMagic(2, '.fa-chart-area');
    addFadeInScrollMagic(3, '.fa-lightbulb');
    addFadeInScrollMagic(4, '.fa-graduation-cap');
    addFadeInScrollMagic(5, '.fa-flag-usa');
    addFadeInScrollMagic(6, '#risc-logo');



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
