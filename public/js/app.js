const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const messageOne=document.querySelector('#message-1');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent='Loading...';
    const location=search.value;
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{   
            if(data.error)
            {
                messageOne.textContent='unable to find location , try another one';
            }
            else{
            messageOne.textContent='The temperature now in '+data.location+' is '+data.forecast;   
        }
        });
    });
});