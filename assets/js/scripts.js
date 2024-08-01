
function mostrarTexto2() {
    let text1 = document.getElementById('text1')
    let text2 = document.getElementById('text2')

    text1.onmouseover = function() {
        text2.style.display = 'block';
    }
}

let caja2 = document.getElementById('caja2');
let pacMan = document.getElementById('pacMan');
let caja3 = document.getElementById('caja3');
let text3 = document.getElementById('text3');

caja2.onclick = function() {
    pacMan.style.width = '100%'
}

caja2.onmouseout = function() {
    pacMan.style.width = '20%'
}

window.onload = mostrarTexto2;

caja3.ondblclick = function() {
    text3.style.fontSize = 'x-large'
}