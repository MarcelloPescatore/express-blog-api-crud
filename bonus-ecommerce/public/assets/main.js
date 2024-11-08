console.log('test');


const rowProductsEl = document.getElementById('row-card')
// effettuo una chiamata ajax per consumare l'endpoint products
axios
.get("http://localhost:3007/products/api")
.then((response) => {
    const productsArr = response.data.data;

    let markup = '';
    productsArr.forEach(product => {
        const {img, name, description} = product

        markup += `
            <div class="card" style="width: 18rem;">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">${description}</p>
                      <a href="#" class="btn" style="background-color: #140f2d; color: white;">Scopri di più</a>
                    </div>
            </div>
        `
    });

    rowProductsEl.innerHTML = markup;
    
})
.catch((error) => {
    console.log(error);
})