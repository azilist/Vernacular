const URL = "https://api.cloudinary.com/v1_1/db3pnddq8/auto/upload";

const $submission = document.querySelector("#submission-form");
const $submitBtn = document.querySelector("#submit-btn");

$submission.addEventListener("submit", async (e) => {
  e.preventDefault();
  $submitBtn.disabled = true;

  const submission = {
    form: "submissions",
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    medium: document.querySelector("#medium").value,
    artTitle: document.querySelector("#artTitle").value,
    artistBio: document.querySelector("#aboutYouTextArea").value,
    artInfo: document.querySelector("#aboutArtTextArea").value,
    files: [],
  };
  //add disabled to btn while

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();
  try {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "e4wj9kxo");

      await fetch(URL, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          submission.files.push(data.url);
        });
    }
    db.collection("submissions")
      .add(submission)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        window.location.href = "thankYou.html";
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  } catch (e) {
    console.log(e);
  }
});
