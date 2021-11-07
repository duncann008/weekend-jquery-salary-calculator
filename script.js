console.log('JS');


$(document).ready(onReady);


function onReady()  {

    $('#submit').on('click', submitEmployeeInfo);
    $('#table-of-employees').on('click', '#delete-button', deleteEmployee);
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

        let cleanSalary = employee.annualSalary.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        let addTableRow = `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${cleanSalary}</td>
                <td><button id="delete-button">Delete</button></td>
            </tr>
        `;

        $('#table-of-employees').append(addTableRow);
        displayMonthlySalary();
    }
}



function deleteEmployee() {
    let index = $('#delete-button').index(this);
    employees.splice(index);
    $(this).closest('tr').remove();
    displayMonthlySalary();
}


function calculateMonthlySalary(salariesToSum)  {

    let sum = 0

    for (let employee of salariesToSum) {
        sum += employee.annualSalary;
    }

    return sum;
}

function displayMonthlySalary()  {

    let monthlySalary = calculateMonthlySalary(employees) / 12;
    let easierToRead = monthlySalary.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    $('#monthly-salary').empty();
    $('#monthly-salary').append(`Monthly Salary: ${easierToRead}`);
}