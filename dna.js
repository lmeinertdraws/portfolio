$('body').scrollspy({
  target: '#navbar',
  offset: 50
});

document.getElementById("fade-in").children[0].className += " load";

document.getElementById("fade-in").children[1].className += " load";

document.getElementById("fade-in").children[2].className += " load";

window.onscroll=function(){changeMenu()}

function changeMenu()
{
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    // At specifiv position do what you want 
    if(scrollBarPosition > 700) {
      document.getElementById('navbar').classList.add('navbar-inverse');
    }
    else {
      document.getElementById('navbar').classList.remove('navbar-inverse');
    }
}

document.getElementById("middle").onHover.classList.add('text-center');
























