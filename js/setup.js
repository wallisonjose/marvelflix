function filmesPopup(id){
    return{
        id,
        abrirJanela(){
            let janela = document.querySelector(id)
            janela.style.display = 'block'
            janela.style.animationName = 'transicao-in'
            janela.style.animationDuration = '1s'
        },
        fecharJanela(){
            let janela = document.querySelector(id)
            janela.style.animationName = 'transicao-out'
            janela.style.animationDuration = '1.5s'
            setTimeout(() => janela.style.display = 'none', 1000)
        }
    }
}

const trailer = 'https://www.youtube.com/watch?v=idU-bx2x1a8'
const btn = document.querySelector('btn-trailer')

function abrirTrailer(){
  let win = window.open(trailer, '_blank')
  win.focus() 
}

let filme1 = filmesPopup('#f1')
let filme2 = filmesPopup('#f2')
let filme3 = filmesPopup('#f3')
let filme4 = filmesPopup('#f4')
let filme5 = filmesPopup('#f5')
let filme6 = filmesPopup('#f6')
let filme7 = filmesPopup('#f7')
let filme8 = filmesPopup('#f8')
let filme9 = filmesPopup('#f9')
let filme10 = filmesPopup('#f10')
let filme11 = filmesPopup('#f11')
let filme12 = filmesPopup('#f12')
