const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

const menuBtn = document.getElementById("menuBtn");
const profileBtn = document.getElementById("profileBtn");

const profilePanel = document.getElementById("profilePanel");
const settingsPanel = document.getElementById("settingsPanel");
const accountPanel = document.getElementById("accountPanel");
const savedPanel = document.getElementById("savedPanel");

const settingsBtn = document.getElementById("settingsBtn");
const accountBtn = document.getElementById("accountBtn");
const savedBtn = document.getElementById("savedBtn");

// Sidebar
menuBtn.onclick = () => {
  sidebar.classList.toggle("open");
  backdrop.classList.add("show");
};

// Panels
function openPanel(panel){
  panel.classList.add("open");
  backdrop.classList.add("show");
}

profileBtn.onclick   = () => openPanel(profilePanel);
settingsBtn.onclick  = () => openPanel(settingsPanel);
accountBtn.onclick   = () => openPanel(accountPanel);
savedBtn.onclick     = () => openPanel(savedPanel);

// Close everything when clicking backdrop
backdrop.onclick = () => {
  sidebar.classList.remove("open");
  profilePanel.classList.remove("open");
  settingsPanel.classList.remove("open");
  accountPanel.classList.remove("open);
  savedPanel.classList.remove("open");
  backdrop.classList.remove("show");
};
