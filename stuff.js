function checkValidity(e_id) {
    switch(e_id) {
        case 'cardholder':
            if (true) {
                return true
            }
        case 'cardnumber':
            if (true) {
                return true
            }
        case 'expdate-mm':
            if (true) {
                return true
            }
        case 'expdate-yy':
            if (true) {
                return true
            }
        case 'cvc':
            if (true) {
                return true
            }
    }
}

function writeToCreditCard(e) {

    switch(e.target.id) {
        case 'cardholder':
            if (checkValidity(e.target.id)) {
                let elem = document.getElementById('card-img-name');
                elem.innerHTML = e.target.value;
            }
            break
        case 'cardnumber':
            if (checkValidity(e.target.id)) {
                let elem = document.getElementById('card-img-number');
                let formattedNumber=e.target.value.match(/.{1,4}/g);
                elem.innerHTML = formattedNumber.join(' ');
            }
            break
        case 'expdate-mm':
            if (checkValidity(e.target.id)) {
                let elem = document.getElementById('card-img-mm');
                elem.innerHTML = e.target.value;
            }
            break
        case 'expdate-yy':
            if (checkValidity(e.target.id)) {
                let elem = document.getElementById('card-img-yy');
                elem.innerHTML = e.target.value;
            }
            break
        case 'cvc':
            if (checkValidity(e.target.id)) {
                let elem = document.getElementById('card-img-cvc');
                elem.innerHTML = e.target.value;
            }
            break
        default:
            console.log('---id not matched---')
    }
}

function submitForm() {
    console.log('submitted')
    let submitForm = document.getElementById('form')
    submitForm.classList.add('invisible')

    let successForm = document.getElementById('success-form')
    successForm.classList.remove('invisible')
}