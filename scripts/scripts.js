


//  ! Important

//  Place the minified version of this file into the script tag
//  at the bottom of the html file this is used on.
//  This is for pagespeed purposes.


function KeyPress(n) { var t = window.event ? event : n; t.keyCode == 90 && t.shiftKey && t.altKey && $("html").toggleClass("outlineHelper") }
document.onkeydown = KeyPress;


$(document).ready(function()
{

    //$('html').addClass('outlineHelper');




});