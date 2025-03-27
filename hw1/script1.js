document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    const resultTag = document.getElementById("result");

    function calculate() {
        const fee = document.getElementById("fee").value.trim() || 0;
        const count = document.getElementById("count").value.trim() || 0;
        const discount = document.getElementById("discount").value.trim() || 0;

        if (isNaN(fee) || isNaN(count) || isNaN(discount)) {
            resultTag.textContent = "Invalid input! Please enter valid numbers.";
            resultTag.classList.remove("alert-info");
            resultTag.classList.add("alert-danger");
            return;
        }

        let feeNum = parseFloat(fee);
        let countNum = parseFloat(count);
        let discountNum = parseFloat(discount);

        if (discount < 0) {
            resultTag.textContent = "Invalid input! Please enter valid numbers."
            resultTag.classList.remove("alert-info");
            resultTag.classList.add("alert-danger");
            return;
        }
        
        let result = (countNum * feeNum) - discountNum;

        resultTag.textContent = `Result: ${result}`;
        resultTag.classList.remove("alert-danger");
        resultTag.classList.add("alert-info");
    }

    inputs.forEach(input => input.addEventListener("input", calculate));
});
