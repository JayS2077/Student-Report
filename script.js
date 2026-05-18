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
});