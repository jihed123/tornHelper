browser.runtime.onMessage.addListener((message) => {
	if (message.action === "saveData") {
		saveData(message.data);
	}
});

// Function to save data
function saveData(data) {
	browser.storage.local
		.set(data)
		.then(() => {
			console.log("Data saved:", data);
		})
		.catch((error) => {
			console.error("Error saving data:", error);
		});
}
