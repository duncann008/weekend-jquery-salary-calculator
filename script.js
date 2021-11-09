console.log('JS');


$(document).ready(onReady);


function onReady()  {

    $('#submit').on('click', submitEmployeeInfo);
    $('#table-of-employees').on('click', '#delete-button', deleteEmployee);
}

let employees = [];


function submitEmployeeInfo()   {

    

    let newEmployee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        id: Number($('#ID').val()),
        title: $('#title').val(),
        annualSalary: Number($('#annual-salary').val())
    }

    if(checkInputs(newEmployee)){
        }
    else {
        return false;
    }

    employees.push(newEmployee);

    displayEmployees(employees);

    clearInputs();
}



function checkInputs(employee){
    if(employee.firstName === ''){
        alert('Coach, is that you?');
        return false;
    }
    else if(employee.lastName === '')  {
        alert('Mononyms are so hot right now.');
        return false;
    }
    else if(employee.id === 0)  {
        alert("Well, I don't know the ID!");
        return false;
    }
    else if(employee.title === '')  {
        alert('Yes, milord?');
        return false;
    }
    else if(employee.annualSalary === 0)   {
        alert('Oh, an intern!');
        return false;
    }
    else {
       alert("IT'S ALIVE!!!");
       return true;
   }
}


function clearInputs(){
    $('#first-name').val('');
    $('#last-name').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#annual-salary').val('');
}


function displayEmployees(dataToDisplay) {

    $('#table-of-employees').empty();

    for (let employee of dataToDisplay) {

        let cleanSalary = employee.annualSalary.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        let addTableRow = `
            <tr id="employee">
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
    let okay = confirm("Are you sure? They might have a family.");
    if (okay === true)   {
    let index = $('#delete-button').index(this);
    employees.splice(index);
    $(this).closest('tr').remove();
    displayMonthlySalary();
    alert("I can't believe you've done this.");
    }
    else{
        alert("You've made the right decision.");
    }
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
    checkMaxBudget(monthlySalary);
}

const maxBudget = 20000;
function checkMaxBudget(monthly) {
   if (monthly > maxBudget) {
       $("#monthly-salary").css("color", "red");
     } else {
       $("#monthly-salary").css("color", "black");
   }
}