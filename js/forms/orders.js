const $order = document.querySelector("#order-form");
const $submitBtn = document.querySelector("#submit-btn");

$order.addEventListener("submit", (e) => {
  e.preventDefault();
  $submitBtn.disabled = true;
  const timestamp = new Date();
  const submission = {
    form: "order",
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    location: {
      address: document.querySelector("#address").value,
      apt: document.querySelector("#address2").value,
      city: document.querySelector("#city").value,
      state: document.querySelector("#state").value,
      zip: document.querySelector("#zip").value,
      country: document.querySelector("#country").value,
    },
    outsideChicago: document.querySelector("#inlineFormCheck").value,
    comments: document.querySelector("#messageTextArea").value,
    timestamp,
  };
  db.collection("orders")
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
