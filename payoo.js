// logout part
const logOut = document.getElementById('logout').addEventListener('click',
    function(){
        window.location.href = 'index.html';
        alert('Logout Successfully')
    }
)


// add money
document.getElementById('addMoney').addEventListener('click',
    function(){
        const addMoneyHidden = document.getElementById('addMoneyHidden');
        const cashOutHidden = document.getElementById('cashOutHidden');
        const transferHidden = document.getElementById('transferHidden');
        addMoneyHidden.classList.remove('hidden');
        cashOutHidden.classList.add('hidden');
        transferHidden.classList.add('hidden');
    }
)
//----------//
document.getElementById('addButton').addEventListener('click',
    function(e){
        const amt = document.getElementById('amount').innerText;
        const amount = parseInt(amt);
        const addNum = document.getElementById('addNum').value;
        const Pin = document.getElementById('addPin').value;
        const addAmt = document.getElementById('addAmount').value;
        const addAmount = parseInt(addAmt);

        if(addNum.length === 11){
            if(Pin == 1234){
                if(addAmount > 0 ){
                    document.getElementById('amount').innerText = amount + addAmount;
                    document.getElementById('addAmount').value = '';
                    alert('Add Money Successfully')
                } else {
                    alert('Invalid Amount')
                    document.getElementById('addAmount').value = '';
                }
            }else{
                alert('Invalid Pin')
            }
        }else{
            alert('Invalid Account Number');
        }
    }
)

//cash out
document.getElementById('cashOut').addEventListener('click',
    function(){
        const cashOutHidden = document.getElementById('cashOutHidden');
        const addMoneyHidden = document.getElementById('addMoneyHidden');
        const transferHidden = document.getElementById('transferHidden');
        addMoneyHidden.classList.add('hidden');
        transferHidden.classList.add('hidden');
        cashOutHidden.classList.remove('hidden');
    }
)
//----------//
document.getElementById('outButton').addEventListener('click',
    function(e){
        const amt = document.getElementById('amount').innerText;
        const amount = parseInt(amt);
        const outNum = document.getElementById('outNum').value;
        const Pin = document.getElementById('outPin').value;
        const outAmt = document.getElementById('outAmount').value;
        const outAmount = parseInt(outAmt);

        if(outNum.length === 11){
            if(Pin == 1234){
                if(outAmount > 0 && amount >= outAmount){
                    document.getElementById('amount').innerText = amount - outAmount;
                    document.getElementById('outAmount').value = '';
                    alert('Cash-Out Successfully')
                } else {
                    alert('Invalid Amount')
                    document.getElementById('outAmount').value = '';
                }
            }else{
                alert('Invalid Pin')
            }
        }else{
            alert('Invalid Account Number');
        }
    }
)

//transfer
document.getElementById('transfer').addEventListener('click',
    function(){
        const transferHidden = document.getElementById('transferHidden');
        const cashOutHidden = document.getElementById('cashOutHidden');
        const addMoneyHidden = document.getElementById('addMoneyHidden');
        addMoneyHidden.classList.add('hidden');
        cashOutHidden.classList.add('hidden');
        transferHidden.classList.remove('hidden');
    }
)
//----------//
document.getElementById('transferButton').addEventListener('click',
    function(e){
        const amt = document.getElementById('amount').innerText;
        const amount = parseInt(amt);
        const transferNum = document.getElementById('transferNum').value;
        const Pin = document.getElementById('transferPin').value;
        const transferAmt = document.getElementById('transferAmount').value;
        const transferAmount = parseInt(transferAmt);

        if(transferNum.length === 11){
            if(Pin == 1234){
                if(transferAmount > 0 && amount >= transferAmount){
                    document.getElementById('amount').innerText = amount - transferAmount;
                    document.getElementById('transferAmount').value = '';
                    alert('Transfer Successfully')
                } else {
                    alert('Invalid Amount')
                    document.getElementById('transferAmount').value = '';
                }
            }else{
                alert('Invalid Pin')
            }
        }else{
            alert('Invalid Account Number');
        }
    }
)