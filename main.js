function headingAnimation(){
  gsap.from('.heading',{
      opacity:0,
      delay:0.5,
      duration:0.8,
      stagger:0.3,
      ease: "power1.inOut",
  })
}
headingAnimation()

function headingAnimation2(){
  gsap.from('.heading-2',{
      opacity:0,
      delay:0.4,
      duration:1,
      scrollTrigger:{
        trigger:'.heading-2',
      }
  })
}
headingAnimation2()



  