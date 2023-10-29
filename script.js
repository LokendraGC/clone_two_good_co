// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
//   duration:100
// });


function navbarAnimation(){
  
gsap.to(".nav_part1 svg", {
  transform: "translateY(-100%)",
  ScrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top 0",
    end: "top -5%",
    scrub: 4,
  },
});


}

// navbarAnimation();

gsap.to(".nav_2 .links", {
  transform: "translateY(-100%)",
  opacity: 0,
  ScrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top 0",
    end: "top -5%",
    scrub: 4,
    pin: true,
  },
});


function locoMotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

 

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


  ScrollTrigger.refresh();

}

locoMotiveAnimation();

function videoAnimation() {
  var videoCont = document.querySelector(".video_container");
  var plyBtn = document.querySelector("#play");

  videoCont.addEventListener("mouseenter", function () {
    gsap.to(plyBtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoCont.addEventListener("mouseleave", function () {
    gsap.to(plyBtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videoCont.addEventListener("mousemove", function (details) {
    console.log(details);
    gsap.to(plyBtn, {
      left: details.x,
      top: details.y,
    });
  });
}
videoAnimation();

function titleAnimation() {
  gsap.from(".page1 h1", {
    y: 90,
    opacity: 0,
    delay: 0.3,
    duration: 0.9,
    stagger: 0.3,
  });

  gsap.from(".page1 .video_container", {
    scale: 0.8,
    opacity: 0,
    delay: 1.5,
    duration: 0.9,
  });
}

titleAnimation();

// document.querySelector('#child1').addEventListener('mouseenter',function(){
//   gsap.to('.cursor',{
//       transform: 'translate(-50%,-50%) scale(1)'
//   })
// })

// document.querySelector('#child1').addEventListener('mouseleave',function(){
//   gsap.to('.cursor',{
//       transform: 'translate(-50%,-50%) scale(0)'
//   })
// })

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}

cursorAnimation();

// const element = document.querySelector('.details');
// const dets = document.querySelector('.parentd')

// element.addEventListener('mouseenter',()=>{
//         dets.style.opacity= 1;
// })
// element.addEventListener('mouseleave',()=>{
//         dets.style.opacity= 0;
// })