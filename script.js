<<<<<<< HEAD
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
    
=======
document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('studentName').value;
    const scoreInputs = document.querySelectorAll('.score');
    let total = 0;

    // 1. Calculate Total
    scoreInputs.forEach(input => {
        total += Number(input.value) || 0;
    });

    // 2. Calculate Average
    const average = total / scoreInputs.lenght;

    // 3. Update Display
    document.getElementById('resName').innerText = `Student Name: ${name || "N/A"}`;
    document.getElementById('resTotal').innerText = total;
    document.getElementById('resAvg').innerText = average.toFixed(2) + "%";

    // 4. Determine Pass/Fail (Pass mark = 50)
    const statusE1 = document.getElementById('resStatus');
    if (average >= 50) {
        statusE1.innerText = "PASS";
        statusE1.className = "pass";
    } else {
        statusE1.innerText = "FAIL"
        statusE1.className = "fail"
    }
>>>>>>> 88739c94ed42248869335cad6ad6410d05b11ab5
});