"use strict";

document.addEventListener("DOMContentLoaded", function () {


const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const buyerName = document.getElementById("buyerName").value.trim();
        const buyerPassword = document.getElementById("buyerPassword").value;
        const loginMessage = document.getElementById("loginMessage");

        if (!buyerName || !buyerPassword.trim()) {
            loginMessage.textContent = "Please enter your name and password.";
            loginMessage.style.color = "#c62828";
            return;
        }

        localStorage.setItem("harvestHubBuyer", buyerName);

        window.location.href = "marketplace.html";
    });
}


});



const harvestHubProducts = [
{
id: "demo-tomatoes",
name: "Fresh Tomatoes",
price: 3000,
unit: "kg",
quantity: 80,
farmerBusiness: "Green Valley Farms",
farmerName: "John Mukasa",
farmerPhone: "+256700000001",
description: "Fresh tomatoes suitable for everyday cooking.",
image: "images/tomatoes.jfif"
},
{
id: "demo-maize",
name: "Dry Maize",
price: 120000,
unit: "bag",
quantity: 25,
farmerBusiness: "Golden Harvest Cooperative",
farmerName: "Sarah Namusoke",
farmerPhone: "+256700000002",
description: "Quality dry maize offered by a farming cooperative.",
image: "images/maize.jfif"
},
{
id: "demo-potatoes",
name: "Irish Potatoes",
price: 2800,
unit: "kg",
quantity: 100,
farmerBusiness: "Highland Farm Produce",
farmerName: "Peter Kato",
farmerPhone: "+256700000003",
description: "Freshly harvested Irish potatoes.",
image: "images/potatoes.jfif"
},
{
id: "demo-bananas",
name: "Yellow Bananas",
price: 2500,
unit: "bunch",
quantity: 35,
farmerBusiness: "Sunrise Agricultural Farm",
farmerName: "Mary Akello",
farmerPhone: "+256700000004",
description: "Fresh bananas offered by a local farming business.",
image: "images/bananas.jfif"
},
{
id: "demo-cabbage",
name: "Fresh Cabbage",
price: 2500,
unit: "head",
quantity: 45,
farmerBusiness: "Green Valley Farms",
farmerName: "John Mukasa",
farmerPhone: "+256700000001",
description: "Fresh cabbage for family meals and food businesses.",
image: "images/cabbage.jfif"
},
{
id: "demo-beans",
name: "Dry Beans",
price: 4500,
unit: "kg",
quantity: 60,
farmerBusiness: "Golden Harvest Cooperative",
farmerName: "Sarah Namusoke",
farmerPhone: "+256700000002",
description: "Dry beans offered by a farming cooperative.",
image: "images/beans.jfif"
},
{
id: "demo-pineapple",
name: "Fresh Pineapples",
price: 4000,
unit: "piece",
quantity: 30,
farmerBusiness: "Sunrise Agricultural Farm",
farmerName: "Mary Akello",
farmerPhone: "+256700000004",
description: "Fresh pineapples available from a local farm.",
image: "images/pineapples.jfif"
},
{
id: "demo-milk",
name: "Fresh Milk",
price: 2500,
unit: "litre",
quantity: 40,
farmerBusiness: "Green Pastures Dairy",
farmerName: "David Ssemanda",
farmerPhone: "+256700000005",
description: "Fresh milk advertised by a dairy farming business.",
image: "images/milk.jfif"
},
{
id: "demo-eggs",
name: "Fresh Eggs",
price: 15000,
unit: "tray",
quantity: 20,
farmerBusiness: "Happy Hen Poultry",
farmerName: "Grace Nambi",
farmerPhone: "+256700000006",
description: "Fresh eggs offered by a poultry farming business.",
image: "images/eggs.jfif"
},
{
id: "demo-sweet-potatoes",
name: "Sweet Potatoes",
price: 2000,
unit: "kg",
quantity: 55,
farmerBusiness: "Highland Farm Produce",
farmerName: "Peter Kato",
farmerPhone: "+256700000003",
description: "Fresh sweet potatoes harvested by a local farm.",
image: "images/sweet-potatoes.jfif"
},
{
id: "demo-onions",
name: "Red Onions",
price: 3500,
unit: "kg",
quantity: 45,
farmerBusiness: "Green Valley Farms",
farmerName: "John Mukasa",
farmerPhone: "+256700000001",
description: "Red onions for household and commercial cooking.",
image: "images/onions.jfif"
},
{
id: "demo-chicken",
name: "Local Chicken",
price: 30000,
unit: "bird",
quantity: 12,
farmerBusiness: "Happy Hen Poultry",
farmerName: "Grace Nambi",
farmerPhone: "+256700000006",
description: "Local chicken offered by a poultry farming business.",
image: "images/chicken.jfif"
}
];

function formatHarvestHubPrice(amount) {
return "UGX " + Number(amount).toLocaleString("en-UG");
}

function displayHarvestHubProducts(products) {
const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");


if (!productGrid) {
    return;
}

if (productCount) {
    productCount.textContent =
        products.length + (products.length === 1 ? " product" : " products");
}

if (products.length === 0) {
    productGrid.innerHTML =
        '<p class="empty-products">No products found. Try another search.</p>';
    return;
}

productGrid.innerHTML = products.map(function (product) {
    return `
        <article class="product-card">
            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-card-content">
                <h3>${product.name}</h3>

                <p class="product-price">
                    ${formatHarvestHubPrice(product.price)} / ${product.unit}
                </p>

                <p class="product-business">
                    ${product.farmerBusiness}
                </p>

                <p class="product-availability">
                    ${product.quantity} ${product.unit} available
                </p>

                <p>${product.description}</p>

                <button
                    class="btn btn-primary product-details-button"
                    type="button"
                    data-product-id="${product.id}"
                >
                    View Details
                </button>
            </div>
        </article>
    `;
}).join("");


}

document.addEventListener("DOMContentLoaded", function () {
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("productSearch");


if (!productGrid) {
    return;
}

displayHarvestHubProducts(harvestHubProducts);

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        const filteredProducts = harvestHubProducts.filter(function (product) {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.farmerBusiness.toLowerCase().includes(searchTerm) ||
                product.farmerName.toLowerCase().includes(searchTerm)
            );
        });

        displayHarvestHubProducts(filteredProducts);
    });
}

productGrid.addEventListener("click", function (event) {
    const button = event.target.closest("[data-product-id]");

    if (!button) {
        return;
    }

    const productId = button.dataset.productId;

    localStorage.setItem("harvestHubSelectedProduct", productId);

    window.location.href =
        "product-details.html?id=" + encodeURIComponent(productId);
});


});

/* 
PRODUCT DETAILS PAGE FUNCTIONALITY
 */

document.addEventListener("DOMContentLoaded", function () {
const detailsContainer = document.getElementById("productDetails");


if (!detailsContainer) {
    return;
}

const message = document.getElementById("productMessage");
const productId = new URLSearchParams(window.location.search).get("id");

const selectedProductId =
    productId || localStorage.getItem("harvestHubSelectedProduct");

const product = harvestHubProducts.find(function (item) {
    return item.id === selectedProductId;
});

if (!product) {
    detailsContainer.innerHTML = `
        <div>
            <h1>Product not found</h1>
            <p>We couldn't find this product. Please return to the marketplace.</p>
            <a href="marketplace.html" class="btn btn-primary">
                Browse Products
            </a>
        </div>
    `;
    return;
}

const outOfStock = Number(product.quantity) < 1;

detailsContainer.innerHTML = `
    <div>
        <img
            class="details-product-image"
            src="${product.image}"
            alt="${product.name}"
        >
    </div>

    <div class="details-product-info">
        <h1>${product.name}</h1>

        <p class="details-product-price">
            ${formatHarvestHubPrice(product.price)} / ${product.unit}
        </p>

        <p class="details-product-description">
            ${product.description}
        </p>

        <div class="details-information">
            <p><strong>Farm Business:</strong> ${product.farmerBusiness}</p>
            <p><strong>Farmer:</strong> ${product.farmerName}</p>
            <p><strong>Contact:</strong> ${product.farmerPhone}</p>
            <p>
                <strong>Availability:</strong>
                <span class="details-stock ${outOfStock ? "out-of-stock" : ""}">
                    ${outOfStock
                        ? "Currently out of stock"
                        : product.quantity + " " + product.unit + " available"}
                </span>
            </p>
        </div>

        <div class="details-quantity-group">
            <label for="productQuantity">Quantity (${product.unit})</label>
            <input
                type="number"
                id="productQuantity"
                min="1"
                max="${product.quantity}"
                value="1"
                ${outOfStock ? "disabled" : ""}
            >
        </div>

        <button
            type="button"
            id="addToCartButton"
            class="btn btn-primary add-to-cart-button"
            ${outOfStock ? "disabled" : ""}
        >
            ${outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

        <p id="detailsMessage" class="details-message" role="status" aria-live="polite"></p>
    </div>
`;

const quantityInput = document.getElementById("productQuantity");
const addButton = document.getElementById("addToCartButton");
const detailsMessage = document.getElementById("detailsMessage");

addButton.addEventListener("click", function () {
    const quantity = Number(quantityInput.value);

    if (!Number.isInteger(quantity) || quantity < 1) {
        detailsMessage.textContent = "Please enter a valid whole-number quantity.";
        detailsMessage.className = "details-message error";
        return;
    }

    if (quantity > product.quantity) {
        detailsMessage.textContent =
            "Only " + product.quantity + " " + product.unit + " available.";
        detailsMessage.className = "details-message error";
        return;
    }

    const cart = JSON.parse(localStorage.getItem("harvestHubCart") || "[]");

    const existingItem = cart.find(function (item) {
        return item.productId === product.id;
    });

    const existingQuantity = existingItem
        ? Number(existingItem.quantity) || 0
        : 0;

    if (existingQuantity + quantity > product.quantity) {
        detailsMessage.textContent =
            "You already have " + existingQuantity + " in your cart. Only " +
            product.quantity + " " + product.unit + " are available in total.";
        detailsMessage.className = "details-message error";
        return;
    }

    if (existingItem) {
        existingItem.quantity = existingQuantity + quantity;
    } else {
        cart.push({
            productId: product.id,
            quantity: quantity
        });
    }

    localStorage.setItem("harvestHubCart", JSON.stringify(cart));

    document.querySelectorAll("#cartCount").forEach(function (element) {
        element.textContent = cart.reduce(function (total, item) {
            return total + (Number(item.quantity) || 0);
        }, 0);
    });

    detailsMessage.textContent = product.name + " added to your cart!";
    detailsMessage.className = "details-message success";
});

document.querySelectorAll("#cartCount").forEach(function (element) {
    const cart = JSON.parse(localStorage.getItem("harvestHubCart") || "[]");

    element.textContent = cart.reduce(function (total, item) {
        return total + (Number(item.quantity) || 0);
    }, 0);
});


});

/* 
SHOPPING CART FUNCTIONALITY
 */

document.addEventListener("DOMContentLoaded", function () {
const cartItemsContainer = document.getElementById("cartItems");


if (!cartItemsContainer) {
    return;
}

const emptyCart = document.getElementById("emptyCart");
const itemCount = document.getElementById("cartItemCount");
const subtotalElement = document.getElementById("cartSubtotal");
const totalElement = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

function getSavedCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem("harvestHubCart") || "[]"
        );

        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("harvestHubCart", JSON.stringify(cart));
}

function updateCount(cart) {
    const count = cart.reduce(function (total, item) {
        return total + Math.max(0, Number(item.quantity) || 0);
    }, 0);

    document.querySelectorAll("#cartCount").forEach(function (element) {
        element.textContent = count;
    });

    if (itemCount) {
        itemCount.textContent =
            count + (count === 1 ? " item in your cart" : " items in your cart");
    }
}

function showMessage(text) {
    let message = document.getElementById("cartMessage");

    if (!message) {
        message = document.createElement("p");
        message.id = "cartMessage";
        message.className = "cart-message error";
        message.setAttribute("role", "status");

        cartItemsContainer.insertAdjacentElement("afterend", message);
    }

    message.textContent = text;
}

function renderCart() {
    const cart = getSavedCart();

    const validItems = cart.filter(function (item) {
        return harvestHubProducts.some(function (product) {
            return product.id === item.productId;
        });
    });

    if (validItems.length !== cart.length) {
        saveCart(validItems);
    }

    let subtotal = 0;

    const cartProducts = validItems.map(function (item) {
        const product = harvestHubProducts.find(function (entry) {
            return entry.id === item.productId;
        });

        const quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));

        return {
            product: product,
            quantity: quantity,
            lineTotal: product.price * quantity
        };
    });

    cartProducts.forEach(function (item) {
        subtotal += item.lineTotal;
    });

    updateCount(validItems);

    subtotalElement.textContent = formatHarvestHubPrice(subtotal);
    totalElement.textContent = formatHarvestHubPrice(subtotal);

    emptyCart.hidden = cartProducts.length !== 0;
    cartItemsContainer.hidden = cartProducts.length === 0;
    checkoutButton.disabled = cartProducts.length === 0;

    if (cartProducts.length === 0) {
        cartItemsContainer.innerHTML = "";
        return;
    }

    cartItemsContainer.innerHTML = cartProducts.map(function (item) {
        const product = item.product;

        return `
            <article class="cart-item">
                <img
                    class="cart-item-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item-info">
                    <h3>${product.name}</h3>

                    <p class="cart-item-business">
                        ${product.farmerBusiness}
                    </p>

                    <p class="cart-item-price">
                        ${formatHarvestHubPrice(product.price)} / ${product.unit}
                    </p>

                    <div class="cart-item-controls">
                        <div class="cart-quantity-control">
                            <label for="quantity-${product.id}">
                                Quantity
                            </label>

                            <input
                                class="cart-quantity-input"
                                type="number"
                                id="quantity-${product.id}"
                                min="1"
                                max="${product.quantity}"
                                value="${item.quantity}"
                                data-quantity-id="${product.id}"
                            >
                        </div>

                        <button
                            class="remove-cart-item"
                            type="button"
                            data-remove-id="${product.id}"
                        >
                            Remove
                        </button>
                    </div>

                    <p class="cart-item-subtotal">
                        Subtotal: ${formatHarvestHubPrice(item.lineTotal)}
                    </p>
                </div>
            </article>
        `;
    }).join("");
}

cartItemsContainer.addEventListener("change", function (event) {
    const input = event.target.closest("[data-quantity-id]");

    if (!input) {
        return;
    }

    const productId = input.dataset.quantityId;
    const requestedQuantity = Number(input.value);

    const product = harvestHubProducts.find(function (item) {
        return item.id === productId;
    });

    if (
        !product ||
        !Number.isInteger(requestedQuantity) ||
        requestedQuantity < 1
    ) {
        showMessage("Please enter a valid whole-number quantity.");
        renderCart();
        return;
    }

    if (requestedQuantity > product.quantity) {
        showMessage(
            "Only " + product.quantity + " " + product.unit +
            " available for " + product.name + "."
        );
        renderCart();
        return;
    }

    const cart = getSavedCart();

    const item = cart.find(function (entry) {
        return entry.productId === productId;
    });

    if (item) {
        item.quantity = requestedQuantity;
        saveCart(cart);
    }

    const message = document.getElementById("cartMessage");

    if (message) {
        message.textContent = "";
    }

    renderCart();
});

cartItemsContainer.addEventListener("click", function (event) {
    const button = event.target.closest("[data-remove-id]");

    if (!button) {
        return;
    }

    const productId = button.dataset.removeId;

    const updatedCart = getSavedCart().filter(function (item) {
        return item.productId !== productId;
    });

    saveCart(updatedCart);

    const message = document.getElementById("cartMessage");

    if (message) {
        message.textContent = "";
    }

    renderCart();
});

checkoutButton.addEventListener("click", function () {
    const cart = getSavedCart();

    if (cart.length === 0) {
        showMessage("Your cart is empty. Add some products before checkout.");
        return;
    }

    window.location.href = "checkout.html";
});

renderCart();


});


/* CHECKOUT FUNCTIONALITY */
document.addEventListener("DOMContentLoaded", function () {
const checkoutForm = document.getElementById("checkoutForm");


if (!checkoutForm) return;

const checkoutItemsContainer = document.getElementById("checkoutItems");
const subtotalElement = document.getElementById("checkoutSubtotal");
const totalElement = document.getElementById("checkoutTotal");
const checkoutMessage = document.getElementById("checkoutMessage");
const customerNameInput = document.getElementById("customerName");
const placeOrderButton = document.getElementById("placeOrderButton");

function getSavedCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem("harvestHubCart") || "[]"
        );

        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        return [];
    }
}

function formatPrice(amount) {
    return formatHarvestHubPrice(amount);
}

function showCheckoutMessage(message, isError = true) {
    checkoutMessage.textContent = message;
    checkoutMessage.style.color = isError ? "#c62828" : "#267747";
}

function renderCheckoutSummary() {
    const cart = getSavedCart();

    const validItems = cart.filter(function (item) {
        return harvestHubProducts.some(function (product) {
            return product.id === item.productId;
        });
    });

    const cartProducts = validItems.map(function (item) {
        const product = harvestHubProducts.find(function (product) {
            return product.id === item.productId;
        });

        const quantity = Math.max(
            1,
            Math.floor(Number(item.quantity) || 1)
        );

        return {
            product: product,
            quantity: quantity,
            subtotal: product.price * quantity
        };
    });

    if (cartProducts.length === 0) {
        checkoutItemsContainer.innerHTML =
            '<p class="checkout-section-description">Your cart is empty. Add some products before checking out.</p>';

        subtotalElement.textContent = formatPrice(0);
        totalElement.textContent = formatPrice(0);
        placeOrderButton.disabled = true;

        showCheckoutMessage(
            "Your cart is empty. Please return to the marketplace.",
            true
        );

        return [];
    }

    checkoutItemsContainer.innerHTML = cartProducts.map(function (item) {
        return `
            <div class="checkout-item">
                <div class="checkout-item-info">
                    <strong>${item.product.name}</strong>
                    <p>${item.quantity} × ${formatPrice(item.product.price)}</p>
                </div>

                <span class="checkout-item-price">
                    ${formatPrice(item.subtotal)}
                </span>
            </div>
        `;
    }).join("");

    const subtotal = cartProducts.reduce(function (sum, item) {
        return sum + item.subtotal;
    }, 0);

    subtotalElement.textContent = formatPrice(subtotal);
    totalElement.textContent = formatPrice(subtotal);

    placeOrderButton.disabled = false;

    return cartProducts;
}

// Fill the customer's name using the name entered during demo login.
const savedBuyerName = localStorage.getItem("harvestHubBuyer");

if (savedBuyerName && !customerNameInput.value) {
    customerNameInput.value = savedBuyerName;
}

let checkoutProducts = renderCheckoutSummary();

checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    checkoutProducts = renderCheckoutSummary();

    if (checkoutProducts.length === 0) {
        showCheckoutMessage(
            "Your cart is empty. Please add products before placing an order."
        );
        return;
    }

    const customerName = customerNameInput.value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const customerEmail = document.getElementById("customerEmail").value.trim();
    const deliveryDistrict = document.getElementById("deliveryDistrict").value.trim();
    const deliveryAddress = document.getElementById("deliveryAddress").value.trim();
    const orderNotes = document.getElementById("orderNotes").value.trim();

    if (
        !customerName ||
        !customerPhone ||
        !deliveryDistrict ||
        !deliveryAddress
    ) {
        showCheckoutMessage(
            "Please complete all required contact and delivery fields."
        );
        return;
    }

    // Check that the requested quantities do not exceed available stock.
    for (const item of checkoutProducts) {
        if (item.quantity > Number(item.product.quantity)) {
            showCheckoutMessage(
                "The requested quantity for " +
                item.product.name +
                " exceeds the available stock. Please update your cart."
            );
            return;
        }
    }

    const orderTotal = checkoutProducts.reduce(function (sum, item) {
        return sum + item.subtotal;
    }, 0);

    const order = {
        orderId: "HH-" + Date.now(),
        orderDate: new Date().toISOString(),
        status: "Order Placed",
        customer: {
            name: customerName,
            phone: customerPhone,
            email: customerEmail
        },
        delivery: {
            district: deliveryDistrict,
            address: deliveryAddress,
            notes: orderNotes
        },
        items: checkoutProducts.map(function (item) {
            return {
                productId: item.product.id,
                name: item.product.name,
                image: item.product.image,
                farmerBusiness: item.product.farmerBusiness,
                price: item.product.price,
                unit: item.product.unit,
                quantity: item.quantity,
                subtotal: item.subtotal
            };
        }),
        subtotal: orderTotal,
        total: orderTotal
    };

    let savedOrders = [];

    try {
        const existingOrders = JSON.parse(
            localStorage.getItem("harvestHubOrders") || "[]"
        );

        savedOrders = Array.isArray(existingOrders)
            ? existingOrders
            : [];
    } catch (error) {
        savedOrders = [];
    }

    savedOrders.push(order);

    localStorage.setItem(
        "harvestHubOrders",
        JSON.stringify(savedOrders)
    );

    localStorage.setItem(
        "harvestHubLastOrder",
        JSON.stringify(order)
    );

    localStorage.removeItem("harvestHubCart");

    window.location.href = "order-confirmation.html";
});


});

/* CHECKOUT FUNCTIONALITY */
document.addEventListener("DOMContentLoaded", function () {
const checkoutForm = document.getElementById("checkoutForm");


if (!checkoutForm) return;

const checkoutItemsContainer = document.getElementById("checkoutItems");
const subtotalElement = document.getElementById("checkoutSubtotal");
const totalElement = document.getElementById("checkoutTotal");
const checkoutMessage = document.getElementById("checkoutMessage");
const customerNameInput = document.getElementById("customerName");
const placeOrderButton = document.getElementById("placeOrderButton");

function getSavedCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem("harvestHubCart") || "[]"
        );

        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        return [];
    }
}

function formatPrice(amount) {
    return formatHarvestHubPrice(amount);
}

function showCheckoutMessage(message, isError = true) {
    checkoutMessage.textContent = message;
    checkoutMessage.style.color = isError ? "#c62828" : "#267747";
}

function renderCheckoutSummary() {
    const cart = getSavedCart();

    const validItems = cart.filter(function (item) {
        return harvestHubProducts.some(function (product) {
            return product.id === item.productId;
        });
    });

    const cartProducts = validItems.map(function (item) {
        const product = harvestHubProducts.find(function (product) {
            return product.id === item.productId;
        });

        const quantity = Math.max(
            1,
            Math.floor(Number(item.quantity) || 1)
        );

        return {
            product: product,
            quantity: quantity,
            subtotal: product.price * quantity
        };
    });

    if (cartProducts.length === 0) {
        checkoutItemsContainer.innerHTML =
            '<p class="checkout-section-description">Your cart is empty. Add some products before checking out.</p>';

        subtotalElement.textContent = formatPrice(0);
        totalElement.textContent = formatPrice(0);
        placeOrderButton.disabled = true;

        showCheckoutMessage(
            "Your cart is empty. Please return to the marketplace.",
            true
        );

        return [];
    }

    checkoutItemsContainer.innerHTML = cartProducts.map(function (item) {
        return `
            <div class="checkout-item">
                <div class="checkout-item-info">
                    <strong>${item.product.name}</strong>
                    <p>${item.quantity} × ${formatPrice(item.product.price)}</p>
                </div>

                <span class="checkout-item-price">
                    ${formatPrice(item.subtotal)}
                </span>
            </div>
        `;
    }).join("");

    const subtotal = cartProducts.reduce(function (sum, item) {
        return sum + item.subtotal;
    }, 0);

    subtotalElement.textContent = formatPrice(subtotal);
    totalElement.textContent = formatPrice(subtotal);

    placeOrderButton.disabled = false;

    return cartProducts;
}

// Fill the customer's name using the name entered during demo login.
const savedBuyerName = localStorage.getItem("harvestHubBuyer");

if (savedBuyerName && !customerNameInput.value) {
    customerNameInput.value = savedBuyerName;
}

let checkoutProducts = renderCheckoutSummary();

checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    checkoutProducts = renderCheckoutSummary();

    if (checkoutProducts.length === 0) {
        showCheckoutMessage(
            "Your cart is empty. Please add products before placing an order."
        );
        return;
    }

    const customerName = customerNameInput.value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const customerEmail = document.getElementById("customerEmail").value.trim();
    const deliveryDistrict = document.getElementById("deliveryDistrict").value.trim();
    const deliveryAddress = document.getElementById("deliveryAddress").value.trim();
    const orderNotes = document.getElementById("orderNotes").value.trim();

    if (
        !customerName ||
        !customerPhone ||
        !deliveryDistrict ||
        !deliveryAddress
    ) {
        showCheckoutMessage(
            "Please complete all required contact and delivery fields."
        );
        return;
    }

    // Check that the requested quantities do not exceed available stock.
    for (const item of checkoutProducts) {
        if (item.quantity > Number(item.product.quantity)) {
            showCheckoutMessage(
                "The requested quantity for " +
                item.product.name +
                " exceeds the available stock. Please update your cart."
            );
            return;
        }
    }

    const orderTotal = checkoutProducts.reduce(function (sum, item) {
        return sum + item.subtotal;
    }, 0);

    const order = {
        orderId: "HH-" + Date.now(),
        orderDate: new Date().toISOString(),
        status: "Order Placed",
        customer: {
            name: customerName,
            phone: customerPhone,
            email: customerEmail
        },
        delivery: {
            district: deliveryDistrict,
            address: deliveryAddress,
            notes: orderNotes
        },
        items: checkoutProducts.map(function (item) {
            return {
                productId: item.product.id,
                name: item.product.name,
                image: item.product.image,
                farmerBusiness: item.product.farmerBusiness,
                price: item.product.price,
                unit: item.product.unit,
                quantity: item.quantity,
                subtotal: item.subtotal
            };
        }),
        subtotal: orderTotal,
        total: orderTotal
    };

    let savedOrders = [];

    try {
        const existingOrders = JSON.parse(
            localStorage.getItem("harvestHubOrders") || "[]"
        );

        savedOrders = Array.isArray(existingOrders)
            ? existingOrders
            : [];
    } catch (error) {
        savedOrders = [];
    }

    savedOrders.push(order);

    localStorage.setItem(
        "harvestHubOrders",
        JSON.stringify(savedOrders)
    );

    localStorage.setItem(
        "harvestHubLastOrder",
        JSON.stringify(order)
    );

    localStorage.removeItem("harvestHubCart");

    window.location.href = "order-confirmation.html";
});


});
