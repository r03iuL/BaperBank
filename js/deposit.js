document.getElementById('deposite-btn').addEventListener('click', function () {
    const dAmount = parseFloat(document.getElementById('depositField').value);
    // console.log(dAmount);
    if (dAmount != NaN && dAmount > 0) {
        const previousDeposite = parseFloat(document.getElementById('deposite-Total').innerText);
        // console.log(previousDeposite);
        const totalDeposite = previousDeposite + dAmount;
        // console.log(totalDeposite);
        document.getElementById('deposite-Total').innerText = totalDeposite;
        document.getElementById('depositField').value = '';
        const previousBalance = parseFloat(document.getElementById('previous-balance').innerText);
        // console.log(previousBalance);
        const newBalance = previousBalance + dAmount;
        document.getElementById('previous-balance').innerText = newBalance;
    }
    else {
        alert("Invalid amount of Money ");
        document.getElementById('depositField').value = '';
    }



})