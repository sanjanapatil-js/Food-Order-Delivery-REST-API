

# Food Order Delivery REST API

This is a RESTful API for managing food items and categories in a food order and delivery application. It provides CRUD (Create, Read, Update, Delete) operations for food items and food categories.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [Food Routes](#food-routes)
  - [Category Routes](#category-routes)
- [Sample Data](#sample-data)

## Requirements

- [Node.js](https://nodejs.org/en/) (v14 or above)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
   
2. Navigate to the project directory:
   ```bash
   cd food-order-delivery
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server should be running at [http://localhost:5000](http://localhost:5000) by default.

## Usage

- The API is designed to manage food items and food categories.
- Use an API testing tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints.
- JSON data for initial categories and foods is stored in `data/categories.json` and `data/foods.json`.

## Endpoints

### Food Routes

| Method | Endpoint          | Description                         |
|--------|--------------------|-------------------------------------|
| POST   | `/api/foods`      | Create a new food item             |
| GET    | `/api/foods`      | Get all food items                 |
| GET    | `/api/foods/:id`  | Get a specific food item by ID     |
| PUT    | `/api/foods/:id`  | Update a specific food item by ID  |
| DELETE | `/api/foods/:id`  | Delete a specific food item by ID  |

#### Example Request & Response

- **Create a Food Item**
  - **Request**: `POST /api/foods`
    ```json
    {
      "name": "Pasta",
      "category": 1,
      "price": 10.99
    }
    ```
  - **Response**:
    ```json
    {
      "id": 4,
      "name": "Pasta",
      "category": 1,
      "price": 10.99
    }
    ```

- **Get All Food Items**
  - **Request**: `GET /api/foods`
  - **Response**:
    ```json
    [
      { "id": 1, "name": "Pizza", "category": 1, "price": 12.99 },
      { "id": 2, "name": "Burger", "category": 2, "price": 9.99 },
      { "id": 3, "name": "Sushi", "category": 3, "price": 14.99 }
    ]
    ```

### Category Routes

| Method | Endpoint              | Description                           |
|--------|------------------------|---------------------------------------|
| POST   | `/api/categories`     | Create a new category                 |
| GET    | `/api/categories`     | Get all categories                    |
| GET    | `/api/categories/:id` | Get a specific category by ID         |
| PUT    | `/api/categories/:id` | Update a specific category by ID      |
| DELETE | `/api/categories/:id` | Delete a specific category by ID      |

#### Example Request & Response

- **Create a Category**
  - **Request**: `POST /api/categories`
    ```json
    {
      "name": "Mexican"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 4,
      "name": "Mexican"
    }
    ```

- **Get All Categories**
  - **Request**: `GET /api/categories`
  - **Response**:
    ```json
    [
      { "id": 1, "name": "Italian" },
      { "id": 2, "name": "American" },
      { "id": 3, "name": "Japanese" }
    ]
    ```

## Sample Data

The application comes with initial sample data:

- **Categories** (in `data/categories.json`)
  ```json
  [
    { "id": 1, "name": "Italian" },
    { "id": 2, "name": "American" },
    { "id": 3, "name": "Japanese" }
  ]
  ```

- **Foods** (in `data/foods.json`)
  ```json
  [
    { "id": 1, "name": "Pizza", "category": 1, "price": 12.99 },
    { "id": 2, "name": "Burger", "category": 2, "price": 9.99 },
    { "id": 3, "name": "Sushi", "category": 3, "price": 14.99 }
  ]
  ```



### Docker 🐳

### Steps to Build and Run the Docker Container

1. **Build the Docker Image:**
   In the terminal, navigate to the directory containing the Dockerfile, and run:
   ```bash
   docker build -t food-order-api .
   ```

2. **Run the Docker Container:**
   Run the container from the image and map port 5000 in the container to port 5000 on your local machine:
   ```bash
   docker run -p 5000:5000 food-order-api
   ```

Your API should now be accessible at `http://localhost:5000`.


