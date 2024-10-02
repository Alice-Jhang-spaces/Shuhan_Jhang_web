// Regex patterns for validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern.edu$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const zipRegex = /^\d{5}$/;

// Form elements
const form = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');

// Input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailId = document.getElementById('emailId');
const phoneNumber = document.getElementById('phoneNumber');
const zipcode = document.getElementById('zipcode');
const address = document.getElementById('address');
const streetAddress2 = document.getElementById('streetAddress2');
const comments = document.getElementById('comments');
const drinks = document.getElementById('drinks');
const howDidYouHear = document.querySelectorAll('input[name="source"]');

// Error message elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const zipcodeError = document.getElementById('zipcodeError');
const addressError = document.getElementById('addressError');
const commentsError = document.getElementById('commentsError');
const drinkError = document.getElementById('drinkError');
const sourceError = document.getElementById('sourceError');

// Dynamic elements for drink options
const drinkOptionsDiv = document.getElementById('drinkOptions');

// Event listeners for validation
form.addEventListener('input', validateForm);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    displayResults();
    form.reset();
    submitBtn.disabled = true;

    // Clear dynamic drink options after submit
    drinkOptionsDiv.innerHTML = "";
    drinks.selectedIndex = 0;
    drinkError.style.display = 'none';
    sourceError.style.display = 'none';
});

// onChange event handler for the drink dropdown
function handleDrinkChange() {
    drinkOptionsDiv.innerHTML = "";
    drinkError.style.display = 'none';

    if (drinks.value) {
        drinkOptionsDiv.innerHTML = `
            <input type="checkbox" id="largeDrink" name="largeDrink" />
            <label for="largeDrink">Large drink (75¢ extra)</label>
            <br>
        `;
        const largeDrinkCheckbox = document.getElementById('largeDrink');
        largeDrinkCheckbox.addEventListener('change', function () {
            if (largeDrinkCheckbox.checked) {
                drinkOptionsDiv.innerHTML += `
                    <br>
                    <label for="extraDetails">Extra Details:</label>
                    <input type="text" id="extraDetails" name="extraDetails" placeholder="Specify details"/>
                `;
            } else {
                const extraDetailsField = document.getElementById('extraDetails');
                if (extraDetailsField) {
                    extraDetailsField.remove();
                }
            }
        });
    }
}

function validateForm() {
    let isValid = true;

    // First name validation
    if (!firstName.value || firstName.value.length < 2 || firstName.value.length > 50 || !/^[a-zA-Z]+$/.test(firstName.value)) {
        firstNameError.textContent = "First name is required and must be 2-50 characters (alphanumeric).";
        isValid = false;
    } else {
        firstNameError.textContent = "";
    }

    // Last name validation
    if (!lastName.value || lastName.value.length < 2 || lastName.value.length > 50 || !/^[a-zA-Z]+$/.test(lastName.value)) {
        lastNameError.textContent = "Last name is required and must be 2-50 characters (alphanumeric).";
        isValid = false;
    } else {
        lastNameError.textContent = "";
    }

    // Email validation
    if (!emailRegex.test(emailId.value)) {
        emailError.textContent = "Must be a valid @northeastern.edu email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone number validation
    if (!phoneRegex.test(phoneNumber.value)) {
        phoneError.textContent = "Invalid phone number (xxx-xxx-xxxx).";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Zipcode validation
    if (!zipRegex.test(zipcode.value)) {
        zipcodeError.textContent = "Invalid zipcode (5 digits).";
        isValid = false;
    } else {
        zipcodeError.textContent = "";
    }

    // Address validation
    if (!address.value || address.value.length < 5 || address.value.length > 100) {
        addressError.textContent = "Address is required and must be 5-100 characters.";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    // "How did you hear" validation
    const isSourceSelected = Array.from(howDidYouHear).some(checkbox => checkbox.checked);
    if (!isSourceSelected) {
        sourceError.textContent = "Please select at least one source.";
        sourceError.style.display = 'block';
        isValid = false;
    } else {
        sourceError.style.display = 'none';
    }

    // Comments validation
    if (!comments.value) {
        commentsError.textContent = "Comments are required.";
        isValid = false;
    } else {
        commentsError.textContent = "";
    }

    // Drink selection validation
    if (!drinks.value) {
        drinkError.textContent = "Please select a drink.";
        drinkError.style.display = 'block';
        isValid = false;
    } else {
        drinkError.style.display = 'none';
    }

    // Enable/Disable submit button
    submitBtn.disabled = !isValid;
}

// Display the form data in a table
function displayResults() {
    const resultsDiv = document.getElementById('results');
    const extraDetails = document.getElementById('extraDetails') ? document.getElementById('extraDetails').value : "N/A";
    const largeDrinkChecked = document.getElementById('largeDrink') ? document.getElementById('largeDrink').checked : false;
    const streetAddress2Value = streetAddress2.value || ""; // Handle blank optional field

    const resultsTable = `
        <table>
            <tr><td>First Name</td><td>${firstName.value}</td></tr>
            <tr><td>Last Name</td><td>${lastName.value}</td></tr>
            <tr><td>Email</td><td>${emailId.value}</td></tr>
            <tr><td>Phone Number</td><td>${phoneNumber.value}</td></tr>
            <tr><td>Address</td><td>${address.value}</td></tr>
            <tr><td>Street Address 2</td><td>${streetAddress2Value}</td></tr>
            <tr><td>Zip Code</td><td>${zipcode.value}</td></tr>
            <tr><td>Comments</td><td>${comments.value}</td></tr>
            <tr><td>Drink</td><td>${drinks.value}</td></tr>
            <tr><td>Large Drink</td><td>${largeDrinkChecked ? 'Yes (75¢ extra)' : 'No'}</td></tr>
            <tr><td>Extra Details</td><td>${extraDetails}</td></tr>
        </table>
    `;
    resultsDiv.innerHTML = resultsTable;
}
