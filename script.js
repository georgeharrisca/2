function displayInfo() {
    const select = document.getElementById('option-select');
    const infoDisplay = document.getElementById('info-display');
    const selectedOption = select.value;

    // Reset display
    infoDisplay.style.display = 'none';
    infoDisplay.innerHTML = '';

    if (selectedOption) {
        let infoText = '';

        switch (selectedOption) {
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

        infoDisplay.innerHTML = infoText;
        infoDisplay.style.display = 'block';
    }
}
