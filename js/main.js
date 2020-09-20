$(document).ready(function () {

  //Код для плавного скролу пунктів меню

  $("#menu, #logo").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 600);
  });

  //Код для анімації фраз

  let vsOpts = {
    $slides: $('.main__slide'),
    $list: $('.main__slides'),
    duration: 6,
    lineHeight: 74
  };

  let vSlide = new TimelineMax({
    paused: true,
    repeat: -1
  });

  vsOpts.$slides.each(function (i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
      y: i * -1 * vsOpts.lineHeight,
      ease: Elastic.easeOut.config(1, 0.7)
    })
  });
  vSlide.play();

  // Код для блоку послуг

  let id = document.getElementsByClassName("services__menu__item");
  let img = document.getElementById("services__info__img");
  let txt = document.getElementById("services__info__text");
  let oldI = 100;
  let oldFoto = id[0].getAttribute("data-img-second");
  img.src = id[0].getAttribute("data-img");
  txt.innerHTML = id[0].getAttribute("data-text");
  for (let i = 0; i < id.length; i++) {
    id[i].onmouseover = function (e) {
      if (oldI != i) {
        oldI = i;
        $('.services__info__img, .services__info__text').stop(true, true).animate({ opacity: 0 }, 800, function () {
          img.src = id[i].getAttribute("data-img");
          txt.innerHTML = id[i].getAttribute("data-text");
        });
        $('.services__info__img, .services__info__text').stop(true, true).animate({ opacity: 1 }, 800,);
      }
    }
    img.onmouseover = function (e) {
      if(oldI == 100){
        oldI = 0;
      }
      oldFoto = img.src;
      $('.services__info__img').stop(true, true).animate({ opacity: 0 }, 400, function () {
        img.src = id[oldI].getAttribute("data-img-second");
      })
      $('.services__info__img').stop(true, true).animate({ opacity: 1 }, 400)
    }
    img.onmouseleave = function (e) {
      $('.services__info__img').stop(true, true).animate({ opacity: 0 }, 400, function () {
        img.src = oldFoto
      })
      $('.services__info__img').stop(true, true).animate({ opacity: 1 }, 400)
    }
  }

  // Код для блоку стрижок

  let idHaircut = document.getElementsByClassName("haircuts__menu__item");
  let imgHaircut = document.getElementById("haircuts__info__img");
  let txtHaircut = document.getElementById("haircuts__info__text");
  let oldIHaircut = 100;
  let oldFotoHaircut = idHaircut[0].getAttribute("data-img-second");
  imgHaircut.src = idHaircut[0].getAttribute("data-img");
  txtHaircut.innerHTML = idHaircut[0].getAttribute("data-text");
  for (let i = 0; i < idHaircut.length; i++) {
    idHaircut[i].onmouseover = function (e) {
      if (oldIHaircut != i) {
        oldIHaircut = i;
        $('.haircuts__info__img, .haircuts__info__text').stop(true, true).animate({ opacity: 0 }, 800, function () {
          imgHaircut.src = idHaircut[i].getAttribute("data-img");
          txtHaircut.innerHTML = idHaircut[i].getAttribute("data-text");
        });
        $('.haircuts__info__img, .haircuts__info__text').stop(true, true).animate({ opacity: 1 }, 800,);
      }
    }
    imgHaircut.onmouseover = function (e) {
      if(oldIHaircut == 100){
        oldIHaircut = 0;
      }
      oldFotoHaircut = imgHaircut.src;
      $('.haircuts__info__img').stop(true, true).animate({ opacity: 0 }, 400, function () {
        imgHaircut.src = idHaircut[oldIHaircut].getAttribute("data-img-second");
      })
      $('.haircuts__info__img').stop(true, true).animate({ opacity: 1 }, 400)
    }
    imgHaircut.onmouseleave = function (e) {
      $('.haircuts__info__img').stop(true, true).animate({ opacity: 0 }, 400, function () {
        imgHaircut.src = oldFotoHaircut
      })
      $('.haircuts__info__img').stop(true, true).animate({ opacity: 1 }, 400)
    }
  }

  // Код для блоку бару

  let idBar = document.getElementsByClassName("bar__menu__item");
  let imgBar = document.getElementById("bar__info__img");
  let txtBar = document.getElementById("bar__info__text");
  let oldIBar = 100;
  let oldFotoBar = idBar[0].getAttribute("data-img-second");
  imgBar.src = idBar[0].getAttribute("data-img");
  txtBar.innerHTML = idBar[0].getAttribute("data-text");
  for (let i = 0; i < idBar.length; i++) {
    idBar[i].onmouseover = function (e) {
      if (oldIBar != i) {
        oldIBar = i;
        $('.bar__info__img, .bar__info__text').stop(true, true).animate({ opacity: 0 }, 800, function () {
          imgBar.src = idBar[i].getAttribute("data-img");
          txtBar.innerHTML = idBar[i].getAttribute("data-text");
        });
        $('.bar__info__img, .bar__info__text').stop(true, true).animate({ opacity: 1 }, 800,);
      }
    }
    imgBar.onmouseover = function (e) {
      if(oldIBar == 100){
        oldIBar = 0;
      }
      oldFotoBar = imgBar.src;
      $('.bar__info__img').stop(true, true).animate({ opacity: 0 }, 400, function () {
        imgBar.src = idBar[oldIBar].getAttribute("data-img-second");
      })
      $('.bar__info__img').stop(true, true).animate({ opacity: 1 }, 400)
    }
    imgBar.onmouseleave = function (e) {
      $('.bar__info__img').stop(true, true).animate({ opacity: 0 }, 400, function () {
        imgBar.src = oldFotoBar
      })
      $('.bar__info__img').stop(true, true).animate({ opacity: 1 }, 400)
    }
  }

  // Код для блоку команди

  $('.team__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slickPrev"></button>',
    nextArrow: '<button type="button" class="slickNext"></button>',
    focusOnSelect: true,
    swipe: true,
    // responsive: [
    //   {
    //     breakpoint: 1030,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       dots: true,
    //       centerPadding: '0px',
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     }
    //   }
    // ]
  });

  // Код для блоку Total Look

  $(function () {
    $("#totalLook__container").twentytwenty({
      default_offset_pct: 0.5,
      orientation: 'horizontal',
      no_overlay: true,
      move_with_handle_only: true,
      click_to_move: false
    });
  });

});