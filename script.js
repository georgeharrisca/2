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
                case 'violin':
                    infoText = 'Melody, Octave+1, Clef-Treble, Transposition-C, Chords-No, Lyrics-No, Rhythm-No';
                    break;
                case 'viola':
                    infoText = 'Harmony II, Octave-0, Clef-Alto, Transposition-C, Chords-No, Lyrics-No, Rhythm-No';
                    break;
                case 'cello':
                    infoText = 'Counter Melody, Octave-1, Clef-Bass, Transposition-C, Chords-No, Lyrics-No, Rhythm-No';
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
