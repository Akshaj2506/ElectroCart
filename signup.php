<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="./styles/signup.css">
   <title>Sign Up/Register</title>
</head>
<body>
   <main>
      <div id="container">
         <div id="login-div">
            <h1>Log In</h1>
            <form action="">
               <label for="userid">Account ID: </label><br>
               <input type="text" required name="userid" id="user-id"><br>
               <label for="userpass">Password:</label><br>
               <input type="password" required name="userpass" id="user-pass"><br>
               <span>Sign in as a</span><br>
               <div id="links">
                  <button type="submit" onmousedown="location.href = 'producers_index.php'">Producer</button>
                  <button type="submit" onmousedown="location.href='consumers_index.php'">Consumer</button>
               </div>
            </form>
         </div>
         <div id="register-div">
            <h1>Register</h1>
            <form action="">
               <label for="registerfname">First Name: </label><br>
               <input type="text" required name="registerfname" id="register-fname"><br>
               <label for="resgiterlname">Last Name: </label><br>
               <input type="text" required name="registerlname" id="register-lname"><br>
               <label for="phnum">Phone Number: </label><br>
               <input type="telephone" required name="phnum" id="ph-num"><br>
               <label for="userid">New Account ID: </label><br>
               <input type="text" required name="userid" id="user-id"><br>
               <label for="userpass">Password:</label><br>
               <input type="password" required name="userpass" id="user-pass"><br>
               <button type="submit">Submit</button>
            </form>
         </div>
      </div>
   </main>
</body>
</html>