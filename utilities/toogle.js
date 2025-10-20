
//transaction part hidden 
function hidden(id){
    const transactionPart =  document.getElementById('transaction')
    const transactions = transactionPart.querySelectorAll('section');
    for(const transaction of transactions){
        transaction.style.display = 'none';
        document.getElementById(id).style.display = 'block';
    }    
}
