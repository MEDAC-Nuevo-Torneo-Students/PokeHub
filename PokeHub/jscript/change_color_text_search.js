$(document).ready(function() {
    $('#searchInput').on('input', function() {
        if ($(this).val().trim() !== '') {
            $(this).removeClass('gray-text').addClass('black-text'); // Agregar clase para texto negro si hay texto
        } else {
            $(this).removeClass('black-text').addClass('gray-text'); // Agregar clase para texto gris si no hay texto
        }
    });
});