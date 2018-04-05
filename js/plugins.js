// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// Smooth scroll to anchor link
$(document).ready(function(){
   $('a[href^="#"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $(target);

       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 900, 'swing', function () {
           window.location.hash = target;
       });
   });
});
