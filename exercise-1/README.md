
---

### **Exercise 1 README (`exercise-1/README.md`)**

```markdown
# Exercise 1: CRUD Application (Book Store)

This folder contains a NestJS-based CRUD application designed for demonstration purposes.

---

## Features

1. **Dockerized Setup**:
   - Application runs inside Docker containers using **Docker Compose**.
   - Simplifies setup and ensures consistent development environments.

2. **Logger**:
   - Integrated **Nest Pino** for efficient and structured logging.

3. **Database**:
   - Uses **SQLite** with **TypeORM** for persistence, suitable for demo purposes.

4. **API Documentation**:
   - Interactive API documentation generated using **Swagger**.

5. **Error Handling**:
   - Custom **`ExceptionFilter`** for consistent and robust error responses.

---

## Setup Instructions

### Prerequisites

- **Docker** and **Docker Compose** installed on your system.
- Basic understanding of NestJS and TypeScript.

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

- API Base URL: `http://localhost:8080/api`
- Swagger Documentation: `http://localhost:8080/api-docs`

---


## Development Notes

### Logger

- **Nest Pino** is configured to output structured logs.
- Logs include detailed information for debugging and production readiness.

---

### Database

- SQLite is used for demonstration purposes. The database file is located at `db.sqlite`.
- Migration and schema synchronization are handled by **TypeORM**.

---

### API Documentation

- Swagger UI is automatically available at `/api`.
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

```

---

### Highlights in This README:
- **Docker**: Instructions to build and run with Docker Compose.
- **Feature Details**: Explains why Nest Pino, SQLite, Swagger, and ExceptionFilters are used.
- **Access Information**: Clearly specifies where to access the API and Swagger UI.
- **Future Improvements**: Encourages reviewers to see how the demo can evolve.