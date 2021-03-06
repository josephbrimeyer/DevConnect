import React from "react";
import $ from "jquery";

function Signup() {
  return $(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", (event) => {
      event.preventDefault();
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
      };
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password,
      })
        .then(() => {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
}
export default Signup;

// <!DOCTYPE html>
// <html lang="en">

// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <!-- Compiled and minified JavaScript, Materialize-->
// <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

// <link rel="stylesheet" type="text/css" href="css/style.css">

// <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
//   integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
//   integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
//   integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

// <link rel="stylesheet" href="css/style.css" type="text/css">
// <script src="https://code.jquery.com/jquery-3.5.0.min.js"
//   integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
// </head>

// <body class="d-flex flex-column min-vh-100" id="moviePage">

//   <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
//     <a class="navbar-brand" href="index.html">DevConnect</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mr-auto">

//         <li class="nav-item">
//           <a class="nav-link" href="view.html">Search Movie Reviews</a>
//         </li>

//         <li class="nav-item">
//           <a class="nav-link" href="movie.html">Search Movies</a>
//         </li>

//         <li class="nav-item">
//           <a class="nav-link" href="login.html">Member Login</a>
//         </li>

//         <li class="nav-item active">
//           <a class="nav-link" href="signup.html">Sign Up<span class="sr-only">(current)</span></a>
//         </li>
//       </ul>
//       <input type="text" placeholder="Search..." id="searchbar">

//       </d iv>
//   </nav>

//   <div class="container">
//     <div class="row">
//       <div class="col-md-6 col-md-offset-3">
//         <h2>Sign Up Form</h2>
//         <form class="signup">
//           <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input type="email" class="form-control" id="email-input" placeholder="Email">
//           </div>
//           <div class="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input type="password" class="form-control" id="password-input" placeholder="Password">
//           </div>
//           <div style="display: none" id="alert" class="alert alert-danger" role="alert">
//             <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
//             <span class="sr-only">Error:</span> <span class="msg"></span>
//           </div>
//           <button type="submit" class="btn btn-default">Sign Up</button>
//         </form>
//         <br />
//         <p>Or log in <a href="/login">here</a></p>
//       </div>
//     </div>

//   </div>

//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript" src="js/signup.js"></script>

//   <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//   <!-- <script src="script.js" type="text/javascript"></script> -->

// </body>

// </html>
