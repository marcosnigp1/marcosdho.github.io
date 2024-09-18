/* Some code from here was done with help from the following sources: https://stackoverflow.com/questions/64975857/how-to-trigger-a-css-animation-with-vanilla-javascript 
                                                                      https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
                                                                      https://www.geeksforgeeks.org/html-dom-onclick-event/
                                                                      https://www.w3schools.com/jsref/prop_style_animationplaystate.asp
                                                                      https://www.w3schools.com/jsref/prop_style_animation.asp
*/


//// *Trigger CSS Animations * ///////
/* Done with inspiration from the code suggested by IvanD1M4 */


//Add the function of onclick calls fade() to every backwards and forward button.
const class_list = [];
class_list.push(document.getElementsByClassName("pre")); //Will store all the elements with the class names "pre" and "nxt".
class_list.push(document.getElementsByClassName("nxt"));

let number_of_classes = document.getElementsByClassName("pre").length + document.getElementsByClassName("nxt").length;

for (let i=0; i < class_list.length; i++){
    class_list[0][i].setAttribute("onclick","fade()"); //Pre
    class_list[1][i].setAttribute("onclick","fade()"); //Nxt
}

//Play the animation.
function fade(){
    const element = document.getElementById("the_container");
    element.style.animation = 'none'; // Reset the animation
    element.offsetHeight; // Animation restart
    element.style.animation = "fadeIn 0.25s";
}


function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = anchor.getAttribute('href').substring(1);
        smoothScroll(target);
      });
    });
  });