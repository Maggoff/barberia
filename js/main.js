$(document).ready(function () {

  //Код для плавного скролу пунктів меню

  $("#logo").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 600);

    let x = document.getElementById("links");
    x.classList.remove("show");
    let header = document.getElementById("header");
    header.classList.remove("header__max");
    document.body.classList.remove("body__overflow");
  });

  $("#menu").on("click", "a", function (event) {
    let btn = document.getElementById("header-burger");
    let btnStyle = getComputedStyle(btn);
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top - 60;

    if (btnStyle.display === "none") {
      $('body,html').animate({ scrollTop: top }, 600);
    } else {
      setTimeout(scroll, 800);
    }

    let x = document.getElementById("links");
    x.classList.toggle("show");
    let header = document.getElementById("header");
    header.classList.toggle("header__max");
    document.body.classList.remove("body__overflow");

    function scroll() {
      $('body,html').animate({ scrollTop: top }, 600);
    };
  });

  //Код для анімації фраз

  let heightOpts;
  if (screen.width >= 992) {
    heightOpts = 74;
  }
  if (screen.width <= 991) {
    heightOpts = 112;
  }

  let vsOpts = {
    $slides: $('.main__slide'),
    $list: $('.main__slides'),
    duration: 6,
    lineHeight: heightOpts
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

  //Код для svg стрілок

  $('img.img__svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  //Код для слайдера в блоку з відео

  $('.callToAction__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
    swipe: true,
  });

  // Код для блоку послуг

  let id = document.getElementsByClassName("services__item");
  let imgLeft = document.getElementById("services__info__img__left");
  let imgRight = document.getElementById("services__info__img__right");
  let txt = document.getElementById("services__info__text");
  let oldI = 100;
  imgLeft.src = id[0].getAttribute("data-img");
  imgRight.src = id[0].getAttribute("data-img-second");
  txt.innerHTML = id[0].getAttribute("data-text");
  for (let i = 0; i < id.length; i++) {
    $(id[i]).hover(function () {
      if (oldI != i) {
        if (oldI != 100) {
          id[oldI].classList.remove('active');
        }
        oldI = i;
        id[i].classList.add('active');
        $("#services__info__img__left, #services__info__img__right").finish().animate({ opacity: 0 }, 200, function () {
          imgLeft.src = id[i].getAttribute("data-img");
          imgRight.src = id[i].getAttribute("data-img-second");
        });
        $("#services__info__img__left, #services__info__img__right").animate({ opacity: 1 }, 200);
      }
    });
  }

  // Код для блоку стрижок

  let idHaircut = document.getElementsByClassName("haircuts__item");
  let imgHaircut = document.getElementById("haircuts__info__img");
  let txtHaircut = document.getElementById("haircuts__info__text");
  let oldIHaircut = 100;
  let oldFotoHaircut = idHaircut[0].getAttribute("data-img-second");
  imgHaircut.src = idHaircut[0].getAttribute("data-img");
  txtHaircut.innerHTML = idHaircut[0].getAttribute("data-text");
  for (let i = 0; i < idHaircut.length; i++) {
    $(idHaircut[i]).hover(function () {
      if (oldIHaircut != i) {
        oldIHaircut = i;
        $('#haircuts__info__img, #haircuts__info__text').finish().animate({ opacity: 0 }, 200, function () {
          imgHaircut.src = idHaircut[i].getAttribute("data-img");
          txtHaircut.innerHTML = idHaircut[i].getAttribute("data-text");
        });
        $('#haircuts__info__img, #haircuts__info__text').animate({ opacity: 1 }, 200);
      }
    });
    imgHaircut.onmouseover = function (e) {
      if (oldIHaircut == 100) {
        oldIHaircut = 0;
      }
      $('#haircuts__info__img').finish().animate({ opacity: 0 }, 200, function () {
        oldFotoHaircut = imgHaircut.src;
        imgHaircut.src = idHaircut[oldIHaircut].getAttribute("data-img-second");
      })
      $('#haircuts__info__img').animate({ opacity: 1 }, 200)
    }
    imgHaircut.onmouseleave = function (e) {
      $('#haircuts__info__img').finish().animate({ opacity: 0 }, 200, function () {
        imgHaircut.src = oldFotoHaircut
      })
      $('#haircuts__info__img').animate({ opacity: 1 }, 200)
    }
  }

  // Код для блоку бару

  let idBar = document.getElementsByClassName("bar__item");
  let imgBar = document.getElementById("bar__info__img");
  let txtBar = document.getElementById("bar__info__text");
  let oldIBar = 100;
  let oldFotoBar = idBar[0].getAttribute("data-img-second");
  imgBar.src = idBar[0].getAttribute("data-img");
  txtBar.innerHTML = idBar[0].getAttribute("data-text");
  for (let i = 0; i < idBar.length; i++) {
    $(idBar[i]).hover(function () {
      if (oldIBar != i) {
        oldIBar = i;
        $('#bar__info__img, #bar__info__text').finish().animate({ opacity: 0 }, 200, function () {
          imgBar.src = idBar[i].getAttribute("data-img");
          txtBar.innerHTML = idBar[i].getAttribute("data-text");
        });
        $('#bar__info__img, #bar__info__text').animate({ opacity: 1 }, 200);
      }
    });
    imgBar.onmouseover = function (e) {
      if (oldIBar == 100) {
        oldIBar = 0;
      }
      $('#bar__info__img').finish().animate({ opacity: 0 }, 200, function () {
        oldFotoBar = imgBar.src;
        imgBar.src = idBar[oldIBar].getAttribute("data-img-second");
      })
      $('#bar__info__img').animate({ opacity: 1 }, 200)
    }
    imgBar.onmouseleave = function (e) {
      $('#bar__info__img').finish().animate({ opacity: 0 }, 200, function () {
        imgBar.src = oldFotoBar;
      })
      $('#bar__info__img').animate({ opacity: 1 }, 200)
    }
  }

  // Код для блоку послуг, стрижок і бару мобільної версії

  $('.showcaseMob__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slickPrevMob"></button>',
    nextArrow: '<button type="button" class="slickNextMob"></button>',
    focusOnSelect: true,
    swipe: false,
  });

  // let imgServicesMob = document.getElementsByClassName("servicesMob");
  // let oldFotoServicesMob = imgServicesMob[0].getAttribute("data-img-second");
  // for (let i = 0; i < imgServicesMob.length; i++) {
  //   $(imgServicesMob[i]).hover(function () {
  //     $(imgServicesMob[i]).finish().animate({ opacity: 0 }, 200, function () {
  //       oldFotoServicesMob = imgServicesMob[i].src;
  //       imgServicesMob[i].src = imgServicesMob[i].getAttribute("data-img-second");
  //     })
  //     $(imgServicesMob[i]).animate({ opacity: 1 }, 200)
  //   }, function () {
  //     $(imgServicesMob[i]).finish().animate({ opacity: 0 }, 200, function () {
  //       imgServicesMob[i].src = oldFotoServicesMob;
  //     })
  //     $(imgServicesMob[i]).animate({ opacity: 1 }, 200)
  //   });
  // }

  let imgHaircutsMob = document.getElementsByClassName("haircutsMob");
  let oldFotoHaircutsMob = imgHaircutsMob[0].getAttribute("data-img-second");
  for (let i = 0; i < imgHaircutsMob.length; i++) {
    $(imgHaircutsMob[i]).hover(function () {
      $(imgHaircutsMob[i]).finish().animate({ opacity: 0 }, 200, function () {
        oldFotoHaircutsMob = imgHaircutsMob[i].src;
        imgHaircutsMob[i].src = imgHaircutsMob[i].getAttribute("data-img-second");
      })
      $(imgHaircutsMob[i]).animate({ opacity: 1 }, 200)
    }, function () {
      $(imgHaircutsMob[i]).finish().animate({ opacity: 0 }, 200, function () {
        imgHaircutsMob[i].src = oldFotoHaircutsMob;
      })
      $(imgHaircutsMob[i]).animate({ opacity: 1 }, 200)
    });
  }

  let imgBarMob = document.getElementsByClassName("barMob");
  let oldFotoBarMob = imgBarMob[0].getAttribute("data-img-second");
  for (let i = 0; i < imgBarMob.length; i++) {
    $(imgBarMob[i]).hover(function () {
      $(imgBarMob[i]).finish().animate({ opacity: 0 }, 200, function () {
        oldFotoBarMob = imgBarMob[i].src;
        imgBarMob[i].src = imgBarMob[i].getAttribute("data-img-second");
      })
      $(imgBarMob[i]).animate({ opacity: 1 }, 200)
    }, function () {
      $(imgBarMob[i]).finish().animate({ opacity: 0 }, 200, function () {
        imgBarMob[i].src = oldFotoBarMob;
      })
      $(imgBarMob[i]).animate({ opacity: 1 }, 200)
    });
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
    dots: true,
  });

  let idTeam = document.getElementsByClassName("team__item__img");
  let oldFotoTeam;
  for (let i = 0; i < idTeam.length; i++) {
    idTeam[i].onmouseover = function (e) {
      oldFotoTeam = idTeam[i].src;
      $('.team__item__img').finish().animate({ opacity: 0 }, 200, function () {
        idTeam[i].src = idTeam[i].getAttribute("data-img-second");
      });
      $('.team__item__img').animate({ opacity: 1 }, 200);
    }
    idTeam[i].onmouseleave = function (e) {
      $('.team__item__img').finish().animate({ opacity: 0 }, 200, function () {
        idTeam[i].src = oldFotoTeam;
      })
      $('.team__item__img').animate({ opacity: 1 }, 200)
    }
  }


  let idDotsGalery = document.getElementsByClassName("slick-dots");
  let galeryHeight = document.getElementsByClassName("team__galery");
  let idTeamGalery = document.getElementsByClassName("team__galery__foto");
  galeryHeight = getComputedStyle(galeryHeight[0]);

  console.log(galeryHeight.height);
  idDotsGalery[0].style.height = galeryHeight.height;
  idDotsGalery[0].style.top = '-' + galeryHeight.height;
  idDotsGalery = idDotsGalery[0].children;

  for (let i = 0; i < idDotsGalery.length; i++) {
    idDotsGalery[i].onmouseover = function (e) {
      idTeamGalery[i].classList.add("galery__hover");
    }
    idDotsGalery[i].onmouseleave = function (e) {
      idTeamGalery[i].classList.remove("galery__hover");
    }
  }

  // Код для блоку Total Look

  $(function () {
    $("#totalLook__container, .showcase__info__container").twentytwenty({
      default_offset_pct: 0.5,
      orientation: 'horizontal',
      no_overlay: true,
      move_with_handle_only: true,
      click_to_move: false
    });
  });

  $('.review__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slickPrevReview"><svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.654747 21.0977L19.1559 39.5477C19.7621 40.1518 20.7435 40.1508 21.3487 39.5445C21.9533 38.9384 21.9518 37.9564 21.3455 37.3518L3.94559 19.9999L21.3462 2.64813C21.9523 2.04345 21.9539 1.06212 21.3493 0.455875C21.0459 0.15197 20.6485 1.52588e-05 20.2511 1.52588e-05C19.8547 1.52588e-05 19.4588 0.150955 19.156 0.452751L0.654747 18.9023C0.362795 19.1928 0.198967 19.5881 0.198967 19.9999C0.198967 20.4118 0.363264 20.8067 0.654747 21.0977Z" fill="#B6CFE4"/></svg></button>',
    nextArrow: '<button type="button" class="slickNextReview"><svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3453 18.9023L2.84407 0.452333C2.2379 -0.151805 1.2565 -0.150789 0.651348 0.455458C0.0466627 1.06163 0.0482252 2.04358 0.654473 2.64818L18.0544 20.0001L0.653848 37.3519C0.0476781 37.9566 0.0461155 38.9379 0.650723 39.5441C0.954081 39.848 1.3515 40 1.74892 40C2.14533 40 2.54118 39.849 2.844 39.5472L21.3453 21.0977C21.6372 20.8072 21.801 20.4119 21.801 20.0001C21.801 19.5882 21.6367 19.1933 21.3453 18.9023Z" fill="#B6CFE4"/></svg></button>',
    focusOnSelect: true,
    swipe: true,
    infinite: false,
  });

});

function myFunction() {
  let x = document.getElementById("links");
  x.classList.toggle("show");
  let header = document.getElementById("header");
  header.classList.toggle("header__max");
  document.body.classList.toggle("body__overflow");
}