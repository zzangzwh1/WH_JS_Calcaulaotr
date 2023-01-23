let disply = document.querySelector('.display input');
let test = document.querySelector('.test');
let buttonResult = Array.from(document.getElementsByClassName('btns'));

buttonResult.map(buttons =>{
    buttons.addEventListener('click',(e)=>{
       let previous = disply.value;
        if( e.target.value === '='){
            if(disply.value == '' || disply.value =="undefined" ){
                disply.value  ='';
            }
            else{

                disply.value =  eval(disply.value);
            }
           
        }
     
        else if(e.target.value == 'DE'){
            disply.value = disply.value.slice(0,-1);
        }
        else if(e.target.value == 'AC'){
            disply.value =''; 
        }
        else{
            disply.value += e.target.value; 
        }
    });
} );

/*.addEventListener('click', () =>{
    console.log("clicked");
    disply.value +=1;
});
*/
