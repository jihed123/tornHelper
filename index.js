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
let numberOfAPIRequests = 0;
let maxAPIRequestsPerMinute = 99;
let lastResetTime = Date.now();

async function fetchPriceData(itemid) {
	// TODO: improve rate limiting to be more accurate
	const currentTime = Date.now();
	const elapsedTimeSinceReset = currentTime - lastResetTime;

	if (elapsedTimeSinceReset >= 60000) {
		// 60000 milliseconds = 1 minute
		numberOfAPIRequests = 0;
		lastResetTime = currentTime;
	}

	if (numberOfAPIRequests >= maxAPIRequestsPerMinute) {
		console.log("Max API requests reached");
		return;
	}

	numberOfAPIRequests++;

	try {
		const response = await fetch(
			`https://api.torn.com/market/${itemid}?selections=bazaar,itemmarket&key=${API_KEY}`
		);
		const data = await response.json();

		if (data.itemmarket[0].cost < priceData[itemid]) {
			console.log(data.itemmarket[0].cost);
			console.log(`Profit: ${priceData[itemid] - data.itemmarket[0].cost}$`);
		}

		if (data.bazaar[0].cost > priceData[itemid]) {
			console.log(data.bazaar[0].cost);
			console.log(`Profit: ${priceData[itemid] - data.bazaar[0].cost}$`);
		}
	} catch (error) {
		console.error("Error fetching price data:", error);
	}
}

let itemToLookup = 51;
fetchPriceData(itemToLookup);

// fetch(
// 	`https://api.torn.com/market/${itemToLookup}?selections=itemmarket&key=${API_KEY}`
// )
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error("Network response was not ok");
// 		}
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data.itemmarket[0].cost);
// 		if (data.itemmarket[0].cost < priceData[itemToLookup]) {
// 			console.log("Buy");
// 		} else {
// 			console.log("Don't buy");
// 		}
// 	})
// 	.catch((error) => {
// 		console.error("There was a problem with the fetch operation:", error);
// 	});

const dataExemple = {
	itemmarket: [
		{ ID: 221072684, cost: 80, quantity: 1 },
		{ ID: 221072687, cost: 80, quantity: 1 },
		{ ID: 221074033, cost: 100, quantity: 1 },
		{ ID: 221074032, cost: 100, quantity: 1 },
		{ ID: 221074031, cost: 100, quantity: 1 },
		{ ID: 221074030, cost: 100, quantity: 1 },
		{ ID: 221074029, cost: 100, quantity: 1 },
		{ ID: 221071066, cost: 100, quantity: 1 },
		{ ID: 221038744, cost: 350, quantity: 1 },
		{ ID: 221038743, cost: 350, quantity: 1 },
		{ ID: 221038742, cost: 350, quantity: 1 },
		{ ID: 221038745, cost: 350, quantity: 1 },
		{ ID: 221038746, cost: 350, quantity: 1 },
		{ ID: 221038749, cost: 350, quantity: 1 },
		{ ID: 221038747, cost: 350, quantity: 1 },
		{ ID: 221038748, cost: 350, quantity: 1 },
		{ ID: 221038750, cost: 350, quantity: 1 },
		{ ID: 221038751, cost: 350, quantity: 1 },
		{ ID: 221038752, cost: 350, quantity: 1 },
		{ ID: 221038753, cost: 350, quantity: 1 },
		{ ID: 221038754, cost: 350, quantity: 1 },
		{ ID: 221038755, cost: 350, quantity: 1 },
		{ ID: 221038756, cost: 350, quantity: 1 },
		{ ID: 221038757, cost: 350, quantity: 1 },
		{ ID: 221038758, cost: 350, quantity: 1 },
		{ ID: 221038759, cost: 350, quantity: 1 },
		{ ID: 221038760, cost: 350, quantity: 1 },
		{ ID: 221038761, cost: 350, quantity: 1 },
		{ ID: 221038762, cost: 350, quantity: 1 },
		{ ID: 221038763, cost: 350, quantity: 1 },
		{ ID: 221038764, cost: 350, quantity: 1 },
		{ ID: 221038765, cost: 350, quantity: 1 },
		{ ID: 221038766, cost: 350, quantity: 1 },
		{ ID: 221038767, cost: 350, quantity: 1 },
		{ ID: 221038768, cost: 350, quantity: 1 },
		{ ID: 221038769, cost: 350, quantity: 1 },
		{ ID: 221007234, cost: 385, quantity: 1 },
		{ ID: 221007236, cost: 385, quantity: 1 },
		{ ID: 221007235, cost: 385, quantity: 1 },
		{ ID: 220926369, cost: 389, quantity: 1 },
		{ ID: 220926365, cost: 389, quantity: 1 },
		{ ID: 220926366, cost: 389, quantity: 1 },
		{ ID: 220926368, cost: 389, quantity: 1 },
		{ ID: 220926370, cost: 389, quantity: 1 },
		{ ID: 220831018, cost: 395, quantity: 1 },
		{ ID: 220831019, cost: 395, quantity: 1 },
		{ ID: 220831020, cost: 395, quantity: 1 },
		{ ID: 220831021, cost: 395, quantity: 1 },
		{ ID: 220831022, cost: 395, quantity: 1 },
		{ ID: 220831024, cost: 395, quantity: 1 },
		{ ID: 220537136, cost: 398, quantity: 1 },
		{ ID: 220537137, cost: 398, quantity: 1 },
		{ ID: 220537138, cost: 398, quantity: 1 },
		{ ID: 220076204, cost: 399, quantity: 1 },
		{ ID: 220076208, cost: 399, quantity: 1 },
		{ ID: 220076205, cost: 399, quantity: 1 },
		{ ID: 220076206, cost: 399, quantity: 1 },
		{ ID: 220240235, cost: 450, quantity: 1 },
		{ ID: 220240234, cost: 450, quantity: 1 },
		{ ID: 218580130, cost: 500, quantity: 1 },
		{ ID: 220068781, cost: 500, quantity: 1 },
		{ ID: 220479598, cost: 500, quantity: 1 },
		{ ID: 220383629, cost: 514, quantity: 1 },
		{ ID: 220383627, cost: 514, quantity: 1 },
		{ ID: 220383626, cost: 514, quantity: 1 },
		{ ID: 220383630, cost: 514, quantity: 1 },
		{ ID: 220383628, cost: 514, quantity: 1 },
		{ ID: 220111179, cost: 900, quantity: 1 },
		{ ID: 220111178, cost: 900, quantity: 1 },
		{ ID: 219697266, cost: 1000, quantity: 1 },
		{ ID: 220348313, cost: 1000, quantity: 1 },
		{ ID: 220223295, cost: 1221, quantity: 1 },
		{ ID: 218717966, cost: 1900, quantity: 1 },
		{ ID: 218722725, cost: 1900, quantity: 1 },
		{ ID: 218722728, cost: 1900, quantity: 1 },
		{ ID: 218722727, cost: 1900, quantity: 1 },
		{ ID: 218722729, cost: 1900, quantity: 1 },
		{ ID: 218717965, cost: 1900, quantity: 1 },
		{ ID: 218722726, cost: 1900, quantity: 1 },
		{ ID: 219277029, cost: 2000, quantity: 1 },
		{ ID: 219277030, cost: 2000, quantity: 1 },
		{ ID: 217704654, cost: 2000, quantity: 1 },
		{ ID: 219764193, cost: 2000, quantity: 1 },
		{ ID: 219764195, cost: 2000, quantity: 1 },
		{ ID: 219764194, cost: 2000, quantity: 1 },
		{ ID: 219764196, cost: 2000, quantity: 1 },
		{ ID: 219999844, cost: 2000, quantity: 1 },
		{ ID: 219764192, cost: 2000, quantity: 1 },
		{ ID: 219764197, cost: 2000, quantity: 1 },
		{ ID: 219999843, cost: 2000, quantity: 1 },
		{ ID: 219764191, cost: 2000, quantity: 1 },
		{ ID: 217647190, cost: 2969, quantity: 1 },
		{ ID: 217647187, cost: 2969, quantity: 1 },
		{ ID: 217647189, cost: 2969, quantity: 1 },
		{ ID: 217647188, cost: 2969, quantity: 1 },
		{ ID: 217534506, cost: 3000, quantity: 1 },
		{ ID: 217534507, cost: 3000, quantity: 1 },
		{ ID: 217534508, cost: 3000, quantity: 1 },
		{ ID: 217534505, cost: 3000, quantity: 1 },
		{ ID: 217534509, cost: 3000, quantity: 1 },
	],
};
