const form = document.getElementById('form')

form.onsubmit = e => {
    e.preventDefault()
    window.location.href = './materias/index.html'
}