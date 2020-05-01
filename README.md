# Eat-Da-Burger

This application demonstrates the capabilities of Express, Handlebars and MySQL.

On load of this web page, you will see the names of three burgers, each with a devour button and a delete button. On click of the devour button, it will move to the devoured section of the page. You will also have the ability to delete the burger at any time by clicking the delete button.

Once the "devour" button is clicked, that will send an ajax call to our local express server. The express server will utilize a "burger" model to update the status of the burger and send that to an ORM to communicate with the database and update the table. Once the table is updated with the correct information, the back end functionality will pass the updated information through handlebars to have the correct content printed to the page.

There is also and input area to collect input from the user and create a new burger of their choice by following the same path.
