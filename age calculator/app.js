const btn = document.querySelector('#btn');
const card = document.querySelector('.card');
const daylabel = document.querySelector('.daylabel');
const monthlabel = document.querySelector('.monthlabel');
const yearlabel = document.querySelector('.yearlabel');
const dayinput = document.querySelector('.dayinput');
const monthinput = document.querySelector('.monthinput');
const yearinput = document.querySelector('.yearinput');
const firstspan = document.querySelector('#first');
const secondspan = document.querySelector('#second');
const thirdspan = document.querySelector('#third');
const dayError = document.querySelector('.dayError');
const monthError = document.querySelector('.monthError');
const yearError = document.querySelector('.yearError');


const date = new Date() ;
    const current_day = date.getDate() ;
    const current_month = 1 + date.getMonth() ;
    const current_year = date.getFullYear() ;

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    const dayValue = dayinput.value ;
    const monthValue = monthinput.value ;
    const yearValue = yearinput.value ;
    const flag = false ;
    const sign = true ;
    if (dayValue === '' ) {
        dayError.innerText = 'This field is requiired';
        dayError.classList.remove('hide');
        daylabel.classList.remove('daylabel');
        daylabel.classList.add('errorText');
        dayinput.classList.remove('dayinput');
        dayinput.classList.add('errorBorder');
        flag = true ;
    }
    if (monthValue === '' ) {
        monthError.innerText = 'This field is requiired';
        monthError.classList.remove('hide');
        monthlabel.classList.remove('monthlabel');
        monthlabel.classList.add('errorText');
        monthinput.classList.remove('monthinput');
        monthinput.classList.add('errorBorder');
        flag = true ;
    }
    if (yearValue === '' ) {
        yearError.innerText = 'This field is requiired';
        yearError.classList.remove('hide');
        yearlabel.classList.remove('yearlabel');
        yearlabel.classList.add('errorText');
        yearinput.classList.remove('yearinput');
        yearinput.classList.add('errorBorder');
        flag = true ;
    }
    const day = parseInt(dayValue);
    const month = parseInt(monthValue);
    const year = parseInt(yearValue) ;
    if (day === 29 && month===2 && year%4===0 ){
        sign = false ;
    }
    if (( (day === 31 && ( month != 1 && month != 3 && month != 5 && month!=7 && month!=8 && month!=10 && month!=12 )) || day < 1 || day>31 || (day===30 && month===2)) && sign){
        dayError.innerText = 'Must be a valid day';
        dayError.classList.remove('hide');
        daylabel.classList.remove('daylabel');
        daylabel.classList.add('errorText');
        dayinput.classList.remove('dayinput');
        dayinput.classList.add('errorBorder');
        flag = true ;
    }
    if (monthValue>12 || monthValue<1 ) {
        monthError.innerText = 'Must be a valid month';
        monthError.classList.remove('hide');
        monthlabel.classList.remove('monthlabel');
        monthlabel.classList.add('errorText');
        monthinput.classList.remove('monthinput');
        monthinput.classList.add('errorBorder');
        flag = true ;
    }
    if (yearValue > current_year ) {
        yearError.innerText = 'Must be in the past';
        yearError.classList.remove('hide');
        yearlabel.classList.remove('yearlabel');
        yearlabel.classList.add('errorText');
        yearinput.classList.remove('yearinput');
        yearinput.classList.add('errorBorder');
        flag = true ;
    }
    if (yearValue<1 ) {
        yearError.innerText = 'Must be a valid year';
        yearError.classList.remove('hide');
        yearlabel.classList.remove('yearlabel');
        yearlabel.classList.add('errorText');
        yearinput.classList.remove('yearinput');
        yearinput.classList.add('errorBorder');
        flag = true ;
    }
    
    if ( !flag ) {
        if ( current_month < month  ) {
            firstspan.innerText = current_year-year-1 ;
            if (current_day < day ) {
                secondspan.innerText = current_month-1 ;
                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
                    thirdspan.innerText = 31 - (day-current_day) ;
                }
                else if (month === 2 && year%4!==0 ) {
                    thirdspan.innerText = 28 - (day-current_day) ;
                }
                else if ( month === 2 && year%4===0 ) {
                    thirdspan.innerText = 29 - (day-current_day) ;
                }
                else {
                    thirdspan.innerText = 30 - (day-current_day) ;
                }
            }
            else {
                secondspan.innerText = current_month ;
                thirdspan.innerText = current_day-day ;
            }
        }
        else if ( current_month === month ) {
            if (current_day < day ) {
                firstspan.innerText = current_year-year-1 ;
                secondspan.innerText = current_month-1 ;
                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
                    thirdspan.innerText = 31 - (day-current_day) ;
                }
                else if (month === 2 && year%4!==0 ) {
                    thirdspan.innerText = 28 - (day-current_day) ;
                }
                else if ( month === 2 && year%4===0 ) {
                    thirdspan.innerText = 29 - (day-current_day) ;
                }
                else {
                    thirdspan.innerText = 30 - (day-current_day) ;
                }
            }
            else {
                firstspan.innerText = current_year-year ;
                secondspan.innerText = current_month ;
                thirdspan.innerText = current_day-day ;
            }
        }
        else {
            firstspan.innerText = current_year-year ;
            if (current_day < day ) {
                secondspan.innerText = current_month-month-1 ;
                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
                    thirdspan.innerText = 31 - (day-current_day) ;
                }
                else if (month === 2 && year%4!==0 ) {
                    thirdspan.innerText = 28 - (day-current_day) ;
                }
                else if ( month === 2 && year%4===0 ) {
                    thirdspan.innerText = 29 - (day-current_day) ;
                }
                else {
                    thirdspan.innerText = 30 - (day-current_day) ;
                }
            }
            else {
                secondspan.innerText = current_month-month ;
                thirdspan.innerText = current_day-day ;
            }
        }
        
    }
    
})