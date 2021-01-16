// stepper
let steps = document.querySelectorAll('.step')

for (const item of steps) {
    item.addEventListener('click', function() {
        steps.forEach(elem => {
            elem.classList.remove('active')
        })
        item.classList.add('active')
    })
}