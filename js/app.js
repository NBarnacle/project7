const alertt = document.querySelector('.close');
const alertbox = document.querySelector('.alert-banner')

alertt.addEventListener('click', () => {
  alertbox.remove();
  });



const user = document.getElementById("userid");
const message = document.getElementById("message");
const send = document.getElementById("submit");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });
    


