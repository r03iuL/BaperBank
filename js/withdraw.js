document.getElementById('withdraw-btn').addEventListener('click', function () {
    const wAmount = parseFloat(document.getElementById('withdrawField').value);
    // console.log(wAmount);
    if (wAmount != NaN && wAmount > 0) {

        const previousBalance = parseFloat(document.getElementById('previous-balance').innerText);
        // console.log(previousBalance);

        if (previousBalance > wAmount) {
            const previouswithdraw = parseFloat(document.getElementById('withdraw-Total').innerText);
            // console.log(previouswithdraw);
            const totalwithdraw = previouswithdraw + wAmount;
            // console.log(totalwithdraw);
            document.getElementById('withdraw-Total').innerText = totalwithdraw;
            document.getElementById('withdrawField').value = '';

            const newBalance = previousBalance - wAmount;
            document.getElementById('previous-balance').innerText = newBalance;
        }
        else {
            alert('Insufficient Balance');
        }

    }
    else {
        alert("Invalid amount of Money ");
        document.getElementById('withdrawField').value = '';
    }



})