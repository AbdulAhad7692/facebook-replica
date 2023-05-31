function updateText() {
    var textInput = document.getElementById('myTextarea');
    var editor = document.getElementById('textPost');
    editor.innerHTML = textInput.value;
}

document.getElementById('modalBox').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
})

document.getElementById("closeModal").addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
})