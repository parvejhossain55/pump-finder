/**
 * Calculates the Simple Moving Average (SMA) for a given period and price data.
 * @param {number[]} prices - Array of price data.
 * @param {number} period - The period over which to calculate the SMA.
 * @returns {number} - The most recent SMA value.
 */
function SMA(prices, period) {
	if (prices.length < period) {
		throw new Error('Not enough data to calculate SMA.');
	}

	let windowSum = 0;

	for (let i = prices.length - period; i < prices.length; i++) {
		windowSum += prices[i];
	}

	return windowSum / period;
}

module.exports = SMA;
