$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass('sticky');
        }
        else{
            $(".navbar").removeClass('sticky');
        }
    })

    // toggle menu/nav bar script
    $('.menu-btn').click(function(){
        $(".navbar .menu").toggleClass("active");
    })

    // typing animation script 

    var typed =new Typed(".typing",{
        strings: ["Programmer","Developer","Coder","Creator"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    })

    var typed =new Typed(".typing-2",{
        strings: ["Programmer","Developer","Coder","Creator"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    })
})

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

// document.ready(function(){    
//     window.scroll(function(){        
//     if(this.scrollY > 20){            
//     document.getElementByClassName("navbar").classList.add("sticky");        
//     }        
//     else{            
//     document.getElementByClassName("navbar").classList.remove("sticky");        
//     }    
//     })        
//     document.getElementByClassName("menu-btn").click(function(){        
//         document.getElementByClassName("navbar menu").classList.toggle("active");    
//     })        
    
//     var typing  =new Typed(".typing",{        
//     strings: ["Programmer","Developer","Coder","Creator"],        
//     typeSpeed:100,        
//     backSpeed: 60,        
//     loop: true    
//     });
    
//     let typed =new Typed(".typing-2",{        
//     strings: ["","Programmer","Developer","Coder","Creator"],        
//     typeSpeed:100,        
//     backSpeed: 60,        
//     loop: true    
// })})