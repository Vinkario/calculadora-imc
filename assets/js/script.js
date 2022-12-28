const firstDiv = document.querySelector('.step-one')
const secondDiv = document.querySelector('.step-two')
const finalDiv = document.querySelector('.step-final')

function go(currentStep, nextStep){
    let dNone,dFlex;
    if(currentStep == 1)
    {
        dNone = firstDiv
    }
    else if(currentStep == 2)
    {
        dNone = secondDiv
    }
    else
    {
        dNone =finalDiv
    }

    dNone.style.display='none'
    if(nextStep == 1)
    {
        dFlex = firstDiv
    }
    else if(nextStep == 2)
    {
        dFlex = secondDiv
    }
    else
    {
        dFlex =finalDiv
    }

    dFlex.style.display='flex'
}

function validate()
{

    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    if(!peso.value || !altura.value){
        peso.style.border ='none';
        altura.style.border ='none';
    
    if(!peso.value && !altura.value){

        peso.style.border ='1px solid red';
        altura.style.border ='1px solid red';
    }
    else if(!peso.value){
        peso.style.border ='1px solid red'

    }

    else{
        altura.style.border ='1px solid red'

    } 
    } else{
        let imc = peso.value / (altura.value * altura.value)
        const result = document.getElementById('resultado')
        if(imc < 18.5)
        {
            result.innerHTML = 'Magreza | Obesidade grau 0';
            result.style.color ='yellow'
        }
        else if( imc >= 18.5 && imc<25){
            result.innerHTML = 'Normal | Obesidade grau 0';
            result.style.color='green'
        }
        else if (imc >=25 && imc<30){
            result.innerHtml = 'Sobrepeso | Obesidade grau I';
            result.style.color='yelow'

        }
        else if (imc>30 && imc<40){
            result.innerHTML = 'Obesidade | Obesidade grau II';
            result.style.color='red'

        }
        else{
            result.innerHTML = 'Obesidade | Obesidade grau III';
            result.style.color='black'

        }

        go(2,3);
    }
}