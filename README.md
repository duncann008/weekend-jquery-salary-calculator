# Project Name

Salary Calculator

## Description

A header that allows a user to add an employee to a table.
That table holds employee information and calculates total monthly salary payouts.
We can delete an employee's information at any time.

### Steps I took

1.  Framed my HTML.
2.  Added a little CSS to better visualize my work done.
3.  The next step is to make a function to add an employee object to the table in the DOM.
    A.  First I gave my button an id and a click event handler, then tested the click with a console.log.
    B.  I gave all my input fields ids and created variables for each one.
    C.  Created an employees array above the function and then a new object called newEmployee in the function with properties associated with my input variables.
    D.  Tested pushing a new object into that array and logging the array.
    E.  Tested emptying the input fields afterwards.
4.  Now I create another function that displays my employees array on the table.