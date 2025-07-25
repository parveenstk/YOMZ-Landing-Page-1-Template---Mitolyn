// form elements
const form = document.getElementById('cancellation-form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');
const orderId = document.getElementById('order-id');
const commentBox = document.getElementById('comments-input');
const successMess = document.getElementById('successfull-message');

const regexPatterns = {
    'full-name': {
        regex: /^[a-zA-ZÀ-ÿ' -]{2,50}$/,
        clean: /[^a-zA-ZÀ-ÿ' -]/g,
        error: "Please enter a valid name."
    },

    'email-address': {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        clean: /[^a-zA-Z0-9@._%+-]/g,
        error: "Please enter a valid email address."
    },

    'phone-number': {
        regex: /^\d{10,15}$/,
        clean: /[^\d]/g,
        error: "Please enter a valid phone number (10–15 digits)."
    },

    'order-id': {
        regex: /^[a-zA-Z0-9#$\[\]]+$/,
        clean: /[^a-zA-Z0-9#$\[\]]/g,
        error: "Please see on the invoice."
    },
};

// Everything will work properly after load
document.addEventListener('DOMContentLoaded', function () {

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fields = [fullName, email, phoneNumber, orderId];
        let invalid = false; // Track if there's at least one empty input

        for (let field of fields) {
            const errorSpanId = `${field.id}-error`;
            const errorSpan = document.getElementById(errorSpanId);

            if (!field.value.trim()) {
                invalid = true;
                if (errorSpan) {
                    errorSpan.textContent = regexPatterns[field.id].error;
                    errorSpan.classList.remove('hide');
                    field.classList.add('is-invalid');
                }
            } else {
                invalid = false;
                if (errorSpan) {
                    errorSpan.textContent = '';
                    errorSpan.classList.add('hide');
                    field.classList.remove('is-invalid');
                }
            }
        };

        // If any field had an error, do NOT submit
        if (invalid) {
            for (let field of fields) {
                if (field.value.length === 0) {
                    console.log(`⚠️ Please fill ${field.id} field.`)
                } else {
                    console.log(`✅ ${field.id} : ${field.value}`);
                }
            }
            return
        };

        console.log("✅ : Form is submitted successfully. ");
        successMess.classList.remove('hide');
        hideMessage();

        // Store data in local storage
        const cancelSubsData = {
            fullName: fullName.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            orderId: orderId.value,
            commentBox: commentBox.value
        };

        // Saved value in localStorage
        window.localStorage.setItem('CancelSubsData', JSON.stringify(cancelSubsData));
        const cancelDetails = window.localStorage.getItem('CancelSubsData');
        console.log('cancelDetails:', JSON.parse(cancelDetails));
        updateSheet(cancelDetails);

        // Reset form values
        resetValue();

        for (let field of fields) {
            field.classList.remove('is-valid');
        }
    });

    // hanlde Input Change
    [fullName, email, phoneNumber, orderId, commentBox].forEach(input => {
        input.addEventListener('input', handleChange)
    })
});

// checking value while input
const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    const pattern = regexPatterns[name];

    if (pattern) {
        // Clean unwanted characters (e.g., letters in phone)
        const cleanedValue = value.replace(pattern.clean, '');

        // Update input field to show cleaned value
        e.target.value = cleanedValue;

        const errorElement = document.getElementById(`${name}-error`);
        const outputElement = document.getElementById(name);

        // Validate final cleaned value
        const isValid = pattern.regex.test(cleanedValue);

        if (!isValid) {

            if (errorElement) {
                errorElement.textContent = pattern.error;
                errorElement.classList.remove('hide');
                outputElement.classList.remove('is-valid');
                outputElement.classList.add('is-invalid');
            }
        } else {
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.add('hide');
                outputElement.classList.add('is-valid');
                outputElement.classList.remove('is-invalid');
            }
        }

        // Always update the display value
        if (outputElement) {
            outputElement.innerText = cleanedValue;
        }
    }
};

// Reset value of inputs
const resetValue = () => {
    fullName.value = '';
    email.value = '';
    phoneNumber.value = '';
    orderId.value = '';
    commentBox.value = '';
};

const hideMessage = () => {
    setTimeout(() => {
        successMess.classList.add('hide')
    }, 4000)
};

// Call API to save data in excel sheet
const updateSheet = async (formData) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        formData: formData,
        sheetName: "Funnel Page - 1",
        column: "!B4:G4"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        await fetch("https://yomz-pages-data.vercel.app/api/cancelSubscription", requestOptions)
        // await fetch("http://localhost:3000/api/cancelSubscription", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    } catch (error) {
        console.warn(error)
    }
};