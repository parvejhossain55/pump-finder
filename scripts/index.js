const mexc = require('../api/mexc.js');
const { SMA } = require('technicalindicators');

(async () => {
	try {
		const marketData = await mexc.getKlinesData('BTCUSDT', '5m', 20);

		const data = marketData.map((candle) => parseFloat(candle[4]));

		const smaValues = SMA.calculate({
			period: 14,
			values: data,
		});

		console.log('SMA Values:', smaValues);
	} catch (err) {
		console.error('Error:', err.message);
	}
})();
