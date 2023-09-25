let screen = document.querySelector('#screen');
let btns = document.querySelectorAll('button');

for(let b of btns){
    b.addEventListener('click', (ev)=>{
       // console.log(ev.target.innerText);
        if(ev.target.innerText==='C'){
            screen.value='';
        }
        else if(ev.target.innerText ==='='){
            try{  // agar expression chal gya to
                screen.value=eval(screen.value); // eval function is used to evaluate string
            }
            catch(e){  // nahi chla to error
                screen.value='invalid operation';
            }
        }
        else
        screen.value+=ev.target.innerText;
    })
}

