// When the user logs in
localStorage.setItem("isLoggedIn", "true"); // You can also store a user ID or token instead
window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      window.location.href = "login.html";
    }
  };
  function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html"; // Redirect to login page after logout
  }
  