// Manejo del formulario de búsqueda
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que recargue la página localmente
    
    const query = document.getElementById('search-input').value.trim();
    
    if (query !== "") {
        // Redirecciona directamente a la búsqueda real de Google con el término del usuario
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Botón "Voy a tener suerte"
document.getElementById('btn-lucky').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim();
    
    if (query !== "") {
        // Redirecciona simulando el comportamiento de "I'm feeling lucky"
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
    } else {
        // Si está vacío, va a la sección de Google Doodles
        window.location.href = "https://www.google.com/doodles";
    }
});