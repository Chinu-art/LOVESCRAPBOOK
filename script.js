document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  function showSection(id) {
    document.querySelectorAll(".content-section").forEach(section => {
      section.style.display = "none";
    });
    const active = document.getElementById(id);
    if (active) active.style.display = "block";
  }

  window.showSection = showSection;

  window.toggleSettings = function () {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('hidden');
  }

  window.toggleCleanMode = function () {
    document.body.classList.toggle('clean-mode');
  }

  window.changeBackground = function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        document.body.style.backgroundImage = `url('${reader.result}')`;
      };
      reader.readAsDataURL(file);
    }
  }

  window.saveNickname = function () {
    const nickname = document.getElementById('nicknameInput').value;
    if (nickname) {
      document.querySelector('h1').textContent = `This is our space ${nickname} 💕`;
    }
  }

  // Optional: show the first section (e.g., gallery) by default
  showSection('gallery');
});
