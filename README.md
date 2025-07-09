🛍️ SHOPPE
Це сучасний інтернет-магазин, створений на React, з підтримкою багатосторінкового інтерфейсу (SPA), кастомними компонентами, роутингом і модульною SCSS-структурою.

🚀 Технології
- React
- React Router
- SCSS (BEM, модульна структура)
- SVG-ікони

🎨Макет - https://www.figma.com/design/kfM2Qasdef9rOxh8CDNyN9/Shoppe--Community-?m=auto&t=n2wVDgafJJnaC9Wf-6

📁 Структура проєкту
<pre>
src
├── App.jsx
├── App.scss
├── api
│   └── api.js
├── assets
│   ├── icons
│   │   ├── arrow-icon.svg
│   │   ├── cart-icon.svg
│   │   ├── cross-icon.svg
│   │   ├── eye-icon.svg
│   │   ├── facebook-icon.svg
│   │   ├── insta-icon.svg
│   │   ├── like-icon.svg
│   │   ├── linkedin-icon.svg
│   │   ├── mail-icon.svg
│   │   ├── next-arrow-icon.svg
│   │   ├── paypal-icon.svg
│   │   ├── plus-icon.svg
│   │   ├── reply-icon.svg
│   │   ├── search-icon.svg
│   │   ├── star-empty-icon.svg
│   │   ├── star-icon.svg
│   │   ├── twitter-icon.svg
│   │   └── user-icon.svg
│   ├── img
│   │   └── logo.svg
│   └── scss
│       ├── abstracts
│       │   ├── _extends.scss
│       │   ├── _functions.scss
│       │   ├── _mixins.scss
│       │   ├── _variables.scss
│       │   └── index.scss
│       ├── base
│       │   ├── _base.scss
│       │   ├── _reset.scss
│       │   ├── _utilities.scss
│       │   └── index.scss
│       ├── components
│       │   ├── _menu.scss
│       │   └── index.scss
│       ├── index.scss
│       ├── layout
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── index.scss
│       └── pages
├── components
│   ├── Icon.jsx
│   ├── Logo.jsx
│   ├── NavBar.jsx
│   ├── layout
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── MainLayout.jsx
│   └── utils.js
├── index.css
├── main.jsx
├── pages
│   ├── account
│   │   ├── MyAccount.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── SignIn.jsx
│   │   └── components
│   │       ├── Addresses.jsx
│   │       ├── Dashboard.jsx
│   │       ├── Details.jsx
│   │       ├── Downloads.jsx
│   │       ├── LogOut.jsx
│   │       ├── Orders.jsx
│   │       └── ViewOrder.jsx
│   ├── blog
│   │   ├── Blog.jsx
│   │   └── posts
│   │       └── BlogPost.jsx
│   ├── contact
│   │   └── ContactUs.jsx
│   ├── errors
│   │   ├── ErrorPage.jsx
│   │   └── NotFound.jsx
│   ├── home
│   │   └── Home.jsx
│   ├── our-story
│   │   └── OurStory.jsx
│   ├── privacy-policy
│   │   └── PrivacyPolicy.jsx
│   └── shop
│       ├── Shop.jsx
│       ├── product
│       │   └── ProductDetails.jsx
│       ├── shop-pages
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   ├── OrderConfirmation.jsx
│       │   ├── OrderTracking.jsx
│       │   └── Wishlist.jsx
│       └── shop-types
│           ├── MasonryGrid.jsx
│           ├── ShopCarousel.jsx
│           ├── ShopCategory.jsx
│           └── ShopFullWidth.jsx
├── routes
│   ├── frontRoutes.js
│   └── routes.jsx
└── utils
    └── IconsPreview.jsx
</pre>