const convertFile = async (file) => {
	const workbook = await readExcelFile(file);
	const sheetNameList = workbook.SheetNames;
	const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
	const jsonData = JSON.stringify(data, null, 2);
	return jsonData;

	// Вы можете здесь отправить jsonData на сервер или выполнить другие действия
};

const readExcelFile = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			const data = new Uint8Array(event.target.result);
			const workbook = XLSX.read(data, { type: "array" });
			resolve(workbook);
		};

		reader.onerror = (error) => {
			reject(error);
		};

		reader.readAsArrayBuffer(file);
	});
};

export { convertFile };
