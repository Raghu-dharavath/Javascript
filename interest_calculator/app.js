// compound interest calculator

function interestCal(){
    const totalAmount = document.getElementById('totalamount');
    const amountInput = document.getElementById('amount');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');

    let amount = Number(amountInput.value);
    let rate = Number(rateInput.value/100);
    let years = Number(yearsInput.value);

    if (amount<0 || isNaN(amount)){
        amountInput.value=0;
        amount=0;
    }
    if (rate<0 || isNaN(rate)){
        rateInput.value=0;
        rate=0;
    }
    if (years<0 || isNaN(years)){
        yearsInput.value = 0;
        years=0;
    }
    
    const result = amount * Math.pow((1+rate/1),1*years);
    totalAmount.textContent= result.toLocaleString('hi-IN',{style:'currency',currency:'INR'});

}

