function loginForm() {
  const defaultEmail="Teyssonneyre.evan@gmail.com";
  const defaultPassword="123";
  let email=""
  let password=""

  email = document.getElementById("staticEmail2").value;
  password = document.getElementById("inputPassword2").value;

  if(!email=="" && !password=="") {
    compare(defaultEmail, defaultPassword, email, password)
  }
}

function compare(defaultEmail, defaultPassword, email, password) {
  let error=""
  if(defaultEmail==email) {
    if(defaultPassword==password) {
      document.location.href="index.html"
    }
    else {
      error = document.getElementById("error")
      error.innerHTML = "Password incorrect"
    }
  }
  else {
    error = document.getElementById("error")
    error.innerHTML = "Email incorrect"
  }

}

