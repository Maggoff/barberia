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

vsOpts.$slides.each(function(i) {
  vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
    y: i * -1 * vsOpts.lineHeight,
    ease: Elastic.easeOut.config(1, 0.7)
  })
})
vSlide.play()