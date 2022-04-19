import $ from 'jquery';
import anime from 'animejs';
import ScrollMagic from 'scrollmagic';

import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

let gradingCardIndex = 0;

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
    
    //add animation and events for nav arrows
    $('.nav-arrow')
        .on('mouseenter', function() {
            let targetClassName;
            $(this).hasClass('fa-angle-left') ? targetClassName = '.fa-angle-left' : targetClassName = '.fa-angle-right';
            anime({
                targets: targetClassName,
                scale: 1.5,
                duration: 200,
                easing: 'easeInOutSine',
            });
        })
        .on('mouseleave', function() {
            anime({
                targets: '.nav-arrow',
                scale: 1,
                duration: 200,
                easing: 'easeInOutSine',
            });
        })
        .on('click', function() {

            switch (gradingCardIndex) {
                case 0:
                    if ($(this).hasClass('fa-angle-right')) {
                        gradingCardAnimation('#a', '#b', 0, 1)                
                        gradingCardIndex++;
                        console.log(gradingCardIndex);
                    }
                    break;
            
                case 1:
                    if ($(this).hasClass('fa-angle-right')) {
                        gradingCardAnimation('#b', '#c', 1, 2);
                        gradingCardIndex++;
                        console.log(gradingCardIndex);
                    }
                    else {
                        gradingCardAnimation('#b', '#a', 1, 0);
                        gradingCardIndex--;
                        console.log(gradingCardIndex);
                    }
                    break;

                case 2:
                    if ($(this).hasClass('fa-angle-right')) {
                        gradingCardAnimation('#c', '#d', 2, 3);
                        gradingCardIndex++;
                        console.log(gradingCardIndex);
                    }
                    else {
                        gradingCardAnimation('#c', '#b', 2, 1);
                        gradingCardIndex--;
                        console.log(gradingCardIndex);
                    }
                    break;
                    
                case 3:
                    if ($(this).hasClass('fa-angle-right')) {
                        gradingCardAnimation('#d', '#f', 3, 4);
                        gradingCardIndex++;
                        console.log(gradingCardIndex);
                    }
                    else {
                        gradingCardAnimation('#d', '#c', 3, 2);
                        gradingCardIndex--;
                        console.log(gradingCardIndex);
                    }
                    break;

                case 4:
                    if ($(this).hasClass('fa-angle-left')) {
                        gradingCardAnimation('#f', '#d', 4, 3);
                        gradingCardIndex--;
                        console.log(gradingCardIndex);
                    }
                    break;

                default:
                    break;
            }
        });

    //scrollmagic controller and scenes addition
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: `.stat:nth-of-type(1)`,
        triggerHook: 'onCenter',
    })
    .on('enter', () => {
        anime({
            targets: '#risc-logo',
            opacity: 1,
            duration: 2000,
            easing: 'easeInOutSine',
          });
    })
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.why',
        triggerHook: 'onCenter',
    })
    .on('enter', () => {
        let whyTimeline = anime.timeline({
            easing: 'easeInOutSine',
            duration: 2000
        })   
        whyTimeline
            .add({
                targets: '.fa-globe-americas',
                opacity: 1,
            })
            .add({
                targets: '.fa-chart-area',
                opacity: 1,
            })
            .add({
                targets: '.fa-lightbulb',
                opacity: 1,
            })
            .add({
                targets: '.fa-graduation-cap',
                opacity: 1,
            })
            .add({
                targets: '.fa-flag-usa',
                opacity: 1,
            });
    })
    .addTo(controller);

    //HELPER FUNCTIONS

    //reusable template for playing grading card animation from a start card to an end card
    function gradingCardAnimation(startingTargetId, endingTargetId, startingTargetIndex, endingTargetIndex) {
        anime({
            targets: startingTargetId,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutSine',
            changeComplete: function(anim) {
                $('.grading-card')[startingTargetIndex].style.display = 'none';
                $('.grading-card')[endingTargetIndex].style.display = 'flex';
                anime({
                    targets: endingTargetId,
                    opacity: 1,
                    duration: 500,
                    easing: 'easeInOutSine',
                });
            }
        });
    }

});
