// Function to add product to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    alert(`${product.name} added to cart!`);
}

// Handle Add to Cart button click
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseInt(productElement.querySelector('.price').textContent.replace('Price: ₹', ''));

        const product = {
            name: productName,
            price: productPrice,
            image: productElement.querySelector('img').src
        };

        addToCart(product);
    });
});

// Function to add product to wishlist
function addToWishlist(product) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${product.name} added to wishlist!`);
}

// Handle Add to Wishlist button click
document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseInt(productElement.querySelector('.price').textContent.replace('Price: ₹', ''));

        const product = {
            name: productName,
            price: productPrice,
            image: productElement.querySelector('img').src
        };

        addToWishlist(product);
    });
});

// Function to render the cart
function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    // Display all cart items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;

        // Update the total price
        total += parseInt(item.price); // Ensure price is parsed as an integer

        cartItemsContainer.appendChild(cartItem);
    });

    // Update the total price display
    totalPriceElement.textContent = total;

    // Add remove functionality for each item
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemIndex = e.target.getAttribute('data-index');
            removeFromCart(itemIndex);
        });
    });
}

// Function to render the wishlist
function renderWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    wishlistItemsContainer.innerHTML = '';

    wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');

        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button class="remove-from-wishlist" data-index="${index}">Remove</button>
        `;

        wishlistItemsContainer.appendChild(wishlistItem);
    });

    // Add remove functionality for each item
    document.querySelectorAll('.remove-from-wishlist').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemIndex = e.target.getAttribute('data-index');
            removeFromWishlist(itemIndex);
        });
    });
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart
    renderCart();
}

// Function to remove an item from the wishlist
function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();
}

// Call renderCart when the page loads for the Cart Page
if (document.body.contains(document.getElementById('cart-items'))) {
    renderCart();
}

// Call renderWishlist when the page loads for the Wishlist Page
if (document.body.contains(document.getElementById('wishlist-items'))) {
    renderWishlist();
}

// Checkout button functionality (just an alert for now)
document.getElementById('checkout-btn')?.addEventListener('click', () => {
    alert("Proceeding to checkout...");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
