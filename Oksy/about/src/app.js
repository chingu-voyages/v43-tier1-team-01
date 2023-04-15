document.addEventListener("DOMContentLoaded", function () {
  const emailLinks = document.querySelectorAll(".email-link");

  const emailDisplays = document.querySelectorAll(".email-display");

  emailLinks.forEach(function (emailLink) {
    emailLink.addEventListener("click", function (event) {
      event.preventDefault();

      let emailText = emailLink.getAttribute("href");

      for (const emailDisplay of emailDisplays) {
        let emailDisplayID = emailDisplay.getAttribute("id");
        if (emailDisplayID == emailText) {
          emailDisplay.textContent = emailText;
          emailDisplay.style.display = "block";
          emailDisplay.style.color = "rgb(115, 115, 136)";
          emailDisplay.style.fontSize = "0.8rem";
          emailDisplay.style.marginBottom = "0.5rem";
        }
      }
    });
  });
});
