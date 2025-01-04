const feedbackForm = document.querySelector('.js-feedback-form');
//form data
let formData = {
  email: '',
  message: '',
};
// utilities for LS operations with data
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const loadFromLocalStorage = key => {
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : null;
};
const removeFromLocalStorage = key => {
  localStorage.removeItem(key);
};
//get data from LS
const fillFormFields = () => {
  try {
    const formDataFromLs = loadFromLocalStorage('feedback-form-state');
    if (formDataFromLs === null) {
      return;
    }
    formData = formDataFromLs;

    for (let key in formDataFromLs) {
      feedbackForm.elements[key].value = formDataFromLs[key];
    }
  } catch (err) {
    console.log(err);
  }
};
//call the function to get data from LS
fillFormFields();
//set changes to LS
const onFormFieldChange = event => {
  const { target: formElement } = event;
  let fieldValue = formElement.value;
  let fieldName = formElement.name;
  formData[fieldName] = fieldValue;

  saveToLocalStorage('feedback-form-state', formData);
  console.log(formData);
};
//submit form and reset it
const onFormSubmit = event => {
  event.preventDefault();
  const { currentTarget: formEl } = event;
  //check if fields are filled
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }
  formEl.reset();
  removeFromLocalStorage('feedback-form-state');
};
//handlers for form
feedbackForm.addEventListener('change', onFormFieldChange);
feedbackForm.addEventListener('submit', onFormSubmit);
