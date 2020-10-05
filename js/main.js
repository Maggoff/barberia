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
      top = $(id).offset().top;

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
  let oldFoto = id[0].getAttribute("data-img-second");
  imgLeft.src = id[0].getAttribute("data-img");
  imgRight.src = id[0].getAttribute("data-img-second");
  txt.innerHTML = id[0].getAttribute("data-text");
  for (let i = 0; i < id.length; i++) {
    $(id[i]).hover(function () {
      if (oldI != i) {
        oldI = i;
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
    swipe: true,
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

  if (screen.width <= 991) {
    console.log(galeryHeight.height);
    idDotsGalery[0].style.height = galeryHeight.height;
    idDotsGalery[0].style.top = '-' + galeryHeight.height;
  }
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

});

function myFunction() {
  let x = document.getElementById("links");
  x.classList.toggle("show");
  let header = document.getElementById("header");
  header.classList.toggle("header__max");
  document.body.classList.toggle("body__overflow");
}