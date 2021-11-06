console.log('JS');


$(document).ready(onReady);


function onReady()  {
    $('#submit').on('click', submitEmployeeInfo)
}

let employees = [];


function submitEmployeeInfo()   {
    console.log('clicked');
}