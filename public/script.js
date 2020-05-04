function onOff(){
    document
    .querySelector('#modal')
    .classList
    .toggle('hide')


document
    .querySelector('body')
    .classList
    .toggle('hideScroll')

    document.querySelector('#modal')
    .classList
    .toggle('addScroll')
}

function ckeckFields(event) {
    const valuesToCheck = [
        'title',
        'image',
        'category',
        'decription',
        'link',
    ]
    const isEmpty = valuesToCheck.find(function(value){
        const checkIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
       
        if (checkIsString && checkIfIsEmpty){
            return true
        }
    })

    if (isEmpty){
        event.preventDefault()
        alert('Por favor preencha todos os campos')
    }
}

