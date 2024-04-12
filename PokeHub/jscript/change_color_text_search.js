$(document).ready(function() {
    // This function is executed when the document is ready
    $('#searchInput').on('input', function() {
        // This event listener triggers when the input value changes
        if ($(this).val().trim() !== '') {
            // If the input value is not empty after trimming whitespace
            $(this).removeClass('gray-text').addClass('black-text'); // Add class for black text if there is text
        } else {
            // If the input value is empty after trimming whitespace
            $(this).removeClass('black-text').addClass('gray-text'); // Add class for gray text if there is no text
        }
    });
});
