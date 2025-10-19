const loginBtn = document.getElementById('loginBtn').addEventListener('click',
    function(even){
        even.preventDefault();
        const loginNum = document.getElementById('loginNum').value;
        const loginPin = document.getElementById('loginPin').value;
        if(loginNum.length === 11){
            if(loginPin == 1234){
                window.location.href = 'main.html';
            }else{
                alert('invalid pin')
            }
        }else{
            alert('invalid account number');
        }
    }
        
)