function login() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const vv = document.querySelector('input[name="username"]')[0];

  // Check if the username and password are correct
  if (username === "gyan" && password === "1") {
    if (username === "vv" && password === "11") {
      // Store the username and password in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Redirect the user to the home page
      window.location.href = "DetailsPage/second.html";
    }
    if (username === "gyan" && password === "2") {
      // Store the username and password in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Redirect the user to the home page
      window.location.href = "nxtpage1/index.html";
    } else {
      // Display an error message
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerHTML = "Invalid username or password";
    }
  }
}
