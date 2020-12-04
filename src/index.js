import './styles/main.scss';
import Scrollbar from 'smooth-scrollbar';
// import SplitText  from 'gsap/SplitText'

// const text = document.querySelector('.footer-text');
// import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

const scrollBar = document.querySelector('.scroller');

const bodyScrollBar = Scrollbar.init(scrollBar, {
  damping: .1,
  // delegateTo: document,
  alwaysShowTracks: true,
  // continuousScrolling:false
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




// const video = document.querySelector("video");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// /* Make sure the video is 'activated' on iOS */
// function once(el, event, fn, opts) {
//   var onceFn = function (e) {
//     el.removeEventListener(event, onceFn);
//     fn.apply(this, arguments);
//   };
//   el.addEventListener(event, onceFn, opts);
//   return onceFn;
// }

// once(document.documentElement, "touchstart", function (e) {
//   video.play();
//   video.pause();
// });

// /* ---------------------------------- */
// /* Scroll Control! */


// let tl = gsap.timeline({
//   defaults: {
//     duration: 1
//   },
//   scrollTrigger: {
//     trigger: '#intro',
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: true,
//     markers: true,
//   }
// });

// once(video, "loadedmetadata", () => {
//   tl.fromTo(
//     video, {
//       currentTime: 0
//     }, {
//       currentTime: video.duration || 1
//     }
//   );
// });

// /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
// setTimeout(function () {
//   if (window["fetch"]) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((response) => {
//         var blobURL = URL.createObjectURL(response);

//         var t = video.currentTime;
//         once(document.documentElement, "touchstart", function (e) {
//           video.play();
//           video.pause();
//         });

//         video.setAttribute("src", blobURL);
//         video.currentTime = t + 0.01;
//       });
//   }
// }, 1000);

// const underline=document.querySelector('.blue-underline');
// const anc =document.querySelector('.foo');
// let state=false;
// let tl =gsap.timeline({defaults:{ease:'power2.inOut'}});
// tl.to(underline,{opacity:1,translateX:0});
// tl.pause();
// anc.addEventListener('mouseover',()=>{
//   console.log('hoooo');
//  state=!state;
//  if(state? tl.play() : tl.restart());
// });
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
  y: -200,
  scale: 2,
  duration: 1,
  scrollTrigger:{
trigger: ".full-product-img",
start:"top top",
end:"center bottom",
scrub:1,
  } 
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

gsap.from(".play", {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: "#accessories",
    start: "top 80%",
    toggleActions: "restart pause play reverse",
  },
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
      // markers: true,
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


gsap.from("#play", {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: "#games",
    start: "top 80%",
    toggleActions: "restart pause play reverse",
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


let firstCards = gsap.timeline({
  defaults: {
    ease: 'power1.Out',
  }
}).from('.firstCards .card', {
  y: 500,
  stagger: .2
});

ScrollTrigger.create({
  trigger: ".firstCards",
  start: "top 95%",
  end: "top top+=100",
  toggleActions: "restart pause play reverse",
  scrub: true,
  animation: firstCards
});

let secondCards = gsap.timeline({
  defaults: {
    ease: 'power1.Out',
  }
}).from('.secondCards .card', {
  y: 500,
  stagger: .2
})

ScrollTrigger.create({
  trigger: ".secondCards",
  start: "top center",
  end: "top top+=100",
  toggleActions: "restart pause play reverse",
  scrub: true,
  animation: secondCards
});

let thirdCards = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.Out',
  }
}).from('.thirdCards .card', {
  y: 400,
  stagger: .2
})

ScrollTrigger.create({
  trigger: ".thirdCards",
  start: "top 40%",
  end: "top 100",
  toggleActions: "restart pause play reverse",
  // markers:true,
  scrub: true,
  animation: thirdCards
})

let footer = gsap.timeline({
  defaults: {
    ease: 'back',
    scrollTrigger: {
      trigger: ".footer-content",
      start: "top bottom",
      end: "top top",
      // markers:true,
      scrub: true,
    }
  }
});


footer.from("#footer-text", {
  scale: 0,
  transformOrigin: "center"
}).from(".footer-content a", {
  y: 40,
})