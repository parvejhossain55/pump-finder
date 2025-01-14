const SMA = require('./indicators/SMA.js');
const EMA = require('./indicators/EMA.js');

try {
	const prices = [10, 22, 73, 64, 5, 16, 57, 78, 29, 10];
	const period = 10;

	console.time('SMA Calculation');
	const smaValues = SMA(prices, period);
	console.timeEnd('SMA Calculation');
	console.time('EMA Calculation');
	const emAValues = EMA(prices, period);
	console.timeEnd('EMA Calculation');

	console.log('First 10 SMA values:', smaValues);
	console.log('First 10 ema values:', emAValues);
} catch (error) {
	console.error(error.message);
}
