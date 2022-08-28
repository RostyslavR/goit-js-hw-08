import throttle from 'lodash.throttle';

const STORAGE_KEY_DATA = 'feedback-form-state';
const refForm = document.querySelector('.feedback-form');
let formData = {};

restoreFromStorage();
refForm.addEventListener('input', throttle(onFormInput, 500));
refForm.addEventListener('submit', onFormSubmit);

function restoreFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY_DATA);
  if (savedData) {
    formData = JSON.parse(savedData);
    restoreData(formData);
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  saveToStorage(formData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY_DATA)));
  localStorage.removeItem(STORAGE_KEY_DATA);
}

function saveToStorage(data) {
  localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
}

function restoreData(data) {
  for (let el in data) {
    document.querySelector(`[name='${el}']`).value = data[el];
  }
}
