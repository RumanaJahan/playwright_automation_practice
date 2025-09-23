// utils/formValidation.js
export async function getValidationMessage(locator) {
  return await locator.evaluate(el => {
    el.reportValidity(); // trigger browser validation
    return el.validationMessage;
  });
}

//This helper function uses Playwright’s evaluate to run code inside the browser, 
// triggers the browser’s built-in validation with reportValidity(), 
// and then returns the validation message text via el.validationMessage. 
// It’s useful for testing native HTML5 form validation