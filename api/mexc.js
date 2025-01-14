const axios = require('axios');

class MexcSDK {
	constructor() {
		this.apiBaseUrl = 'https://api.mexc.com/api/v3';
	}

	// Fetch Klines (candlestick) data for a symbol
	async getKlinesData(symbol, interval, limit = 100) {
		try {
			const response = await axios.get(`${this.apiBaseUrl}/klines`, {
				params: {
					symbol,
					interval,
					limit,
				},
			});
			return response.data;
		} catch (error) {
			console.log('error', error);
			// throw new Error(`Failed to fetch Kline data: ${error.message}`);
		}
	}
}

module.exports = new MexcSDK();
