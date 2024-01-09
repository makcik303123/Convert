import { convertFile } from "./convert.js";
import { settings } from "./variables.js";
import { createHitHTML } from "./actions/createHitHTML.js";
import { createYvagaHTML } from "./actions/createYvagaHTML.js";
import { sortBy } from "./actions/sortBy.js";

const inputFile = document.getElementById("inputFile");
const textareaJson = document.getElementById("textareaJson");
const textareaSettings = document.getElementById("textareaSettings");
const textareaAnswer = document.getElementById("textareaAnswer");
const radioButtons = document.querySelectorAll('input[name="action"]');
const successBtn = document.getElementById("successBtn");

let activeBtn;

const returnAnswer = () => {
	let dataJson;

	console.log(textareaSettings.textContent);

	switch (activeBtn) {
		case 0:
			dataJson = createHitHTML(
				JSON.parse(textareaJson.textContent),
				JSON.parse(textareaSettings.textContent)
			);
			break;
		case 1:
			dataJson = createYvagaHTML(
				JSON.parse(textareaJson.textContent),
				JSON.parse(textareaSettings.textContent)
			);
			break;
		case 2:
			dataJson = sortBy(
				JSON.parse(textareaJson.textContent),
				JSON.parse(textareaSettings.textContent)
			);
			break;

		default:
			break;
	}

	textareaAnswer.textContent = dataJson;
};

const handlerBtnRadio = (index) => {
	textareaSettings.textContent = JSON.stringify(settings[index]);
	activeBtn = index;
};

const fileHandler = async (file) => {
	const data = await convertFile(file);
	console.log(data);
	textareaJson.textContent = data;
};

textareaJson.addEventListener("change", (event) => {
	textareaJson.textContent = event.target.value;
});

textareaSettings.addEventListener("change", (event) => {
	textareaSettings.textContent = event.target.value;
});

successBtn.addEventListener("click", () => returnAnswer());

radioButtons.forEach((btn, i) => {
	btn.addEventListener("change", () => handlerBtnRadio(i));
});

inputFile.addEventListener("change", (event) =>
	fileHandler(event.target.files[0])
);
