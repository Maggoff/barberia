$(document).ready(function () {

  let vsOpts = {
    $slides: $('.main__slide'),
    $list: $('.main__slides'),
    duration: 6,
    lineHeight: 74
  }

  let vSlide = new TimelineMax({
    paused: true,
    repeat: -1
  })

  vsOpts.$slides.each(function (i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
      y: i * -1 * vsOpts.lineHeight,
      ease: Elastic.easeOut.config(1, 0.7)
    })
  })
  vSlide.play()

  let onPause = false;

  $('.callToAction__right__video').on('click', function () {
    if (onPause === false) {
      document.getElementsByTagName("video")[0].pause();
      onPause = true;
    } else {
      document.getElementsByTagName("video")[0].play();
      onPause = false;
    }
  });

  let id = document.getElementsByClassName("services__menu__item");
  let img = document.getElementById("services__info__img");
  let txt = document.getElementById("services__info__text");
  for (let i = 0; i < id.length; i++) {
    id[i].onmouseover = function (e) {
      img.src = id[i].getAttribute("data-img");
      txt.innerHTML = id[i].getAttribute("data-text");
    }
  }

});