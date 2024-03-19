const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//let matriz [ [e = enter],[i = imes],[a = ai],[o = ober],[u = ufat] ];

function btnEncriptar(){
    const textoEncritado = encriptar(textArea.value);
    mensaje.value = textoEncritado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";


}

function encriptar(stringEncritada) {
    let matriz = [ ["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"] ];
    stringEncritada = stringEncritada.toLowerCase()

    for (let i = 0; i < matriz.length; i++) {
        if(stringEncritada.includes(matriz[i][0])){
            stringEncritada = stringEncritada.replaceAll(matriz[i][0], matriz[i][1])
        }
        
    }
    return stringEncritada;
}
function btnDesencriptar(){
    const textoDesencritado = desencriptar(textArea.value);
    mensaje.value = textoDesencritado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function desencriptar(stringDesencritada) {
    let matriz2 = [ ["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"] ];
    stringDesencritada = stringDesencritada.toLowerCase()

    for (let i = 0; i < matriz2.length; i++) {
        if(stringDesencritada.includes(matriz2[i][0])){
            stringDesencritada = stringDesencritada.replaceAll(matriz2[i][0], matriz2[i][1])
        }
        
    }
    return stringDesencritada;
}

async function btnCopiar() {
    // Selecciona el contenido del área de texto
mensaje.select();
// Copia el contenido al portapapeles
await navigator.clipboard.writeText(mensaje.value);
// Opcional: Puedes mostrar un mensaje de éxito o realizar otras acciones después de copiar

}

function autoResize() {
const textarea1 = document.getElementById('text-area');
const textarea2 = document.getElementById('mensaje');

// Verificar el ancho de la pantalla
if (window.innerWidth < 1366){

textarea1.style.height = 'auto'; // Restaurar la altura predeterminada
textarea1.style.height = textarea1.scrollHeight + 'px'; // Ajustar la altura según el contenido


textarea2.style.height = 'auto'; // Restaurar la altura predeterminada
textarea2.style.height = textarea2.scrollHeight + 'px'; // Ajustar la altura según el contenido
textarea2.style.backgroundImage = "none";
}

}


