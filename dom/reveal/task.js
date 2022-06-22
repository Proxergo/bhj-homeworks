const revealObj = document.querySelectorAll('.reveal');

const  whereOurReveal = () => {
    for (const reveal of revealObj) {
        if (reveal) {
          const top = reveal.getBoundingClientRect().top;
          if (top < window.innerHeight) {
            reveal.classList.add('reveal_active');
          } else {
            reveal.classList.remove('reveal_active');
          }
        }
    }
}

document.addEventListener('scroll', whereOurReveal);