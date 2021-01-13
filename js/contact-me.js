function submit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;
    alert("\n\n\nName" + " " + name  + " " + "\n\n\nEmail " + email + " " + "\n\n\nMessage " + msg + "\n\n\nMessage sent");
    console.log(name);
    console.log(email);
    console.log(msg);


  }
  function clear() {
    document.getElementById("form").reset();
  }
  document.getElementById("submit").addEventListener("click", submit);
  document.getElementById("clear").addEventListener("click", clear);