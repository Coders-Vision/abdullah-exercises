
---

### **Exercise 1 README (`exercise-1/README.md`)**

```markdown
# Exercise 1: Book Store CRUD Application 

This folder contains a NestJS-based CRUD application designed for demonstration purposes.

---

## Features

1. **Dockerized Setup**:
   - Application runs inside Docker containers using **Docker Compose**.
   - Simplifies setup and ensures consistent development environments.

2. **Package Management**:
   - Uses **pnpm** as the package manager for faster installations and efficient disk space usage.
   - Benefits of pnpm:
     - Creates a single store for all dependencies, avoiding duplication.
     - Faster installation and rebuild times compared to npm and yarn.

3. **Logger**:
   - Integrated **Nest Pino** for efficient and structured logging.

4. **Database**:
   - Uses **SQLite** with **TypeORM** for persistence, suitable for demo purposes.

5. **API Documentation**:
   - Interactive API documentation generated using **Swagger**.

6. **Error Handling**:
   - Custom **`ExceptionFilter`** for consistent and robust error responses.

7. **Postman Collection**:
   - A ready-to-use Postman collection (`postman_EX-1-Book Store App.json`) is included for testing the APIs.

---

## Setup Instructions

### Prerequisites

- **Docker** and **Docker Compose** installed on your system.
---

### 1. **Clone the Repository**

```bash
git clone https://github.com/Coders-Vision/abdullah-exercises.git
cd exercise-1
```

---

### 2. **Start the Application**

Run the application using Docker Compose:

```bash
docker-compose up --build
```

This command will:
- Build the Docker images.
- Start the application and its dependencies.

---

### 3. **Access the Application**

- API Base URL: `http://localhost:8080`
- Swagger Documentation: `http://localhost:8080/api-docs`


## Development Notes

### Postman Collection

- A Postman collection file named `postman_EX-1-Book Store App.json` is included in this folder.
- Import this file into Postman to test the application's APIs directly.

---

### Testing Instructions

You can test the application in two ways:

1. **Using Postman**:
   - Import `postman_EX-1-Book Store App.json` into Postman.
   - Update the environment variables (if any) to match your setup.
   - Execute requests to test the APIs.

2. **Using Swagger UI**:
   - Open your browser and navigate to [http://localhost:8080/api-docs](http://localhost:8080/api-docs).
   - Interact with the API endpoints directly via the Swagger interface.

---

### Package Manager: pnpm

- Efficiently handles dependencies with a global content-addressable storage.
- Reduces disk usage and installation time compared to npm and yarn.
- Ensures consistent dependency trees, improving reliability.

---

### Logger

- **Nest Pino** is configured to output structured logs.
- Logs include detailed information for debugging and production readiness.

---

### Database

- SQLite is used for demonstration purposes. The database file is located at `db.sqlite`.
- Migration and schema synchronization are handled by **TypeORM**.

---

### API Documentation

- Swagger UI is automatically available at `/api-docs`.
- Provides a clear overview of available endpoints, request/response schemas, and status codes.

---

### Exception Handling

Custom **`ExceptionFilter`** ensures:
- Errors are consistently formatted.
- Meaningful messages and HTTP status codes are returned for exceptions.

---

## Stopping the Application

To stop and remove containers, use:

```bash
docker-compose down
```

---

## Future Improvements

- Replace SQLite with a more robust database like PostgreSQL for production use.
- Enhance authentication and authorization mechanisms.

---