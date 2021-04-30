const result = document.querySelector('.result');

const fetchPrdoducts = async () => {
	try {
		// const { data } = await axios.get('/api/airtable');
		const { data } = await axios.get('/api/complete');
		const products = data
			.map((product) => {
				const { id, name, url, price } = product;
				return `<a href='product.html?id=${id}' class='product'>
      <img src='${url}' alt='${name}'/>
      <div class='info'>
      <h5>${name}</h5>
      <h5 class='price'>$${price}</h5>
      </div>
      </a>`;
			})
			.join('');
		result.innerHTML = products;
	} catch (error) {
		result.innerHTML = '<h4>There was an error</h4>';
	}
};
fetchPrdoducts();
