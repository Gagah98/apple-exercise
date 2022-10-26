//FIXED INTRO

const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".front-page",
        pin:true,
        pinSpacing: false,
        start:"0%",
        end:"100%"
    }
})

//HIGHLIGHT ANIMATION

const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start:"-40%",
        end:"20%",
        scrub:true,
    }
})

tlH.fromTo(
    ".highlight-text p", 
    {color:"rgba(255, 255, 255, 0.4)"},
    {color:"rgba(255, 255, 255, 1)", stagger:1},
)

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start:"-20%",
        end:"40%",
        scrub:true,
    }
})

tlHRemove.to(".highlight-text p", {color:"rgba(255, 255, 255, 0.4)", stagger:1},

)

//Split Iphones

const tlIphone = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        scrub: true,
        start:"-20%",
        end:"20%"
    }
})

tlIphone.fromTo(
    ".large-phone-img", 
    {x:0}, 
    {x:-30},
    "<"
    )

tlIphone.fromTo(
    ".small-phone-img", 
    {x:0}, 
    {x:30},
    "<"
    )

tlIphone.fromTo(
    ".container-text-normal", 
    {x:0, opacity:0}, 
    {x:30, opacity:1},
    "<"
    )

    tlIphone.fromTo(
        ".container-text-pro", 
        {x:0, opacity:0}, 
        {x:-30, opacity:1},
        "<"
        );
        

//CARROUSEL

let slides = document.querySelectorAll(".phone-gallery-container");
let gallery = document.querySelector(".container-carrousel");
let swatches = document.querySelectorAll(".swatches img");

let currentSwatch = "blue";
let topIndex = 2;

gsap.set(".closeup-blue", {zIndex:topIndex});


swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left;
    console.log(coord)

    swatch.addEventListener("click", (e) =>{
        let swatchName = e.target.getAttribute("swatch");
        console.log(swatchName);
        let closupName = ".closeup-" + swatchName;

if(currentSwatch === swatchName) return;

        gsap.set(closupName, {zIndex:topIndex});
        gsap.fromTo(closupName, {opacity:0}, {opacity:1, duration:1});
        gsap.to(slides, {x:-coord, duration:1,  ease: Back.easeOut.config(1.1)})
        currentSwatch = swatchName;
        topIndex++;
    }
    
    )

})

//PAGE 5 video on scroll


const tlVideo = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-5",
        start:"0",
        end:"150%",
        scrub:true,
        pin:true,
    }
})

tlVideo.fromTo(".section-5 video", {currentTime:0}, {currentTime:3, duration:1});
tlVideo.fromTo(".argument-text", {opacity:0}, {opacity:1, duration:1, stagger:0.25});

//Section 6

const tlParallax = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-6",
        start:"-25%",
        end:"50%",
        scrub:true,
    }
})

tlParallax.fromTo('.last-section-img', {y:0}, {y:-80}, "<");
tlParallax.fromTo('.subtitle-last-section', {y:0}, {y:-30}, "<");
tlParallax.fromTo('.video-phone', {y:0}, {y:-300}, "<");