console.log('JS');


$(document).ready(onReady);


function onReady()  {
    $('#submit').on('click', submitEmployeeInfo);
}

let employees = [];


function submitEmployeeInfo()   {

    let newFirstName = $('#first-name').val();
    let newLastName = $('#last-name').val();
    let newId = $('#ID').val();
    let newTitle = $('#title').val();
    let newAnnualSalary = $('#annual-salary').val();

    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: Number(newId),
        title: newTitle,
        annualSalary: Number(newAnnualSalary)
    }

    employees.push(newEmployee);
    
    $('#first-name').val('');
    $('#last-name').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    
}


function displayEmployees(thingToDisplay) {
    
    $('#table-of-employees').empty();

    for ()
}