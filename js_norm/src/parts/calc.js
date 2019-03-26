function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function () {
    if (isNaN(persons.value.charCodeAt(0))) {
      persons.value = '';
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
  restDays.addEventListener('input', function () {
    if (isNaN(restDays.value.charCodeAt(0))) {
      restDays.value = '';
    }
  });
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;
    console.log(place.options[place.selectedIndex].value);
    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;

    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
}

module.exports = calc;