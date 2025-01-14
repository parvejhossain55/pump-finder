const SMA = require('./SMA');

/**
 * Function to calculate the Exponential Moving Average (EMA)
 * @param {Array<number>} prices - Array of closing prices.
 * @param {number} period - The number of periods for the EMA.
 * @returns {Array<number>} - Array of EMA values.
 */
// function calculateEMA(prices, period) {
// 	if (prices.length < period) {
// 		throw new Error('Not enough data points to calculate EMA.');
// 	}

// 	const k = 2 / (period + 1);

// 	const ema = [];

// 	const sma = SMA(prices, period);
// 	ema.push(sma);

// 	for (let i = period; i < prices.length; i++) {
// 		const currentEMA = (prices[i] - ema[ema.length - 1]) * k + ema[ema.length - 1];
// 		ema.push(currentEMA);
// 	}

// 	return ema;
// }

function calculateEMA(prices, period) {
	if (prices.length < period) {
		throw new Error('Not enough data points to calculate EMA.');
	}

	const k = 2 / (period + 1);
	let currentEMA = SMA(prices, period); // Start with the SMA as the first EMA value

	for (let i = period; i < prices.length; i++) {
		currentEMA = (prices[i] - currentEMA) * k + currentEMA;
	}

	return currentEMA; // Only returns the last EMA value
}

// Example Usage
const prices = [90, 52, 54, 53, 55, 70, 60, 62, 95, 64, 66, 65, 45, 10, 10, 50, 60, 62, 87, 45, 65, 33];

try {
	console.time('ema');
	const emaValues = calculateEMA(prices, 9);
	const emaValues1 = calculateEMA(prices, 21);
	console.timeEnd('ema');
	console.log('EMA Values:', emaValues, emaValues1);
} catch (error) {
	console.error(error.message);
}
