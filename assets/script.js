let tl = gsap.timeline();
tl.to('.banner-bg-img,.scale-to-one', {
        scale: 1,
        duration: 1,
        delay: 0.8
    })
    .to('.clip-h-0 h1,.clip-h-0 h5,.clip-h-0 h2,.clip-h-0 h,.clip-h-0 p', {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        y: 0,
        stagger: .2,
        duration: 1,
        delay: 0.3
    }, "-=2.3")

  
    $('.mySwiper').slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        //autoplay: true,
       // autoplaySpeed: 2000,
        dots: true
    });
    $('.video-slide').slick({
      slidesToShow: 2, 
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
  });

  
  
  $('.slide-four,.pop-icon-slide').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    dots: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

$('.slide-feature').slick({
  slidesToShow: 3, 
  slidesToScroll: 1,
  dots: true,
  responsive: [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

$('.swiper-wrapper').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});


    // assignment of variables
    const click = document.querySelector(".side-tab-wrap");
    const clickAll = document.querySelectorAll(".side-tab-wrap ul li a");
    const imgStatus = document.querySelectorAll(".img-status");
    const src = document.querySelectorAll(".fun-img-lft");

    // click.addEventListener("click",e=>{
    //   e.preventDefault();

    //   if(!e.target.matches("a")) return;
    //   const trg = e.target;
    //   //remove all tab class
    //   clickAll.forEach(clickedClassAllLinks => clickedClassAllLinks.classList.remove("active"));
    //   //add active class on clicked tab
    //   trg.classList.add("active");

    //   //match attributes
    //   const ID = e.target.attributes.id.value;
    //   const matchedID = Array.from(imgStatus).find(matching => matching.dataset.img === ID);
    //   //remove all active class from image
    //   Array.from(src).forEach(removeClassAll => {  removeClassAll.classList.remove("active")});
    //   // add active classs of matched id
    //   matchedID.closest(".fun-img-lft").classList.add("active");
    // });


    $(".side-tab-wrap a").click(function(e){
      e.preventDefault(); 
      $(".side-tab-wrap a").removeClass("active");
      $(this).addClass("active");
      const ts = $(this).attr("id") 
      $(".fun-img-lft").removeClass("active");
      $(".img-status").each((e,val)=>{ 
         if($(val).attr("data-img") === ts) {
           $(val).parent(".fun-img-lft").addClass("active")
         }
      });
    })



    // click.addEventListener("click", e=>{
    //   e.preventDefault();
    //   //remove and add class on tab
    //   clickAll.forEach(e => e.classList.remove("active"))
    //   e.target.classList.add("active");
    //   // find and match clicked value
    //   const clickId = e.target.attributes.id.value;
    //   const checkedVal = Array.from(imgStatus).find(e=>{
    //     const attrList = e.dataset.img; 
    //     return attrList == clickId;
    //   });
    //   //remove all active class
    //   Array.from(checkedVal.closest('.top-parent-img').children).forEach(e=>{
    //     e.classList.remove("active")
    //   });
    //   // add active class
    //   checkedVal.closest('.div-init').classList.add("active");
    // })
