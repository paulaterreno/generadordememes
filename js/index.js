// window.onload = function() {
//     console.log("Pagina cargada por completo");}


// ------- E L E M E N T O S   D E L   D O M  ------- 

function $(elementos) {
    return document.querySelector(elementos)
}

//Elementos del Contenedor Meme
const $inputImg = $("#img-url")
const $imgMeme= $("#imgMeme")
const $secMemeContenedor = $(".meme-contenedor")
const $divImgInsertada = $(".img-insertada")
const $btnDescarga = $(".btn-descarga")

//Elementos del Controlador de Filtros
const $inputBrillo = $("#control-brillo")
const $inputOpacidad = $("#control-opacidad")
const $inputDesenfoque = $("#control-desenfoque")
const $inputContraste = $("#control-contraste")
const $inputEscalaGrises = $("#control-grises")
const $inputSepia = $("#control-sepia")
const $inputHue = $("#control-hue")
const $inputSaturacion = $("#control-saturacion")
const $inputNegativo = $("#control-negativo")
const $btnRestablecer = $(".btn-restablecer")


// ------- E V E N T O S   ------- 

//Evento para carga de imagen por medio de URL
 $inputImg.addEventListener("input", () => {
 $imgMeme.src = $inputImg.value
 });


//Eventos para controladores de filtros
$inputBrillo.addEventListener("input",() => {
    $divImgInsertada.style.filter = `brigthness(${$inputBrillo.value})`
})

$inputOpacidad.addEventListener("input",() => {
    $divImgInsertada.stye.filter = `opacity(${$inputOpacidad.value})`
})

$inputDesenfoque.addEventListener("input",() => {
    $divImgInsertada.style.filter = `blur(${$inputDesenfoque.value})`
})

$inputContraste.addEventListener("input",() => {
    $divImgInsertada.style.filtro = `contrast(${$inputContraste.value})`
})

$inputEscalaGrises.addEventListener("input",() => {
    $divImgInsertada.style.filter = `grayscale(${$inputEscalaGrises.value})`
})

$inputSepia.addEventListener("input",() => {
    $divImgInsertada.style.filtro = `sepia(${$inputSepia.value})`
})

$inputHue.addEventListener("input",() => {
    $divImgInsertada.style.filtro = `hue-rotation(${$inputHue.value})`
})

$inputNegativo.addEventListener("input",() => {
    $divImgInsertada.style.filtro = `negative(${$inputNegativo.value})`
})

//Funcion para restablecer filtros
function restablecerValores () {
    $inputBrillo.value = $inputBrillo.defaultValue; 
    $inputOpacidad.value = $inputOpacidad.defaultValue;
    $inputDesenfoque.value = $inputDesenfoque.defaultValue;
    $inputContraste.value = $inputContraste.defaultValue;
    $inputEscalaGrises.value = $inputEscalaGrises.defaultValue;
    $inputSepia.value = $inputSepia.defaultValue;
    $inputHue.value = $inputHue.defaultValue;
    $inputSaturacion.value = $inputSaturacion.defaultValue;
    $inputNegativo.value = $inputNegativo.defaultValue;
}

//Evento para el boton que restablece filtros
$btnRestablecer.addEventListener("click", (restablecerValores));


//Evento para descargar meme
$btnDescarga.addEventListener("click", (e) => {
    domtoimage.toBlob($secMemeContenedor).then((blob) => {
        saveAs(blob, "Mi Meme.png");
      }).catch((error)=> {console.log(error)});
})


