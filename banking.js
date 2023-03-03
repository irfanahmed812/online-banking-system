document.getElementById('deposit-button').addEventListener('click', function () {
    const depositeInputField = document.getElementById('deposit-input');
    // console.log(depositeInputField);
    const depositText = depositeInputField.value;
    const newDepositeAmount = parseFloat(depositText);

    // console.log(newDepositeAmount);

    // deposite section ===================

    const depositeTotal = document.getElementById('total-deposit');
    const priviousDepositTotalText = depositeTotal.innerText;
    const priviousDepositTotalAmount = parseFloat(priviousDepositTotalText);


    const newDepositeTotal = priviousDepositTotalAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // update balance 

    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);


    const newBalanceTotal = balanceTotalAmount + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear form

    depositeInputField.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // withdraw total 

    const withdrawTotal = document.getElementById('total-withdraw');
    const withdrawTotalText = withdrawTotal.innerText;
    const widthdrawTotalAmount = parseFloat(withdrawTotalText);

    const newWithdrawTotal = widthdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('total-balance');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(priviousBalanceTotalText);

    const newTotalAmount = balanceTotalAmount - withdrawInputAmount;
    balanceTotal.innerText = newTotalAmount;

    withdrawInputField.value = '';


})