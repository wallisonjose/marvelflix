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

let filme1 = filmesPopup('#f1')
let filme2 = filmesPopup('#f2')
let filme3 = filmesPopup('#f3')
let filme4 = filmesPopup('#f4')
let filme5 = filmesPopup('#f5')
let filme6 = filmesPopup('#f6')
