export default class InstaService {
	constructor() {
		this._apiBase = 'http://localhost:3000';
	}

	getResource = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)	
		}

		return res.json();
	}
}