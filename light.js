 // User Icon Dropdown
        const userIcon = document.getElementById("user-icon");
        const dropdownMenu = document.getElementById("dropdown-menu");

        userIcon.addEventListener("click", () => {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".user-dropdown")) {
                dropdownMenu.style.display = "none";
            }
        });
        // add to cart/

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function () {
                const title = this.getAttribute('data-title');
                const price = this.getAttribute('data-price');
                const image = this.getAttribute('data-image');

                if (!title || !price || !image) return;

                const item = { title, price, image };
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(item);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${title} added to cart`);
            });
        });
        // Wishlist toggle
document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active'); // toggle red color

        const heartIcon = this.querySelector('i');
        heartIcon.classList.toggle('far'); // outline heart
        heartIcon.classList.toggle('fas'); // solid heart

        // Get product details
        const productCard = this.closest('.product-card');
        const title = productCard.querySelector('h3').innerText;
        const price = productCard.querySelector('.product-price').innerText;
        const image = productCard.querySelector('img').src;

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (this.classList.contains('active')) {
            // Add to wishlist
            wishlist.push({ title, price, image });
        } else {
            // Remove from wishlist
            wishlist = wishlist.filter(item => item.title !== title);
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    });
});

