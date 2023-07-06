var imagenes = ['/Images/Rosalia/r1.png', '/Images/Rosalia/r2.png', '/Images/Rosalia/r3.png', '/Images/Rosalia/r4.png', '/Images/Rosalia/r5.png', '/Images/Rosalia/r6.png', '/Images/Rosalia/r7.png']
cont = 0

function carrousel(galeria1) {
    galeria1.addEventListener('click', e => {
        let atras = galeria1.querySelector('.atras'),
            adelante = galeria1.querySelector('.adelante'),
            img = galeria1.querySelector('img'),
            tgt = e.target

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1]
                cont--
            } else {
                img.src = imagenes[imagenes.length - 1]
                cont = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1]
                cont++
            } else {
                img.src = imagenes[0]
                cont = 0
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let galeria1 = document.querySelector('.galeria1')

    carrousel(galeria1)
})

const automaticoItems = document.querySelector('.automaticoItems')

let maxScrollLeft = automaticoItems.scrollWidth - automaticoItems.clientWidth
let intervalo = null
let step = 1

const start = () => {
    intervalo = setInterval(function () {
        automaticoItems.scrollLeft = automaticoItems.scrollLeft + step
        if (automaticoItems.scrollLeft === maxScrollLeft) {
            step = step * - 1
        } else if (automaticoItems.scrollLeft === 0) {
            step = step * - 1}
    }, 10)
    }

    const stop = () => {
        clearInterval(intervalo)
    }

    automaticoItems.addEventListener('mouseover', () =>{
        stop()
    })

    automaticoItems.addEventListener('mouseout', () =>{
        start()
    })


    start()

    function PlayAudio() {
        document.getElementById("musica").play()
    }
