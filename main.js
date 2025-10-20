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
        const history = document.getElementById('transactionsHidden');
        const bank = document.getElementById('bank').value;

        if(addNum.length === 11){
            if(pin === 1234){
                if(addAmount > 0){
                    document.getElementById('amount').innerText = amount + addAmount;
                    document.getElementById('addAmount').value = '';
                    // history
                    const span = document.createElement('span');
                    span.classList.add('p-2');
                    span.innerHTML = `
                          <div class="flex items-center justify-between rounded-xl bg-white p-3">
                           <div class="flex gap-2">
                             <div>
                                 <div class="rounded-full p-3 bg-slate-100">
                                   <img src="Payoo-MFS-Resources-main/assets/wallet1.png" alt="">
                                 </div>
                               </div>
                               <div>
                                 <h1 class="font-medium ">Add Money ${addAmount} Taka</h1>
                                 <p class="text-sm">Today 01:44 AM from ${addNum} </p>
                                 <p class="text-sm"> Bank Name: ${bank} </p>
                               </div>
                           </div>
                           <div>
                               <p class="font-bold text-2xl text-gray-300">...</p>
                           </div>
                         </div> 
                    `
                    history.appendChild(span);
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
        const history = document.getElementById('transactionsHidden')

        if(outNum.length === 11){
            if(pin === 1234){
                if(outAmount > 0 && amount >= outAmount){
                    document.getElementById('amount').innerText = amount - outAmount;
                    document.getElementById('outAmount').value = '';
                    //history
                    const span = document.createElement('span');
                    span.classList.add('p-2');
                    span.innerHTML = `
                          <div class="flex items-center justify-between rounded-xl bg-white p-3">
                           <div class="flex gap-2">
                             <div>
                                 <div class="rounded-full p-3 bg-slate-100">
                                   <img src="Payoo-MFS-Resources-main/assets/wallet1.png" alt="">
                                 </div>
                               </div>
                               <div>
                                 <h1 class="font-medium ">Cash Out ${outAmount} Taka</h1>
                                 <p class="text-sm">Today 01:44 AM from ${outNum} </p>
                               </div>
                           </div>
                           <div>
                               <p class="font-bold text-2xl text-gray-300">...</p>
                           </div>
                         </div> 
                    `
                    history.appendChild(span);
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
        const history = document.getElementById('transactionsHidden')

        if(transferNum.length === 11){
            if(pin === 1234){
                if(transferAmount > 0 && amount >= transferAmount){
                    document.getElementById('amount').innerText = amount - transferAmount;
                    document.getElementById('transferAmount').value = '';
                    //history
                    const span = document.createElement('span');
                    span.classList.add('p-2');
                    span.innerHTML = `
                          <div class="flex items-center justify-between rounded-xl bg-white p-3">
                           <div class="flex gap-2">
                             <div>
                                 <div class="rounded-full p-3 bg-slate-100">
                                   <img src="Payoo-MFS-Resources-main/assets/wallet1.png" alt="">
                                 </div>
                               </div>
                               <div>
                                 <h1 class="font-medium ">Transfer Money ${transferAmount} Taka</h1>
                                 <p class="text-sm">Today 01:44 AM from ${transferNum} </p>
                               </div>
                           </div>
                           <div>
                               <p class="font-bold text-2xl text-gray-300">...</p>
                           </div>
                         </div> 
                    `
                    history.appendChild(span);
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
        const history = document.getElementById('transactionsHidden');
        if(coupon >= 1 && coupon <= 5){
            const bonus = coupon * 1000;
            document.getElementById('amount').innerText =amount + bonus;
            document.getElementById('couponNo').value = '';
                //history
                    const span = document.createElement('span');
                    span.classList.add('p-2');
                    span.innerHTML = `
                          <div class="flex items-center justify-between rounded-xl bg-white p-3">
                           <div class="flex gap-2">
                             <div>
                                 <div class="rounded-full p-3 bg-slate-100">
                                   <img src="Payoo-MFS-Resources-main/assets/wallet1.png" alt="">
                                 </div>
                               </div>
                               <div>
                                 <h1 class="font-medium ">Bonus ${bonus} Taka</h1>
                                 <p class="text-sm">Today 01:44 AM from Coupon No. ${coupon} </p>
                               </div>
                           </div>
                           <div>
                               <p class="font-bold text-2xl text-gray-300">...</p>
                           </div>
                         </div> 
                    `
                    history.appendChild(span);
            alert('You received a bonus of taka.' + bonus);
        } else{alert('Please enter your coupon number between 1 and 5.')};
    }
)



//Pay Bill
document.getElementById('payBill').addEventListener('click',
    function(){
        hidden('payBillHidden');
    }
)
//----------//
document.getElementById('payButton').addEventListener('click', 
    function(even){
        const payNum = document.getElementById('payNum').value;
        const payAmount = valueById('payAmount');
        const pin = valueById('payPin');
        const amount = innerTextById('amount');
        const history = document.getElementById('transactionsHidden');
        const paySelect = document.getElementById('paySelect').value;

        if(payNum.length === 11){
            if(pin === 1234){
                if(payAmount > 0 && amount >= payAmount){
                    document.getElementById('amount').innerText = amount - payAmount;
                    document.getElementById('payAmount').value = '';
                    // history
                    const span = document.createElement('span');
                    span.classList.add('p-2');
                    span.innerHTML = `
                          <div class="flex items-center justify-between rounded-xl bg-white p-3">
                           <div class="flex gap-2">
                             <div>
                                 <div class="rounded-full p-3 bg-slate-100">
                                   <img src="Payoo-MFS-Resources-main/assets/wallet1.png" alt="">
                                 </div>
                               </div>
                               <div>
                                 <h1 class="font-medium "> ${paySelect} ${payAmount} Taka</h1>
                                 <p class="text-sm">Today 01:44 AM from ${payNum} </p>
                               </div>
                           </div>
                           <div>
                               <p class="font-bold text-2xl text-gray-300">...</p>
                           </div>
                         </div> 
                    `
                    history.appendChild(span);
                    alert('Pay Bill Successfully')
                } else {
                    alert('Invalid Amount')
                    document.getElementById('payAmount').value = '';
                }
            }else{
                alert('Invalid Pin')
            }
        }else{
            alert('Invalid Account Number');
        }
    }
)



//transactions
document.getElementById('transactions').addEventListener('click',
    function(){
        hidden('transactionsHidden');
    }
)
