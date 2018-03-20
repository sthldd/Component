start()
$(window).on('scroll', function () {
  start()
})
function start() {
  $('.container img').not('[data-isloaded]').each(function () {
    var $node = $(this)
    if (isShow($node)) {
      setTimeout(function () {
        loadedImg($node)
      }, 1500)
    }
  })
}
function isShow($node) {
  return $node.offset().top <= $(window).height() + $(window).scrollTop()
}

function loadedImg($img) {
  $img.attr('src', $img.attr('data-src'))
  $img.attr('data-isloaded', true)
}
