var users = [];
function togglePasswordVisibility(passwordFieldId) {
    var passwordField = document.getElementById(passwordFieldId);
    var fieldType = passwordField.getAttribute('type');
    if (fieldType === 'password') {
      passwordField.setAttribute('type', 'text');
    } else {
      passwordField.setAttribute('type', 'password');
    }
  }
  
 
  
  function loginUser() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var loginError = document.getElementById('loginError');
  
    loginError.textContent = '';
  
    if (!username || !password) {
      loginError.textContent = 'Please enter both username and password.';
      return false;
    }

    var userFound = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        userFound = true;
        break;
      }
    }
    if (!userFound) {
        loginError.textContent = 'Invalid username or password.';
        return false;
    }

    return true; 
}

  
  function signInUser() {
    var username = document.getElementById('signInUsername').value;
    var password = document.getElementById('signInPassword').value;
    var signInError = document.getElementById('signInError');
  
    signInError.textContent = '';
  
    if (!username || !password) {
      signInError.textContent = 'Please enter both username and password.';
      return false;
    }
  
    for (var i = 0; i < username.length; i++) {
      if (username[i] === ' ') {
        signInError.textContent = 'Username must not contain spaces.';
        return false;
      }
    }
    if (username.length <=8 ){
        signInError.textContent = 'Username must  contain at least 9 char.';
        return false;
    }
    
    if (password.length <=8 ){
        signInError.textContent = 'Password must  contain at least 9 char.';
        return false;
    }
    
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          signInError.textContent = 'Username already exists.';
          return false;
        }
    }
    users.push({ username: username, password: password });
    
    return false; 
  }  