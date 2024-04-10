document
	.getElementById("apiKeyForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		var apiKey = document.getElementById("apiKey").value;
		var margin = document.getElementById("margin").value;
		// Save the API key to browser storage
		browser.storage.local
			.set({ apiKey: apiKey, margin: margin })
			.then(function () {
				console.log("API key and margin saved successfully!");
				// Provide feedback to the user
				document.getElementById("message").textContent =
					"API key and margin saved successfully!";
			})
			.catch(function (error) {
				console.error("Error saving API or margin value:", error); // Log any error
				// Provide feedback to the user
				document.getElementById("message").textContent =
					"An error occurred while saving the API key or margin value. Please try again.";
			});
	});
// TODO: check if only one of the fields is filled
