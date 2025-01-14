// Function to calculate Exponential Moving Average (EMA)
function calculateEMA(prices, period) {
	let k = 2 / (period + 1);
	let ema = [prices[0]]; // Use first price as the first EMA value

	for (let i = 1; i < prices.length; i++) {
		ema.push(prices[i] * k + ema[i - 1] * (1 - k));
	}

	return ema;
}

// Function to calculate MACD and Signal line
function calculateMACD(prices) {
	const shortPeriod = 12;
	const longPeriod = 26;
	const signalPeriod = 9;

	// Calculate EMAs for short and long periods
	const shortEMA = calculateEMA(prices, shortPeriod);
	const longEMA = calculateEMA(prices, longPeriod);

	// Calculate MACD line (short EMA - long EMA)
	const macdLine = shortEMA.slice(longPeriod - 1).map((shortEma, index) => shortEma - longEMA[index]);

	// Calculate Signal line (9-period EMA of the MACD line)
	const signalLine = calculateEMA(macdLine, signalPeriod);

	// Calculate Histogram (MACD line - Signal line)
	const histogram = macdLine.slice(signalPeriod - 1).map((macd, index) => macd - signalLine[index]);

	return { macdLine, signalLine, histogram };
}

// Example: Assuming you have closing price data (from an API, CSV, etc.)
const closingPrices = [23.45, 24.12, 25.43, 26.78, 27.65, 28.23, 29.1, 30.2, 31.0, 32.12, 33.45, 34.67, 35.21];

// Calculate MACD, Signal line, and Histogram
const macdData = calculateMACD(closingPrices);

console.log('MACD Line:', macdData.macdLine);
console.log('Signal Line:', macdData.signalLine);
console.log('Histogram:', macdData.histogram);
