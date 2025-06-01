function displayInfo() {
    const select = document.getElementById('option-select');
    const infoDisplay = document.getElementById('info-display');
    const selectedOptions = Array.from(select.selectedOptions);  // Get all selected options

    // Clear any previous info
    infoDisplay.innerHTML = '';

    if (selectedOptions.length > 0) {
        selectedOptions.forEach(option => {
            let infoText = '';
            switch (option.value) {
                case 'option1':
                    infoText = 'You selected Option 1. Here’s some information about it.';
                    break;
                case 'option2':
                    infoText = 'You selected Option 2. Here’s some information about it.';
                    break;
                case 'option3':
                    infoText = 'You selected Option 3. Here’s some information about it.';
                    break;
                default:
                    break;
            }

            // Create a new div for each selected option's info
            const infoItem = document.createElement('div');
            infoItem.classList.add('info-item');
            infoItem.innerText = infoText;

            // Append the info item to the info display
            infoDisplay.appendChild(infoItem);
        });
    }
}
