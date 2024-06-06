




var cur = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x +20+ "px"
    cur.style.top = dets.y + "px"
})

var curr = document.querySelector("#cur_blur")
document.addEventListener("mousemove",function(dets){
    curr.style.left = dets.x -150+ "px"
    curr.style.top = dets.y -150+ "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale = 3
        cur.style.border = "1px solid white"
        cur.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1
        cur.style.border = "0px solid #95C11E"
        cur.style.backgroundColor = "#95C11E"
    })
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -80%",
        scrub:2  
    }

})

// gasp.from("#about img,#us",{
//     y:50,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger:" #about",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 57%",
//         scrub:3
//     }
// })
// gasp.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:" .card",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 57%",
//         scrub:2
//     }
// })

