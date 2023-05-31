function updateText() {
    let textInput = document.getElementById('myTextarea');
    let editor = document.getElementById('textPost');
    editor.innerHTML = textInput.value;
}


//__modal open close__//


document.getElementById('modalBox').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
})

document.getElementById("closeModal").addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
})




//__changing Background Image__//


function changeBackground(imageUrl) {
    let resultDiv = document.getElementById('textPost');
    resultDiv.style.backgroundImage = "url('" + imageUrl + "')";
}

let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('images-change')) {
        let imageUrl = target.querySelector('.post-img').getAttribute('src');
        changeBackground(imageUrl)
    }

})


//__changing background color__//

function changeBackgroundColor() {
    let bgcolor = document.getElementById('color-input');
    let resultDiv = document.getElementById('textPost');
    resultDiv.style.backgroundColor = bgcolor.value;
}
