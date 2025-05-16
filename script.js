
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
function toggleSettings() {
  const panel = document.getElementById('settings-panel');
  panel.classList.toggle('hidden');
}
function toggleCleanMode() {
  document.body.classList.toggle('clean-mode');
}
function changeBackground(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.body.style.backgroundImage = `url('${e.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
}
function saveNickname() {
  const nickname = document.getElementById('nicknameInput').value;
  if (nickname) {
    alert('Nickname saved: ' + nickname);
  }
}
