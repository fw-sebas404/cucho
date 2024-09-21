let backgrounds = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
    'url("4.jpg")',
    'url("5.jpg")',
    'url("6.jpg")',
    'url("8.jpg")',
    'url("9.jpg")',
    'url("10.jpg")',
    'url("11.jpg")'
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

function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
}

function searchScratch() {
    const query = document.getElementById('searchInput').value;
    const formattedQuery = encodeURIComponent(query);
    const url = `https://scratch.mit.edu/search/projects?q=${formattedQuery}`;
    window.open(url, '_blank');
    closeSearchModal(); // Cierra el modal después de buscar
}

// Para cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('searchModal');
    if (event.target === modal) {
        closeSearchModal();
    }
}
