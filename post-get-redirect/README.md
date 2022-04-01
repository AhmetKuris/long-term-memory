# Post-Redirect-Get Pattern

### Problem

    What happens a user refreshes a page that contains a form with a Post request. It might execute duplicate operations.

### Solution

    Rather than directly returning a response for the Post request we send back a Redirect 3XX reponse which redirects to a Get endpoint. So whenever user refreshes the page only the Get endpoint triggers and we avoid duplicate execution.
