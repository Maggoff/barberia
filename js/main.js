$(document).ready(function () {

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

  let id = document.getElementsByClassName("services__menu__item");
  let img = document.getElementById("services__info__img");
  let txt = document.getElementById("services__info__text");
  let oldI = 100;
  // let oldFoto = img.src;
  // img.src = id[0].getAttribute("data-img");
  // txt.innerHTML = id[0].getAttribute("data-text");
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
    // img.onmouseover = function (e) {
    //   oldFoto = img.src;
    //   $('.services__info__img').animate({ opacity: 0 }, 200, function () {
    //     img.src = id[oldI].getAttribute("data-img-second");
    //   })
    //   $('.services__info__img').animate({ opacity: 1 }, 200)
    // }
    // img.onmouseleave = function (e) {
    //   $('.services__info__img').animate({ opacity: 0 }, 200, function () {
    //     img.src = oldFoto
    //   })
    //   $('.services__info__img').animate({ opacity: 1 }, 200)
    // }
  }

  let idBar = document.getElementsByClassName("bar");
  let imgBar = document.getElementById("bar__info__img");
  let txtBar = document.getElementById("bar__info__text");
  let oldIBar = 100;
  for (let i = 0; i < idBar.length; i++) {
    idBar[i].onmouseover = function (e) {
      if (oldIBar != i) {
        oldIBar = i;
        $('.services__info__img, .services__info__text').stop(true, true).animate({ opacity: 0 }, 800, function () {
          imgBar.src = idBar[i].getAttribute("data-img");
          txtBar.innerHTML = idBar[i].getAttribute("data-text");
        });
        $('.services__info__img, .services__info__text').stop(true, true).animate({ opacity: 1 }, 800,);
      }
    }
  }

  let idHaircut = document.getElementsByClassName("haircut");
  let imgHaircut = document.getElementById("haircuts__info__img");
  let txtHaircut = document.getElementById("haircuts__info__text");
  let oldIHaircut = 100;
  for (let i = 0; i < idHaircut.length; i++) {
    idHaircut[i].onmouseover = function (e) {
      if (oldIHaircut != i) {
        oldIHaircut = i;
        $('.services__info__img, .services__info__text').stop(true, true).animate({ opacity: 0 }, 800, function () {
          imgHaircut.src = idHaircut[i].getAttribute("data-img");
          txtHaircut.innerHTML = idHaircut[i].getAttribute("data-text");
        });
        $('.services__info__img, .services__info__text').stop(true, true).animate({ opacity: 1 }, 800,);
      }
    }
  }

});