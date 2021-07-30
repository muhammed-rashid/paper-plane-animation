const flightPath = {
    curviness:1.25,
    autoRotate:true,
    values:[
        {x:100,y:-20},{x:210,y:30},{x:630,y:-50},{x:1220,y:60},{x:1380,y:300},{x:window.innerWidth,y:-40}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane',1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
)

// .add(TweenLite.to('.paper-plane',1,{
//     width:'300px',
// }))

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement : '.animation',
    duration : 5000,
    triggerHook :0,
}).setTween(tween)
.addIndicators()
.addTo(controller)
.setPin('.animation')