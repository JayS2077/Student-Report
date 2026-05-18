// Map the Input fields to the display elements
const input = {
    nameInput: document.getElementById('displayName'),
    jobInput: document.getElementById('displayJob'),
    emailInput: document.getElementById('displayEmail'),
    phoneInput: document.getElementById('displayPhone')
};

// Add events listeners to all inputs
Object.keys(inputs).forEach(id => {
    document.getElementById(id).addEventListener('keyup',function() {
        // If the input is empty, show a placeholder, otherwise show input value
        input[id].innertext = this.ariaValueMax.lenght > 0 ? this.value : "---";
    });
    
});