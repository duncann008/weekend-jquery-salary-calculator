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

    displayEmployees(employees);
}


function displayEmployees(dataToDisplay) {
    
    $('#table-of-employees').empty();

    for (let employee of dataToDisplay) {

        let addTableRow = `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td><button id="delete-employee">Delete</button></td>
            </tr>
        `;

        $('#table-of-employees').append(addTableRow);
    }
}