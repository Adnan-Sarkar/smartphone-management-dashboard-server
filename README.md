# Smartphone Management Dashboard Server [![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)]() [![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)]()

This server is for `Smartphone management System` for a warehouse. The main purpose of the application is to maintain `C-CREATE R-READ U-UPDATE D-DELETE` for products. Application is protected for every route using JWT token verification and authorized by 3 types of users such as `super admin`, `branch manager`, and `seller`. There is mainly 3 types of database collections such as users: for storing user information, products: to maintain the main heart of the business and sales: for getting sales history of products.

Client Github:

```bash
https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-client-side-Adnan-Sarkar
```

## Table of Contents

- [Key Features](#key-features)
- [Technology Used](#technology-used)
- [API Documentation](#api-documentation)
- [Live Server Test](#live-server-test)
  - [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation locally](#installation-locally)
  - [Running the Application](#running-the-application)

## Key Features

Every route within the system is safeguarded through JWT token verification and role based authorization, guaranteeing secure access and protection against unauthorized usage.

Role Based Routing:

1. **Super Admin**
   Access every routes.

2. **Branch Manager**
   Add and modify products.

3. **Seller**
   Only can sell products.

Database Collections:

1. **Users:**
   Responsible for storing user information securely, facilitating a reliable authentication system.

2. **Products:**
   The backbone of the business, allow to the creation, retrieval, update, and deletion of product information.

3. **Sales:**
   Storing products sales history

## Technology Used

- **Express.js**
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **Bcrypt**
- **Zod**
- **Dev Tools**
  - **TypeScript**
  - **ts-node-dev**
  - **ESLint**
  - **Prettier**

## API Documentation

This documentation, generated with Postman.

```bash
  https://documenter.getpostman.com/view/15069256/2s9YywdeFS
```

Or,

[Click API Documentation](https://documenter.getpostman.com/view/15069256/2s9YywdeFS)

## Live Server Test

To test the live API endpoints, I prefer using [Postman](https://www.postman.com/) for testing with better user experience.

### Live API

```bash
https://smartphone-management-dashboard-server-by-adnan-sarkar.vercel.app
```

## API Endpoints

for `user`

- **POST** /api/auth/register
- **POST** /api/auth/login
- **GET** /api/auth/users
- **PATCH** /api/auth/user/:userId
- **DELETE** /api/auth/user/:userId

for `product`

- **POST** /api/products/create-product
- **GET** /api/products/
- **GET** /api/products/all-products
- **GET** /api/products/:productId
- **PATCH** /api/products/:productId
- **DELETE** /api/products/
- **DELETE** /api/products/:productId

for `sales`

- **POST** /api/sales/sell
- **GET** /api/sales/

## Getting Started

These instructions will help you set up and run the application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation locally

1. Clone the repository:

```bash
https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-server-side-Adnan-Sarkar.git
```

2. Navigate to the project directory:

```bash
cd smartphone-management-dashboard-server
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the root directory and configure environment variables:

```bash
PORT=...
MONGODB_URL=...
SALT_ROUND=...
JWT_ACCESS_TOKEN_SECRET=...
JWT_ACCESS_TOKEN_EXPIRES_IN=...
```

### Running the Application

1. Convert the typescript file to javascript file

```bash
npm run build
```

2. Running typescript in development environment

```bash
npm run start:dev
```

3. Running javascript in production environment

```bash
npm run start:prod
```

<br><br>

Thank you for exploring the `Smartphone Management Dashboard Server` backend application! Feel free to provide feedback, report issues.

## 📢 Social Links

- [![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adnan-sarkar-8b54341a0/)
- [![](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/AdnanSarkar14)
- [![](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/adnansarkaraduvai/)
- [![](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_a_d_u_v_a_i_/)
- [![](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://adnansarkar.hashnode.dev/)
