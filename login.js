var a=0;
document.querySelectorAll(".change").forEach((element) => {
    element.addEventListener("click",()=>{
        console.log("clicked");
        a++;
        if(a%2==0){
            gsap.to("#register",{
                transform:'rotateY(-90deg)',
            });
            document.querySelector("#login").classList.remove("hidden")
            document.querySelector("#register").classList.add("hidden")
            gsap.from("#login",{
                transform:'rotateY(90deg)',
            });
        }
        else{
            gsap.to("#login",{
                transform:'rotateY(90deg)',
            });
            document.querySelector("#register").classList.remove("hidden")
            document.querySelector("#login").classList.add("hidden")
            gsap.from("#register",{
                transform:'rotateY(-90deg)',
            });
        }
    })
});