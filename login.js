var a=0;
document.querySelectorAll(".change").forEach((element) => {
    element.addEventListener("click",()=>{
        console.log("clicked");
        a++;
        if(a%2==0){
            gsap.to(".register",{
                transform:'rotateY(90deg)',
            });
            gsap.to(".login",{
                cssText: 'z-index:1',
            });
            gsap.from(".login",{
                transform:'rotateY(-90deg)',
            });
            gsap.to(".register",{
                cssText: 'z-index:-1',
            });
        }
        else{
            gsap.to(".login",{
                transform:'rotateY(90deg)',
            });
            gsap.to(".register",{
                cssText: 'z-index:1',
            });
            gsap.from(".register",{
                transform:'rotateY(-90deg)',
            });
            gsap.to(".login",{
                cssText: 'z-index:-1',
            });
        }
    })
});