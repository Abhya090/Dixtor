const password = "DixtorC2";
const workspaceId = "YOUR_WORKSPACE_ID";

async function validatePassword() {
 const inputPassword = document.getElementById("password").value;
 if (inputPassword === password) {
  document.getElementById("command-container").style.display = "block";
 } else {
  alert("Invalid password!");
 }
}

async function sendCommand() {
 const command = document.getElementById("command").value;
 const response = await fetch(`(link unavailable), {
  method: "POST",
  headers: {
   "Authorization": `Bearer YOUR_GITHUB_API_TOKEN`,
   "Content-Type": "application/json"
  },
  body: JSON.stringify({
   "command": command
  })
 });

 if (response.ok) {
  alert("Command sent successfully!");
 } else {
  alert("Error sending command:");
  console.error(response);
 }
}
