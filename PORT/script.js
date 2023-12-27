var tl = gsap.timeline()

tl.from('nav',{
    opacity:0,
    delay:0.3
})


tl.from('nav h1,nav h4,nav h3',{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})

tl.from('#left h1',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.4 // use to element aek pachi aek ave
})

tl.from('#right img',{
    scale:0.2,
    opacity:0,
    duration:0.5
})

var tl=gsap.timeline()
// main note agr niche no code tame pachi lagvso to nai chale

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector('#loader h1').innerHTML=a+"%"
        }
        else{
            a=100
            document.querySelector('#loader h1').innerHTML=a+"%"
        }
    },100)
}
// time()

tl.to('#loader h1',{
    scale:0.8,
    delay:0.3,
    duration:0.9,
    onStart:time()
})

tl.to('#loader',{
    top:'-100vh',
    delay:0.5,
    duration:0.8
})
