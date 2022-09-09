# MERN AMAZONA

# Lessons

1. Introduction
2. Install Tools
3. create React App
4. Create Git Repository
5. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
6. Add routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create route for product screen
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module (setiing type to module enables the use of IMPORT instead of REQUIRE)
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products from backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

9. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from useReducer

10. Add Boostrap UI Framework
    npm install react-bootstrap bootstrap
    update App.js

11. Create product and rating Component
    create rating components
    create product component
    use rating component in product component

12. Create Product Details Screen
    fetch product from backend
    create 3 columns for image, info and action
13. Create Loading and Message Component
    create loading component
    use spinner component
    create message component
    create utils.js to define getError fucntion
14. Implement Add To Cart
    Create react Context
    define reducer
    create stoe provider
    implement add to cart button create handler
15. Complete Add to Cart
    check exist item in the cart
    check count in stock in backend
16. Create Cart Screen
    create 2 columns
    display items list
    create action column
17. Complete Cart Screen
    create handler for inc/dec item
    create handler for remove item
    create handler for checkout
