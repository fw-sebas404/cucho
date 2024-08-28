let backgrounds = [
    'url("fondo1.jpg")',
    'url("fondo2.jpg")',
    'url("fondo3.jpg")',
    'url("fondo4.jpg")',
    'url("fondo5.jpg")',
    'url("fondo6.jpg")',
    'url("fondo8.jpg")',
    'url("fondo9.jpg")',
    'url("fondo10.jpg")',
    'url("fondo11.jpg")'
    // Puedes seguir agregando más fondos aquí
];

let currentBackgroundIndex = 0;

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length; // Avanza al siguiente fondo de manera cíclica
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex]; // Cambia el fondo
}

function openApp(url) {
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña
}

function openAddressBar() {
    let url = prompt("Ingrese la dirección a la que desea ir:");
    if (url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }
        window.location.href = url; // Redirige a la URL ingresada
    }
}

