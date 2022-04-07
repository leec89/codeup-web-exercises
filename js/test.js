/*

4. Use the following code to follow the instructions below:


let username = 'codeup';
let password = 'notastrongpassword';

Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username

the username must be no more than 20 characters
neither the username or password can start or end with whitespace

*/

var validLogin = false;

// Run loop for valid login requirements
while (!validLogin) {

    // Run loop for valid username and check for length requirement
    var validUsername = false;
    while (!validUsername) {
        var username = prompt('What\'s your new username?');
        username = username.trim();
        let userLength = username.length;
        if (userLength <= 20) {
            validUsername = true;
        } else {
            alert('Sorry, your username is too long! It must be less than or equal to 20 characters & numbers.');
        }
    }

    // Run loop for valid username and check for length requirement
    var validPassword = false;
    while (!validPassword) {
        var password = prompt('What\'s your new password?');
        password = password.trim();
        let passLength = password.length;
        if (passLength >= 5) {
            validPassword = true;
        }else {
            alert('Sorry, your password is too short! It must be greater than or equal to 5 characters & numbers.')
        }
    }

    //check to see if username inside of password. if yes, not valid password
    if (password.indexOf(username) !== -1) {
        validPassword = false;
    }

    //all checks done to see if username and password are valid
    if (validUsername && validPassword) {
        validLogin = true;
    } else {
        validLogin = false;
    }

    //if all tests complete and valid then give alert for congrats. otherwise, alert for error and start again.
    if (validLogin) {
        alert('Congratulations! Your username and password are valid.');
    } else {
        alert('Sorry! Your password cannot contain your username.');
    }
}