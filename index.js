//   M O D A L      //

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    if(!validateInputs()){
        e.preventDefault();
    } else {
        document.getElementById("content").innerHTML = (
            "Meno: " + document.querySelector('#firstName').value + "<br />" +
            "Priezvisko: " + document.querySelector('#surname').value + "<br />" +
            "Email : " + document.querySelector('#email').value + "<br />" +
            "Produkt: " + document.querySelector('#produkt').value + "<br />" +
            "Hmotnosť: " + document.querySelector('#prichut').value + "<br />" + "<br />" +
            "Cena na zaplatenie : " + total + "€"
        );
        modal.style.display = "block";
    }

}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-------------------------------------------------------------------//

const checkbox = document.querySelector('#prispevok');
const typebox = document.querySelector('#typebox');
typebox.style.visibility = 'hidden';

checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        typebox.style.visibility = 'visible';
        typebox.value = '';
    } else {
        typebox.style.visibility = 'hidden';
    }
});

//----------------------------------------------------------------//

var produkt = document.getElementById("produkt");
var prichut = document.getElementById("prichut");
var hmotnost = document.getElementById("hmotnost");

let produktPrice = 10;
let prichutPrice = 1;
let hmotnostPrice = 0.7;
let total = produktPrice * prichutPrice * hmotnostPrice;

document.getElementById("p1").innerHTML = "Cena: " + 0 + "€";
produkt.addEventListener("change", function() {
    
    produktPrice = parseFloat(produkt.value);
    total = produktPrice * prichutPrice;
    document.getElementById("p1").innerHTML = "Cena: " + total.toPrecision(4) + "€";
});

prichut.addEventListener("change", function() {
    prichutPrice = parseFloat(prichut.value);
    total = produktPrice * prichutPrice;
    document.getElementById("p1").innerHTML = "Cena: " + total.toPrecision(4) + "€";

});
hmotnost.addEventListener("change", function() {
    hmotnostPrice = parseFloat(hmotnost.value);
    total = produktPrice * prichutPrice *hmotnostPrice;
    document.getElementById("p1").innerHTML = "Cena: " + total.toPrecision(4) + "€";

});


//-------------------------------------------------------------//

const dependsOnMaleValue = document.querySelector('#dependsOnMale');
const dependsOnFemaleValue = document.querySelector('#dependsOnFemale');
const dependsOnOtherValue = document.querySelector('#dependsOnOther');

dependsOnMaleValue.style.visibility = 'hidden';
dependsOnFemaleValue.style.visibility = 'hidden';
dependsOnOtherValue.style.visibility = 'hidden';


var radios = document.querySelectorAll('input[type=radio][name="Pohlavie"]');
radios.forEach(
    radio => radio.addEventListener('change', () => {
    //alert(radio.id)
    if(radio.id === 'male'){ 
        //alert("Porovnanie funfuje");
        dependsOnMaleValue.style.visibility = 'visible';
        dependsOnFemaleValue.style.visibility = 'hidden';
        dependsOnOtherValue.style.visibility = 'hidden';
        dependsOnFemaleValue.value = '';
        dependsOnOtherValue.value = '';
    } else if(radio.id === 'female'){ 
        //alert("zena");
        dependsOnMaleValue.style.visibility = 'hidden';
        dependsOnFemaleValue.style.visibility = 'visible';
        dependsOnOtherValue.style.visibility = 'hidden';
        dependsOnMaleValue.value = '';
        dependsOnOtherValue.value = '';
    } else if(radio.id === 'other'){
        //alert("Ine");
        dependsOnMaleValue.style.visibility = 'hidden';
        dependsOnFemaleValue.style.visibility = 'hidden';
        dependsOnOtherValue.style.visibility = 'visible';
        dependsOnMaleValue.value = '';
        dependsOnFemaleValue.value = '';
    } else {
        dependsOnMaleValue.style.visibility = 'hidden';
        dependsOnFemaleValue.style.visibility = 'hidden';
        dependsOnOtherValue.style.visibility = 'hidden';
        dependsOnMaleValue.value = '';
        dependsOnFemaleValue.value = '';
        dependsOnOtherValue.value = '';
    };
        
    }));

//-------------------------------------------------//
      // V A L I D A T I O N //

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const number = document.getElementById('number');
const date = document.getElementById('date');
const email = document.getElementById('email');
var submitedAge;

// form.addEventListener('button', e => {
//     if(!validateInputs()){
//         e.preventDefault();
//     }

// });

const setError = (element, messnumber) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = messnumber;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const surnameValue = surname.value.trim();
    const numberValue = number.value.trim();
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();
    let checkName = false;
    let checkSurname = false;
    let checkNumber = false;
    let checkDate = false;
    let checkEmail = false;

    // setSuccess(firstName);
    // setSuccess(surname);
    // setSuccess(number);
    // setSuccess(date);
    // setSuccess(email);
 
    if(firstNameValue === '') {
        setError(firstName, 'Potrebné vyplniť meno');
        checkName = false;
    } else {
        setSuccess(firstName);
        checkName = true;
    }

    if(surnameValue === '') {
        setError(surname, 'Potrebné vyplniť Priezvisko');
        checkSurname = false;
    } else {
        setSuccess(surname);
        checkSurname = true;
    }

    if(dateValue === '') {
        setError(date, 'Potrebné vyplniť Dátum Narodenia');
        checkDate = false;
    } else {
        setSuccess(date);
        checkDate = true;
    }

    
    if(numberValue === '') {
        setError(number, 'Potrebné zadať Vek');
        checkNumber = false;
    } else if (numberValue < 1 || numberValue > 99) {
        setError(number, 'Vek musí byť v rozmedzí 1-99');
        checkNumber = false;
    } else if (dateValue === '') {
        setError(number, 'Najskôr je potrebné zadať dátum narodenia');
        checkNumber = false;
    } else {
        submitedAge = submitBirthday(dateValue);
        if (submitedAge != numberValue) {
            setError(number, 'Podľa dátumu narodenia máš ' + submitedAge + ' rokov!');
            checkNumber = false;
        } else {
            setSuccess(number);
            checkNumber = true;
        }
    }
    

    if(emailValue === '') {
        setError(email, 'Potrebné vyplniť email');
        checkEmail = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Zadali ste adresu v nesprávnom tvare');
        checkEmail = false;
    } else {
        setSuccess(email);
        checkEmail = true;
    }
    
    if(checkName && checkSurname && checkDate && checkNumber && checkEmail){
        return true;
    } else { 
        return false;
    } 

};

function submitBirthday(myNum) {
    var today = new Date();
    var birthDate = new Date(myNum);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

