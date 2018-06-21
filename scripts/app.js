let rectangle = document.querySelector('.parallelogram')
let html = document.querySelector('html')
let content = document.querySelector('.content')

if (window.matchMedia("(min-width: 1000px)").matches) {
  /* La largeur minimum de l'affichage est 600 px inclus */
  html.addEventListener(
    'onload',
  setTimeout(function op() {
    let move = setInterval(myMove, 20)
    let marg = 120
    function myMove() {
      if (marg < 50) {
        clearInterval(move)
        opa = 0
        id = setInterval(opacity, 10)
        function opacity(){
        if (opa > 1) {
          clearInterval(id)
        }else {
            content.style.opacity = opa
            opa += 0.01
        }
        }
      }else {
        rectangle.style.margin="0 0 0 " + marg + "%"
        marg *= 0.9888
        console.log(marg)
      }
    }
  },10))

} else {
  /* L'affichage est inférieur à 600px de large */
}
