function updateText() {
    let userInput = document.getElementById('textInput').value;
    let previews = document.querySelectorAll('.font-preview');
    previews.forEach(function(preview) {
        let defaultText = preview.getAttribute('data-font-name');
        preview.innerText = userInput || defaultText;
    });
}
