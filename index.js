import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY;
let priceData = {
	1: 50,
	2: 130,
	3: 250,
	5: 750,
	6: 1000,
	7: 1500,
	9: 5400,
	10: 11500,
	12: 270,
	13: 370,
	14: 650,
	15: 1300,
	16: 1850,
	18: 7500,
	19: 16000,
	22: 1400,
	23: 3300,
	24: 3800,
	25: 6600,
	27: 12500,
	29: 36000,
	32: 1700,
	33: 7500,
	34: 33000,
	49: 60000,
	51: 55,
	52: 125,
	53: 260,
	54: 2700,
	61: 300,
	64: 295,
	68: 3750,
	82: 50000,
	93: 17000,
	97: 3,
	129: 250,
	172: 70,
	173: 1200,
	174: 9000,
	176: 3100,
	183: 100,
	184: 300,
	209: 250,
	210: 100,
	372: 3,
	377: 20,
	378: 15,
	379: 20,
	392: 600,
	394: 3,
	401: 100,
	404: 300,
	417: 15,
	464: 225000,
	465: 975000,
	495: 7500,
	500: 7000,
	502: 9000,
	503: 20000,
	504: 11000,
	515: 28000,
	518: 100000,
	521: 650000,
	647: 900,
	649: 720,
	650: 600,
	731: 11250,
	814: 450000,
	856: 5,
	858: 5,
	859: 5,
	860: 5,
	861: 5,
	1123: 80,
	1290: 650,
	1321: 15,
	1322: 25,
};

// function updatePriceDataFromPage() {
// 	const priceElements = document.querySelectorAll('.price');

// 	priceElements.forEach(element => {
// 			const id = element.id.replace('-price', '');
// 			const sellString = element.dataset.sell.replace('$', '');
// 			const sell = sellString.includes(',') ? parseFloat(sellString.replace(',', '')) : parseFloat(sellString);

// 			// Add or update data in priceData
// 			priceData[id] = sell;
// 	});
// }

// // Call the function to update priceData from the new page
// updatePriceDataFromPage();

// Lookup the price of an item by its name

// console.log(itemsAndPrices[itemName]); // Outputs: 10.99

fetch(
	`https://api.torn.com/market/51,55,59,56,58,57,53,60,52,54,994,993,997,1058?selections=itemmarket&key=${API_KEY}`
)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	});
