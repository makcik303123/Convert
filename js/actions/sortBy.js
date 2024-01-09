function sortBy(data, settings) {
	const { sortBy } = settings;

	const keys = Object.keys(data[0]);

	return JSON.stringify(data.sort(byField(keys[sortBy])));

	function byField(nameField) {
		return (a, b) => (a[nameField] > b[nameField] ? 1 : -1);
	}
}

export { sortBy };
