function updateText() {
    let userInput = document.getElementById('textInput').value;
    
    // Get all elements with the 'font-preview' class
    let previews = document.querySelectorAll('.font-preview');

    // Loop through each preview and update the text
    previews.forEach(function(preview) {
        // If there's user input, use it; otherwise, use the default text (from data-font-name)
        let defaultText = preview.getAttribute('data-font-name');
        preview.innerText = userInput || defaultText;
    });
}
