import $ from 'jquery';
import anime from 'animejs';

import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

$(document).ready(function() {

    //anime js for each image
    anime({
        targets: ".fa-globe-americas",
        opacity: 1,
        duration: 2000,
        easing: 'easeInOutSine',
    });
    anime({
        targets: ".fa-chart-area",
        opacity: 1,
        duration: 2000,
        easing: 'easeInOutSine',
      });
    anime({
        targets: ".fa-lightbulb",
        opacity: 1,
        duration: 2000,
        easing: 'easeInOutSine',
    });
    anime({
        targets: ".fa-graduation-cap",
        opacity: 1,
        duration: 2000,
        easing: 'easeInOutSine',
    });
    anime({
        targets: ".fa-flag-usa",
        opacity: 1,
        duration: 2000,
        easing: 'easeInOutSine',
    });
    anime({
        targets: "#risc-logo",
        opacity: 1,
        duration: 2000,
        easing: 'easeInOutSine',
    });
    

});
