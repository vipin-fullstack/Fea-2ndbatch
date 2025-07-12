console.log("JS file loaded successfully!")

console.log("🔰 FEA Website script loaded!");

function showDateTime() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  const now = new Date();
  footer.textContent = `© FEA ${now.getFullYear()}  •  ${now.toLocaleString()}`;
}

function goToLogin() {
  alert("Login page abhi nahin banā – bas button test hua!");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");
  showDateTime();

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) loginBtn.addEventListener("click", goToLogin);
});
