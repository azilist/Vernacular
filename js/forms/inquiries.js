const $inquiries = document.querySelector("#inquiries-form");
const $submitBtn = document.querySelector("#submit-btn");

$inquiries.addEventListener("submit", (e) => {
  e.preventDefault();
  $submitBtn.disabled = true;
  const timestamp = new Date();
  submission = {
    form: "inquiries",
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#messageTextArea").value,
    timestamp,
  };
  db.collection("inquiries")
    .add(submission)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.location.href = "thankYou.html";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  // window.location.href = "thankYou.html";
});
