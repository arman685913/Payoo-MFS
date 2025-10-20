// logout part
const logOut = document.getElementById('logout').addEventListener('click',
    function(){
        window.location.href = 'index.html';
        alert('Logout Successfully')
    }
)

//add money
document.getElementById('addMoney').addEventListener('click',
    function(){
        hidden('addMoneyHidden')
    }
)
//----------//
document.getElementById('addButton').addEventListener('click', 
    function(even){
        const addNum = document.getElementById('addNum').value;
        const addAmount = valueById('addAmount');
        const pin = valueById('addPin');
        const amount = innerTextById('amount');

        if(addNum.length === 11){
            if(pin === 1234){
                if(addAmount > 0){
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

// cash out
document.getElementById('cashOut').addEventListener('click',
    function(){
        hidden('cashOutHidden');
    }
)
//-----------//
document.getElementById('outButton').addEventListener('click', 
    function(even){
        const outNum = document.getElementById('outNum').value;
        const outAmount = valueById('outAmount');
        const pin = valueById('outPin');
        const amount = innerTextById('amount');

        if(outNum.length === 11){
            if(pin === 1234){
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

//transfer money
document.getElementById('transfer').addEventListener('click',
    function(){
        hidden('transferHidden');
    }
)
//----------//
document.getElementById('transferButton').addEventListener('click', 
    function(even){
        const transferNum = document.getElementById('transferNum').value;
        const transferAmount = valueById('transferAmount');
        const pin = valueById('transferPin');
        const amount = innerTextById('amount');

        if(transferNum.length === 11){
            if(pin === 1234){
                if(transferAmount > 0 && amount >= transferAmount){
                    document.getElementById('amount').innerText = amount - transferAmount;
                    document.getElementById('transferAmount').value = '';
                    alert('Transfer Money Successfully')
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

//bonus 
document.getElementById('bonus').addEventListener('click',
    function(){
        hidden('bonusHidden');
    }
)
//----------//
document.getElementById('bonusButton').addEventListener('click',
    function(){
        const coupon = valueById('couponNo');
        const amount = innerTextById('amount');
        if(coupon <= 5 && 1 >= coupon){
            if(coupon === 1){
                document.getElementById('amount').innerText = amount + 1000;
                document.getElementById('couponNo').value = '';
                alert('You received a bonus of 1000 taka.');
            } else if(coupon === 2){
                document.getElementById('amount').innerText = amount + 2000;
                document.getElementById('couponNo').value = '';
                alert('You received a bonus of 2000 taka.');
            } else if(coupon === 3){
                document.getElementById('amount').innerText = amount + 3000;
                document.getElementById('couponNo').value = '';
                alert('You received a bonus of 3000 taka.');
            } else if(coupon === 4){
                document.getElementById('amount').innerText = amount + 4000;
                document.getElementById('couponNo').value = '';
                alert('You received a bonus of 4000 taka.');
            } else {
                document.getElementById('amount').innerText = amount + 5000;
                document.getElementById('couponNo').value = '';
                alert('You received a bonus of 5000 taka.');
            }
        } else{ alert('Please enter your coupon number between 1 and 5.')}
    }
)
