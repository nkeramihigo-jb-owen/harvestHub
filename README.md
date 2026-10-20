# HarvestHub — Buyer Marketplace

HarvestHub is a simple, responsive agricultural marketplace front-end that allows buyers to browse agricultural products, view product details, add items to a shopping cart, and place simulated orders.

The platform is designed to connect buyers with farmers and agricultural businesses by presenting product information, prices, availability, and seller contact details.

## Project Overview

HarvestHub provides a straightforward shopping experience, from browsing available agricultural products to receiving an order confirmation.

This project is built using HTML, CSS, and JavaScript. It uses browser local storage to simulate login, cart management, and order placement without requiring a backend or database.

## Features

* **Welcome Page:** Introduces HarvestHub and directs buyers to the marketplace journey.
* **Login:** Allows buyers to enter their name and password without creating an account.
* **Product Marketplace:** Displays agricultural products with images, prices, descriptions, and availability.
* **Product Search:** Allows buyers to search for products by name, description, seller, or farmer name.
* **Product Details:** Displays detailed product information, seller information, contact details, and available quantities.
* **Shopping Cart:** Allows buyers to add products, adjust quantities, remove items, and view their subtotal.
* **Checkout:** Collects customer contact details and delivery information.
* **Order Confirmation:** Displays the order number, purchased products, total amount, and delivery details.
* **Responsive Design:** Adapts the interface for desktop and smaller screens.
* **Browser Storage:** Uses local storage to retain the demo buyer name, shopping cart, and simulated orders.

## Technologies Used

* HTML5 — page structure and content.
* CSS3 — styling, layout, and responsive design.
* JavaScript — search, cart functionality, checkout, and order confirmation.
* Browser Local Storage — demonstration data persistence.
* JFIF Images — product photographs.

## Project Structure


HARVESTHUB_BUYER_MARKETPLACE/
│
├── index.html
├── login.html
├── marketplace.html
├── product-details.html
├── cart.html
├── checkout.html
├── order-confirmation.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── images/
│   └── Product images (.jfif)
│
└── README.md


## Getting Started

### Requirements

You need:

* A modern web browser.
* A code editor, such as Visual Studio Code.
* The project files, including the CSS, JavaScript, and product images.

### Installation

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Confirm that all HTML pages, the CSS file, the JavaScript file, and product images are present.
4. Open `index.html` in your browser.

For a convenient development experience, you can install the Live Server extension in Visual Studio Code and launch `index.html` using **Open with Live Server**.

No backend server, database setup, or package installation is required.

## How to Use

1. Open the welcome page.
2. Click **Get Started**.
3. Enter a name and password to access the demonstration marketplace.
4. Browse the available agricultural products.
5. Use the search field to find a product.
6. Select a product to view its details.
7. Add the desired quantity to your shopping cart.
8. Review the cart and proceed to checkout.
9. Enter your contact and delivery information.
10. Place the order.
11. Review the order confirmation and order summary.

## Data Storage

HarvestHub uses the browser's `localStorage` to simulate application data.

The demonstration uses the following storage keys:

| Storage Key                 | Purpose                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| `harvestHubBuyer`           | Stores the demo buyer's name.                                     |
| `harvestHubCart`            | Stores the shopping cart items.                                   |
| `harvestHubProducts`        | Reserved for marketplace product data if used by the application. |
| `harvestHubOrders`          | Stores simulated orders.                                          |
| `harvestHubLastOrder`       | Stores the most recently placed order.                            |
| `harvestHubSelectedProduct` | Stores the selected product for product details navigation.       |

Storage is specific to the browser and device being used. Clearing browser storage may remove saved demonstration data.

## Important Limitations

This is a **front-end demonstration project**, not a production-ready e-commerce platform.

* Login is simulated; there is no real user authentication.
* Product and order information is not stored in a central database.
* Orders are saved locally in the buyer's browser.
* No payment gateway is integrated.
* Orders are not automatically sent to farmers.
* Product availability is based on the demonstration data and is not updated through a backend inventory system.
* The application does not provide real-time order tracking.

A production version would require a backend, database, secure authentication, server-side order validation, and appropriate payment and order-management integrations.

## Future Improvements

Possible future enhancements include:

* Backend development using Django or another suitable framework.
* Database integration for products, farmers, customers, and orders.
* Secure authentication and authorization.
* Farmer product management.
* Real-time stock management.
* Payment gateway integration.
* Order tracking and management.
* Automated order notifications.
* Deployment to a production hosting platform.

## Author

GROUP J

## License

This project was developed for educational and demonstration purposes.
