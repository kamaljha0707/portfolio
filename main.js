function headingAnimation(){
  gsap.from('.heading, .sub-heading ',{
      opacity:0,
      y:50,
      delay:0.3,
      duration:1,
  })
}
headingAnimation()

function paraAnimation(){
  gsap.from('#about div p',{
      opacity:0,
      y:50,
      delay:0.3,
      duration:1,
      stagger:0.3,
      scrollTrigger:{
        trigger:'#about',
        marker:true,
      }
  })
}
paraAnimation()

function quoteAnimation(){
  gsap.from('.quote',{
      opacity:0,
      y:50,
      delay:0.3,
      duration:1,
      stagger:0.3,
      scrollTrigger:{
        trigger:'.quote',
        marker:true,
      }
  })
}
quoteAnimation()



  