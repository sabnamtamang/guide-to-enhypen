var typed=new Typed(".namee",{
    strings:["ENHYPEN"],
    typeSpeed:200,
    backSpeed:200,
    loop:true,
})
function toggleTextColor() {
    var span = document.querySelector('#namee .namee');
    var currentColor = window.getComputedStyle(span).color;
    if (currentColor === 'rgb(21, 21, 62)') {
      span.style.color = 'rgb(201, 177, 41)';
    } else {
      span.style.color = 'rgb(21, 21, 62)';
    }
  }
  setInterval(toggleTextColor, 5000);
  ScrollReveal({
    duration:2000,
    delay:500,
  });
  ScrollReveal().reveal('.Acheivements ol li,.image,.intro .enhy,.intro .write ,.info,.social,#award tr,.app ol li,.articles ol li,.articles .public,.albums,.a1,.c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9',{
    delay:10,
    origin:'top',
  });