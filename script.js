document.getElementById("serviceslink").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("servicescroll").scrollIntoView({behavior: "smooth"});
})

document.getElementById("contactlink").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("footerlink").scrollIntoView({behavior: "smooth"});
})

document.getElementById("talkid").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("footerlink").scrollIntoView({behavior: "smooth"});
})

document.getElementById("teamlink").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("teamheading").scrollIntoView({behavior: "smooth"});
})

document.getElementById("ourworklink").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("clients-").scrollIntoView({behavior: "smooth"});
})