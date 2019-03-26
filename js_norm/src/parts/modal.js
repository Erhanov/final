function modal() {
  let more = document.querySelector('.more'),
      descr_btn = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  let showModal = () => {
    overlay.style.display = 'block';
    overlay.classList.add('.more-splash');
    document.body.style.overflow = 'hidden';
  };

  more.addEventListener('click', () => {
    showModal();
  });
  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('.more-splash');
    document.body.style.overflow = '';
  });
  descr_btn.forEach(function (item, i, arr) {
    item.addEventListener('click', () => {
      showModal();
    });
  }); //form

  let message = {
    loading: 'Loading',
    success: 'Everything is Fine',
    failure: 'Smth got wrong'
  };
  let form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  let SendForm = (event, form) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);
    request.send(json);
    let promise = new Promise(function (resolve, reject) {
      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          resolve();
        } else if (request.readyState == 4 && request.status == 200) {
          resolve();
        } else {
          reject();
        }
      });
    });
    return promise;
  };

  let clearInput = () => {
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  };

  let inputControl = input => {
    let firstDigit = input.value.charCodeAt(0);

    if (firstDigit > 57 || firstDigit < 42) {
      input.value = '';
    }

    let secondDigit = input.value.charCodeAt(1);

    if (secondDigit > 57 || secondDigit < 48) {
      input.value = '+';
    }

    console.log(firstDigit);
  };

  form.addEventListener('submit', function (event) {
    SendForm(event, form).then(() => statusMessage.innerHTML = message.loading).then(() => statusMessage.innerHTML = message.success).catch(() => statusMessage.innerHTML = message.failure).then(clearInput());
  });
  let modalInput = document.querySelector('.popup-form__input');
  console.log(modalInput);
  modalInput.addEventListener('input', function () {
    inputControl(modalInput);
  });
  let contactForm = document.querySelector('.formContact');
  contactForm.addEventListener('submit', function (event) {
    SendForm(event, contactForm).then(() => statusMessage.innerHTML = message.loading).then(() => statusMessage.innerHTML = message.success).catch(() => statusMessage.innerHTML = message.failure).then(clearInput());
  });
  let contactInput = document.querySelector('.contact-input');
  console.log(contactInput);
  contactInput.addEventListener('input', function () {
    inputControl(contactInput);
  });
}

module.exports = modal;