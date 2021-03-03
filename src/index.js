import './styles/main.scss';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

const scrollBar = document.querySelector('.scroller');

// setting the smooth scroller 
const bodyScrollBar = Scrollbar.init(scrollBar, {
  damping: .5,
  alwaysShowTracks: true,
});

ScrollTrigger.scrollerProxy('.scroller', {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
      bodyScrollBar.scrollleft = 0;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults()

//---------------section #hero -------------------//
gsap.from('.logo', {
  opacity: 0,
  duration: 1.5,
  delay: 1
})

const hero = gsap.timeline({
  defaults: {
    repeatDelay: 10
  }
})
hero.from('.icons', {
  scale: 0,
  delay: 2,
  stagger: .2,
  ease: "back",
  repeat: -1
});
hero.from(".par", {
  x: -100,
  stagger: .2,
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1
}, "-=.3");

gsap.from('.full-product-img', {
  y: -500,
  scale: 2,
  duration: 1,
  scrollTrigger: {
    trigger: ".full-product-img",
    start: "top top",
    end: "center bottom",
    scrub: true,
  }
});

//---------------section #Accessories -------------------//
gsap.from("#acceesories-heading", {
  y: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#accessories",
    start: "top 80%",
    toggleActions: "restart pause play reverse",
  },
});

let controller = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".controller",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      scrub: 1,
    }
  }
});

controller.from(".controller-move", {
    x: 400,
    scrollTrigger: {
      trigger: ".controller",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".controller .content", {
    y: -400,
    scrollTrigger: {
      trigger: ".controller",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".headset-move", {
    x: -400,
    scrollTrigger: {
      trigger: ".headset",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".headset .content", {
    y: 400,
    scrollTrigger: {
      trigger: ".headset",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  })
  .from(".remote-move", {
    duration: 4,
    scale: 0,
    transformOrigin: "bottom",
    scrollTrigger: {
      trigger: ".remote",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      scrub: 1
    }
  }).from(".remote .content", {
    y: 400,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".remote",
      start: "top bottom",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".camera-move", {
    scale: .2,
    scrollTrigger: {
      trigger: ".camera",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".camera .content", {
    x: 400,
    duration: .5,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".camera",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".charger-move", {
    x: 400,
    scrollTrigger: {
      trigger: ".duble-controller",
      start: "top bottom",
      end: "top center",
      toggleActions: "restart pause restart ",
      // markers: true,
      scrub: 1
    }
  }).from(".duble-controller .content", {
    x: -400,
    scrollTrigger: {
      trigger: ".duble-controller",
      start: "top center",
      end: "top center",
      toggleActions: "restart pause restart",
      // markers: true,
      scrub: 1
    }
  })

//---------------section #Games -------------------//
gsap.from("#games-heading", {
  y: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: "#games",
    start: "top 90%",
    end:"top top",
    toggleActions: "restart pause play reverse",
    // markers: true,
    scrub: true
  },
});

gsap.from('#games .blue-line', {
  width: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#games .blue-line",
    start: "top 90%",
    toggleActions: "restart pause play reverse",
    scrub: true,
  },
});

let cards = gsap.timeline({
  defaults: {
    ease: 'power3.inOut',
  }
})

cards.from('#games .card', {
  y: 150,
  stagger:.3,
  scrollTrigger: {
    trigger: "#games",
    start: "top 98%",
    end:"bottom bottom",
    toggleActions: "restart pause play reverse",
    scrub: true,
  }
})


let footer = gsap.timeline({
  defaults: {
    ease: 'back',
    scrollTrigger: {
      trigger: ".footer-content",
      start: "top bottom",
      end: "top top",
      scrub: true,
    }
  }
});

//---------------section #Footer-------------------//

footer.from("#footer-text", {
  scale: 0,
  transformOrigin: "center"
}).from(".footer-content a", {
  y: 40,
})