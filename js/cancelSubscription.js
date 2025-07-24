// form elements
const form = document.getElementById('cancellation-form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');
const orderId = document.getElementById('order-id');
const commentBox = document.getElementById('comments-input');

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
        regex: /^\d{7,15}$/,       // only digits, length 7–15
        clean: /[^\d]/g,           // remove everything except digits
        error: "Please enter a valid phone number (7–15 digits)."
    }
};

document.addEventListener('DOMContentLoaded', function () {

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fields = [fullName, email, phoneNumber, orderId, commentBox];
        let invalid = false; // Track if there's at least one empty input

        for (let field of fields) {
            const errorSpanId = `${field.id}-error`;
            const errorSpan = document.getElementById(errorSpanId);

            if (!field.value.trim()) {
                invalid = true;

                // Show error message
                if (errorSpan) {
                    errorSpan.textContent = 'This field is required.';
                    errorSpan.classList.remove('hide');
                }

                // Optional: Add red border
                field.classList.add('is-invalid');
            } else {
                // Clear error if field is valid
                if (errorSpan) {
                    errorSpan.textContent = '';
                    errorSpan.classList.add('hide');
                }

                field.classList.remove('is-invalid');
            }
        };

        // If any field had an error, do NOT submit
        if (invalid) {
            console.log('⚠️ Please fill in all required fields.');
            return;
        }

        console.log("✅ Yes, form is submitting.");
        resetValue();
    });

    // hanlde Input Change
    [fullName, email, phoneNumber, orderId, commentBox].forEach(input => {
        input.addEventListener('input', handleChange)
    })
});

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
            }
        } else {
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.add('hide');
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