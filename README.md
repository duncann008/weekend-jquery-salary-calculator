# Project Name

Salary Calculator

## Description

An input field that allows a user to add an employee to a table.
That table holds employee information and calculates total monthly salary payouts.
We can delete an employee's information at any time.

### Steps I took:

1.  Framed my HTML.  Needed a couple headers, body, table, and something to contain the Monthly Salary calculation for which I used a div.

2.  Added a little CSS to better visualize my work done inside the table I will use to display the data I need to add to the DOM.

3.  The next step is to make a function to add an employee object to the table in the DOM.
    -  First I gave my button an id and a click event handler, then tested the click with a console.log.
    -  I gave all my input fields ids and created variables for each one.
    -  Created an employees array above the function and then a new object called newEmployee in the function with properties associated with my input variables.
    -  Tested pushing a new object into that array and logging the array.
    -  Tested emptying the input fields afterwards.

4.  Now I create another function that displays my employees array on the table.
    -  First I needed a place to put my new employee data rows without disturbing the data labels in the table header so I created a table body. Tested.
    -  Next I needed to target that body's id and empty it so as to not have repeating data when I push the new employees. Tested.
    -  Added and tested a loop to go through our array and make a new variable with each object's properties displayed on separate rows in the html.
    -  Append those variables to the DOM.

5.  Added the display function to the end of the add employee function.  Re-tested the add employee function with the new display function and confirmed it works.

6.  I thought now was the best time to tackle the delete button.  I believed that would require editing the display function, adding another blank column, and adding a click handler event.
    -  First I thought it best to add the column to place my delete buttons.  Had to add a little CSS to stretch out my final column without a header for visualization.
    -  Now I want to try appending a new button line into the next <tr> along with the employee's data. 
    -  Confirmed there's a button appearing where I want it to.
    -  To make it delete I need a new function that deletes the <tr> associated with that button.
    -  I spliced the index from the array and removed the row from the table with the function.

7.  For my final pieces of functionality I built a function to calculate the monthly salary and a function to display that data in the div I made on the DOM.
    -  Built a function to return the sum of the annualSalary property of the employees array.
    -  For my instructor's sanity I created a second function to do the division required for monthly salaries, then empty a div and append the number I need.
    -  After seeing the values, I decided to create a new easier to read variable before I emptied and appended.  Converted my values into the style of our local currency and appended that.
    -  Realized I should do the same for my table.

8.  Mostly to see if I could, and because it seemed like a prudent decision for an actual employee datase, I added a confirmation request for deletion of employee. Also to impress my girlfriend.

9.  Time to style!
    -  Fixed the input fields' dimensions.
    -  Added a hover background color for the employees' table.
    -  Centered, added a hover, and styled my delete buttons.
    -  Added some small padding and margin fixes.
    -  Repositioned my Monthly Salary div.
    -  Stylized my H1. This style came to mind with accounting.
    -  Added color to my table header.
    -  Aligned my salaries to the right to match the example a bit better.

#### Ideas I didn't get to:

-   Checkboxes to delete multiple employees at once and give all their names in the confirm prompt.
-   Loop through an array of alerts to keep the user entertained or horrified.

##### IF YOU'VE COME THIS FAR PLEASE TRY TO DELETE SOMEONE.

I apologize to anyone that read or skimmed through this long-winded README. As I'm sure you could tell, this was my first time doing something like this and I started shortening or skipping steps the further I went along. Any and all advice is appreciated.