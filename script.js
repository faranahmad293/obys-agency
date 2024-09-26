// gsap.from(".line h1",{
//     y:150,
//     stagger:0.25, // ek ek karke ata h isse 
//     duration:0.6,
//     delay:0.5
// })

function loaderAnimation(){
    var tl = gsap.timeline()

    tl.from(".line h1",{
        y:150,
        stagger:0.25, // ek ek karke ata h isse 
        duration:0.6,
        delay:0.5
    })
    tl.from("#line-part1, .line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line-part1 h5")
    
            var grow = 0
    
    
    
            setInterval(function(){
        
                if(grow<100){
            
                    grow++
           
                    h5timer.innerHTML = grow++
       
                }
       
                else{
            
                    h5timer.innerHTML = grow
       
                }
    
            },35)
    
        
        }
    });
    
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:2.7
    });
    
    tl.from("#page1",{
        delay:0.2,
        y:1600,
        duration:0.6,
        ease:Power4,
        duration:0.5
    });;
    
    tl.to("#loader",{
        display:"none"
    });
    tl.from("#nav",{
        opacity:0
        
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
        y:120,
        stagger:0.2
    })

}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}

loaderAnimation();
cursorAnimation();