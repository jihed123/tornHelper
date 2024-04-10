// import fetch from "node-fetch";
// import dotenv from "dotenv";
// dotenv.config();
// const API_KEY = process.env.API_KEY;
let API_KEY = "";
//TODO: problem in the number of numberOfAPIRequests and saving them fetching dont add to the number /every element green

let priceData = {
	1: 50,
	2: 130,
	3: 250,
	4: 500,
	5: 750,
	6: 1000,
	7: 1500,
	8: 3000,
	9: 5400,
	10: 11500,
	11: 53000,
	12: 270,
	13: 370,
	14: 650,
	15: 1300,
	16: 1850,
	17: 3500,
	18: 7500,
	19: 16000,
	20: 37000,
	21: 900000,
	22: 1400,
	23: 3300,
	24: 3800,
	25: 6600,
	26: 10000,
	27: 12500,
	28: 21400,
	29: 36000,
	30: 75000,
	31: 670000,
	32: 1700,
	33: 7500,
	34: 33000,
	35: 15,
	36: 20,
	37: 16,
	38: 20,
	39: 22,
	40: 20,
	41: 25,
	42: 25,
	43: 20,
	45: 65,
	46: 32,
	47: 35,
	48: 40,
	49: 60000,
	50: 750000,
	51: 55,
	52: 125,
	53: 260,
	54: 2700,
	55: 35,
	56: 95,
	57: 185,
	58: 20,
	59: 70,
	60: 225,
	61: 300,
	62: 150,
	63: 1250000,
	64: 295,
	65: 250,
	66: 10000,
	67: 7500,
	68: 3750,
	69: 500,
	70: 4500,
	71: 10000,
	72: 75000,
	73: 200000,
	77: 29000,
	78: 32000,
	79: 55000,
	80: 43000,
	81: 80000,
	82: 50000,
	83: 69000,
	84: 59000,
	85: 120000,
	86: 21000,
	87: 13000,
	88: 15000,
	89: 23000,
	90: 9000,
	91: 7600,
	92: 5600,
	93: 17000,
	94: 7000,
	95: 25000,
	96: 2,
	97: 3,
	99: 300,
	103: 100,
	104: 200,
	107: 325000,
	108: 600000,
	110: 750,
	111: 5000,
	129: 250,
	147: 40,
	151: 50,
	154: 400,
	159: 15,
	172: 70,
	173: 1200,
	174: 9000,
	175: 4250,
	176: 3100,
	177: 55000,
	178: 4750,
	180: 5,
	181: 3100,
	182: 10,
	183: 100,
	184: 300,
	186: 15,
	187: 10,
	189: 900,
	209: 250,
	210: 100,
	215: 25,
	217: 75000,
	218: 750,
	219: 200000,
	220: 7000,
	221: 6500,
	222: 10000,
	223: 4000000,
	224: 2000,
	225: 50000,
	226: 15000,
	227: 400,
	228: 6500,
	229: 11000,
	230: 200,
	231: 35000,
	232: 55000,
	233: 40000,
	234: 2000,
	235: 4000,
	236: 40000,
	237: 80000,
	238: 700,
	239: 400,
	240: 17000000,
	241: 10000,
	242: 15000,
	243: 400,
	244: 2000,
	245: 300,
	246: 300,
	247: 13000,
	248: 70000,
	249: 5000,
	250: 40000,
	251: 60000,
	252: 7000,
	253: 200,
	254: 25000,
	255: 2500000,
	256: 10000,
	257: 30000,
	258: 8000,
	259: 350,
	260: 250,
	261: 25,
	262: 300,
	263: 400,
	264: 500,
	265: 1800,
	266: 150,
	267: 4000,
	268: 750,
	269: 300,
	270: 30,
	271: 350,
	272: 700,
	273: 300,
	274: 300,
	275: 10000,
	276: 4000,
	277: 300,
	278: 7000,
	279: 35000,
	280: 300,
	281: 300,
	282: 1500,
	283: 23500000,
	294: 30,
	305: 5,
	306: 5,
	307: 5,
	308: 5,
	309: 5,
	310: 10,
	332: 2700000,
	333: 4500000,
	334: 9000000,
	335: 35000,
	358: 70000,
	361: 700000,
	372: 3,
	377: 20,
	378: 15,
	379: 20,
	384: 11000,
	385: 4000,
	391: 80000,
	392: 600,
	393: 10,
	394: 3,
	395: 300000,
	397: 6000000,
	398: 3750000,
	399: 15000000,
	400: 150000,
	401: 100,
	402: 15000,
	403: 10,
	404: 300,
	405: 1,
	406: 30000,
	407: 1750,
	408: 15000,
	410: 15000,
	411: 13000,
	412: 3000,
	413: 22500,
	414: 2000,
	415: 25000,
	416: 1,
	417: 15,
	418: 7500,
	419: 1000000,
	420: 2000000,
	421: 5000000,
	426: 60,
	427: 175,
	429: 10,
	430: 300000,
	431: 500,
	432: 10,
	433: 300,
	434: 3000,
	436: 4000,
	438: 10000,
	439: 300,
	463: 675000,
	464: 225000,
	465: 975000,
	483: 500,
	484: 500,
	485: 500,
	486: 500,
	487: 500,
	488: 500,
	489: 500,
	490: 500,
	494: 8000,
	495: 7500,
	496: 8000,
	497: 7500,
	498: 6500,
	499: 8000,
	500: 7000,
	501: 5500,
	502: 9000,
	503: 20000,
	504: 11000,
	505: 8500,
	506: 7300,
	508: 30000,
	509: 21000,
	510: 27000,
	511: 22000,
	512: 19000,
	513: 27000,
	514: 60000,
	515: 28000,
	516: 32000,
	517: 750000,
	518: 100000,
	520: 860000,
	521: 650000,
	522: 700000,
	523: 950000,
	524: 70000,
	527: 20,
	528: 25,
	529: 75,
	534: 10,
	535: 15,
	536: 35,
	537: 35,
	540: 500,
	557: 15,
	559: 100,
	560: 4,
	562: 25,
	581: 20,
	586: 55,
	587: 45,
	598: 75,
	601: 60,
	603: 300,
	606: 80,
	607: 30,
	608: 60,
	609: 120,
	610: 70,
	612: 350000,
	613: 200000,
	614: 800000,
	615: 40000000,
	616: 7500,
	617: 3000,
	618: 300,
	619: 1000,
	620: 500,
	621: 15000,
	622: 7500,
	623: 4000,
	624: 6000,
	625: 20000,
	626: 3000,
	634: 5,
	635: 200,
	636: 15,
	637: 35,
	639: 35000,
	640: 320000,
	641: 71000,
	643: 11500,
	645: 58000,
	646: 4200,
	647: 900,
	648: 850,
	649: 720,
	650: 600,
	651: 2600000,
	652: 2450000,
	653: 1920000,
	654: 1870000,
	697: 1,
	698: 15,
	700: 27,
	701: 4,
	702: 5,
	703: 17,
	707: 1,
	731: 11250,
	742: 150,
	791: 7,
	814: 450000,
	856: 5,
	857: 5,
	858: 5,
	859: 5,
	860: 5,
	861: 5,
	862: 5,
	863: 5,
	864: 5,
	868: 1,
	882: 1,
	883: 1,
	884: 450,
	885: 50,
	887: 5,
	888: 75,
	889: 30,
	890: 250,
	892: 5,
	894: 200,
	895: 30,
	896: 2000,
	897: 1,
	898: 10000,
	899: 25000,
	900: 5000,
	901: 5,
	902: 15,
	903: 10,
	904: 75,
	905: 100,
	906: 10,
	907: 10,
	909: 1,
	956: 45,
	1039: 40,
	1078: 10,
	1079: 55,
	1080: 700,
	1081: 10,
	1082: 75,
	1083: 1250,
	1085: 10,
	1086: 5000,
	1087: 5,
	1089: 1,
	1091: 45,
	1092: 15,
	1094: 2,
	1095: 3,
	1096: 125,
	1123: 80,
	1178: 3,
	1189: 125,
	1198: 20,
	1199: 8500,
	1200: 350,
	1201: 5,
	1202: 30,
	1203: 495,
	1205: 60,
	1206: 35,
	1207: 15,
	1208: 10,
	1209: 3750,
	1210: 65,
	1211: 8000,
	1212: 20,
	1213: 25,
	1214: 20,
	1215: 50,
	1216: 220,
	1217: 15,
	1219: 200,
	1220: 75,
	1221: 30,
	1222: 200,
	1223: 300,
	1225: 3750,
	1226: 200,
	1227: 20,
	1228: 20,
	1230: 300,
	1231: 2150,
	1232: 400,
	1233: 700,
	1234: 65,
	1235: 200,
	1236: 600,
	1237: 25,
	1238: 2700,
	1240: 2000,
	1241: 200,
	1242: 100,
	1243: 22000,
	1244: 5500,
	1245: 45000,
	1246: 210,
	1247: 25000,
	1248: 25,
	1249: 55,
	1250: 1500,
	1251: 75500,
	1252: 100,
	1253: 6500,
	1254: 90,
	1255: 800,
	1256: 4000,
	1257: 1250,
	1258: 2000,
	1259: 4325,
	1260: 30000,
	1261: 20,
	1262: 500,
	1263: 300,
	1264: 700,
	1265: 150,
	1266: 20,
	1267: 35,
	1268: 50,
	1269: 30,
	1270: 10,
	1272: 5,
	1273: 5,
	1274: 10,
	1275: 20,
	1276: 20,
	1277: 35,
	1278: 4000,
	1279: 1900,
	1280: 700,
	1281: 2200,
	1282: 400,
	1283: 200,
	1284: 150,
	1285: 15,
	1286: 20,
	1287: 30,
	1288: 10,
	1289: 50,
	1290: 650,
	1291: 5,
	1294: 3,
	1300: 255,
	1301: 180,
	1303: 20,
	1306: 175,
	1313: 265,
	1314: 6500,
	1315: 45250,
	1316: 20,
	1317: 125,
	1318: 10,
	1319: 35,
	1320: 65,
	1321: 15,
	1322: 25,
	1327: 3500,
	1328: 10,
	1329: 45,
	1330: 60,
	1332: 40,
	1333: 15,
	1334: 10,
	1335: 6500,
	1336: 62500,
	1337: 50000,
	1338: 10,
	1339: 180000,
	1340: 35,
	1341: 3250,
	1342: 122500,
	1343: 580000,
	1345: 75000,
	1349: 95000,
	1350: 230000,
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
const maxAPIRequestsPerMinute = 99;
let numberOfAPIRequests = 0;
let lastResetTime = Date.now();
// Function to save data to storage.local
// Function to save data to browser.storage.local
function saveData() {
	console.log(numberOfAPIRequests, lastResetTime);
	browser.storage.local
		.set({
			numberOfAPIRequests: numberOfAPIRequests,
			lastResetTime: lastResetTime,
		})
		.then(() => {
			console.log("Data saved:", {
				numberOfAPIRequests: numberOfAPIRequests,
				lastResetTime: lastResetTime,
			});
		})
		.catch((error) => {
			console.error("Error saving data:", error);
		});
}

// Function to retrieve data from browser.storage.local and initialize variables
function retrieveData() {
	return browser.storage.local
		.get(["numberOfAPIRequests", "lastResetTime", "apiKey"])
		.then((result) => {
			if (result.numberOfAPIRequests !== undefined) {
				numberOfAPIRequests = result.numberOfAPIRequests;
			}
			if (result.apiKey !== undefined) {
				API_KEY = result.apiKey;
			}

			if (result.lastResetTime !== undefined) {
				lastResetTime = result.lastResetTime;
			}
			console.log("Retrieved data:", {
				numberOfAPIRequests: numberOfAPIRequests,
				apiKey: API_KEY,
				lastResetTime: lastResetTime,
			});
		})
		.catch((error) => {
			console.error("Error retrieving data:", error);
		});
}
async function fetchPriceData(itemid) {
	// TODO: improve rate limiting to be more accurate
	if (API_KEY === "") {
		console.error("API Key not set");
		return;
	}

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

	let value = "";
	if (priceData[itemid] === undefined) {
		console.error("Item not found in priceData : ", itemid);
		return "notFound";
	}
	if (priceData[itemid] < 20) {
		console.log("Item price is too low to be profitable");
		return "notFound";
	}
	console.log(numberOfAPIRequests);
	numberOfAPIRequests++;
	try {
		const response = await fetch(
			`https://api.torn.com/market/${itemid}?selections=bazaar,itemmarket&key=${API_KEY}`
		);
		await response.json().then((data) => {
			// console.log("data.itemmarket[0].cost", data.itemmarket[0].cost);
			// console.log("data.bazaar[0].cost", data.bazaar[0].cost);
			// console.log("priceData[itemid]", priceData[itemid]);
			if (data.itemmarket != undefined) {
				if (data.itemmarket[0].cost < priceData[itemid]) {
					value = "profitable";
					console.log("item market cost:", data.itemmarket[0].cost);
					console.log(
						`Profit: ${priceData[itemid] - data.itemmarket[0].cost}$`
					);
				}
			} else {
				value = "notProfitable";
			}
			if (data.bazaar != undefined) {
				if (data.bazaar[0].cost < priceData[itemid]) {
					value = "profitable";
					console.log("bazaar cost:", data.bazaar[0].cost);
					console.log(`Profit: ${priceData[itemid] - data.bazaar[0].cost}$`);
				} else {
					value = "notProfitable";
				}
			}
		});
	} catch (error) {
		console.error("Error fetching price data:", error);
	}

	saveData();

	return value;
}
// Call retrieveData() when the extension is loaded to initialize variables
retrieveData();

// let itemToLookup = 51;
// let bool = fetchPriceData(itemToLookup);

async function checkIfDataItemsLoaded() {
	const elementsWithDataItem = document.querySelectorAll("[data-item]");
	if (elementsWithDataItem.length > 0) {
		if (API_KEY != "") {
			for (let i = 0; i < elementsWithDataItem.length; i++) {
				const itemid = elementsWithDataItem[i].dataset.item;
				const searchName = elementsWithDataItem[i].querySelector(".searchname");
				fetchPriceData(itemid).then((value) => {
					if (value == "profitable") {
						if (searchName) {
							searchName.style.color = "green";
						}
						if (value == "notProfitable") {
							if (searchName) {
								searchName.style.color = "red";
							}
						}
					}
				});
			}
		}
	} else {
		// If data-item elements are not yet loaded, wait and check again
		setTimeout(checkIfDataItemsLoaded, 1000); // Adjust the timeout as needed
	}
}

checkIfDataItemsLoaded();
// check window url
// if (window.location.href.includes('item.php')) {

const dataExemple = {
	bazaar: [
		{
			ID: 46813022,
			cost: 800,
			quantity: 3,
		},
	],
	itemmarket: [
		{
			ID: 221082251,
			cost: 360,
			quantity: 1,
		},
	],
};
