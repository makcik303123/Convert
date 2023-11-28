const createHitHTML = (arrProducts, fields) => {
	console.log(arrProducts);
	console.log(fields);
	let result = "";

	arrProducts.forEach((product) => {
		const arrKeys = Object.keys(product);

		console.log(product[arrKeys[fields.plashka]]);

		const icon =
			product[arrKeys[fields.plashka]] === fields.plashkaAll
				? "all"
				: "standart";

		const productHTML = `<div class="table__product">
	                        <div class="table__product-container">
	                            <div class="product__icon">
	                                <img src="/UserFiles/images/catalog/${icon}.jpg" alt="" />
	                            </div>
	                            <img class="product__image" src="/UserFiles/images/catalog/${
																product[arrKeys[fields.id]]
															}.jpg" alt="" />
	                            <div class="product__info">
	                                <span class="product__title">${
																		product[arrKeys[fields.name]]
																	}</span>
	                                <div class="product__price-block">
	                                    <span class="product__price">${
																				product[arrKeys[fields.price]]
																			}</span>
	                                    <div class="product__price-kilo">

	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>`;

		result += productHTML;
	});

	return result;
};

export { createHitHTML };
