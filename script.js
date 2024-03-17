function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotive()

tl = gsap.timeline()

tl.from("nav>a",{
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: .05
},"a")

tl.from(".page1>.top>.left>h1",{
    x: -100,
    opacity: 0,
    duration: 1
},"a")

tl.from(".page1>.top>.left .circle",{
    scale: 0,
    x: -100,
    opacity: 0,
    duration: 1
},"a")

tl.from(".page1>.top>.left .circle>img",{
    rotate: 360,
    opacity: 0,
    duration: 1
},"a")

tl.from(".page1>.top>.right",{
    x: 100,
    opacity: 0,
    duration: 1
},"a")

tl.from(".page1>.top>.right>.bottom>.right>.circle",{
    // scale: 0,
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: .1
},"a")


tl.from(".page1>.bottom",{
    scale: 0.8,
    opacity: 0,
    duration: 1
},"a")

tl.from(".page2>.top>.up>.box",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page2>.top>.up>.box",
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page2>.top>.down",{
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page2>.top>.down>.scrolling-wrap",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page2>.bottom>.up>.box, .page2>.bottom>.up>.box1, .page2>.bottom>.up>.box2",{
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page2>.bottom>.up",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page2>.bottom>.down>.box",{
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page2>.bottom>.down",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page3>.left>.up>.box",{
    x: -150,
    scale: .8,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page3>.left>.up",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page3>.left>.down>.box:nth-child(1)",{
    y: 150,
    scale: .8,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page3>.left>.down",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page3>.left>.down>.box:nth-child(2)",{
    x: 150,
    scale: .8,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page3>.left>.down",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page3>.right>.up>h1, .page3>.right>.up>p",{
    x: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page3>.right>.up",
        start: "top 90%",
        end: "bottom 120%",
        // markers: true,
        // scrub: .1
    }
})

tl.from(".page3>.right>.down>.box",{
    y: 150,
    scale: .8,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page3>.right>.down",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page4>.top>.box",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page4>.top>.box",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page4>.bottom>.box:nth-child(1)>.up",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page4>.bottom>.box>.up",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page4>.bottom>.box:nth-child(1)>.down",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page4>.bottom>.box>.down",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page4>.bottom>.box:nth-child(2)>.up",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page4>.bottom>.box:nth-child(2)>.up",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page4>.bottom>.box:nth-child(2)>.down",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page4>.bottom>.box:nth-child(2)>.down",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page5>.left>.box",{
    y: 100,
    opacity: 0,
    scale: .8,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page5>.left>.box",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1,
    }
},"a")

tl.from(".page5>.right>h1, .page5>.right>p, .page5>.right>button",{
    x: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.ease,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page5>.right",
        start: "top 90%",
        end: "bottom 150%",
        // markers: true,
        // scrub: .1,
    }
},"a")





tl.from(".page6>.up>.box",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page6>.up>.box",
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page6>.down",{
    x: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page6>.down",
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page7>.box",{
    y: 150,
    opacity: 0,
    scale: (.7),
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page7>.box",
        start: "top 90%",
        end: "bottom 140%",
        // markers: true,
        // scrub: .1
    }
},"a")


tl.from(".page8>.left>h1, .page8>.left>h2, .page8>.left>p, .page8>.left>.bottom>.box",{
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page8>.left>h1",
        start: "top 90%",
        end: "bottom 140%",
        // markers: true,
        // scrub: .1
    }
},"a")

tl.from(".page8>.right>.box>a>h3, .page8>.right>.box>a>h4",{
    x: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        scroller: ".main",
        trigger: ".page8>.right>.box",
        start: "top 90%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .1
    }
},"a")



