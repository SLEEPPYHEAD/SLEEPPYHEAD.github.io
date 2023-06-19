function filterProducts(category) {
    var products = document.querySelectorAll('.product-card');
    
    products.forEach(function(product) {
      if (category === 'all' || product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }