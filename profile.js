

document.querySelector("#user-queued").addEventListener("click",()=>{
    document.querySelectorAll(".queued").forEach((ele)=>{
        ele.classList.remove("hidden");
    })
    document.querySelectorAll(".solved").forEach((ele)=>{
        ele.classList.add("hidden");
    })
    document.querySelector("#user-solved").classList.remove("active");
    document.querySelector("#user-queued").classList.add("active");
})

document.querySelector("#user-solved").addEventListener("click",()=>{
    document.querySelectorAll(".queued").forEach((ele)=>{
        ele.classList.add("hidden");
    })
    document.querySelectorAll(".solved").forEach((ele)=>{
        ele.classList.remove("hidden");
    })
    document.querySelector("#user-queued").classList.remove("active");
    document.querySelector("#user-solved").classList.add("active");
})