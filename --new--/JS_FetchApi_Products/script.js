fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => {
        // stop loading
        document.querySelector('.spinner-container').style.display = 'none';
        // console.log(json);

        let products = '';

        data.map((product) => {
            products +=
                `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 individual-card">
                    <div class="card h-100">
                        <!-- Product Image -->
                        <img class="card-img-top img-fluid" style="width: 260px; height:178px" src=${product.image} alt="..." />

                        <!-- Product Details -->
                        <div class="card-body">
                            <div class="text-center">
                                <!-- Product Name -->
                                <h6 class="fw-bold">${product.title}</h6>
                            </div>
                        </div>

                        <!-- Product Actions -->
                        <div class="card-footer py-3 px-0 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                            <span class="p-price mt-auto ms-3 text-center">$${product.price}</span>
                            <a class="btn btn-outline-dark mx-3 text-center" href="#">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
        });
        document.getElementById('fetchProducts').innerHTML = products;
    }).catch((error) => {
        console.log(error);
    });


const Search = () => {
    const searchBox = document.getElementById('search-product').value.toUpperCase();
    const storeItems = document.getElementById('product-list');
    const product = document.querySelectorAll('.individual-card');
    const pName = storeItems.getElementsByTagName('h6');

    for (let i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName('h6')[0];
        if(match) {
            let textValue = match.textContent || match.innerHTML;
            console.log(textValue);
            if(textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';
            }
        }
    }
};
