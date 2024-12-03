
---

# **Exercise-1 (Book Store)**

This is a full-stack project for demo purposes featuring a **NestJS** backend and a **React Typescript (Vite)** frontend. It uses **Axios** for HTTP requests and **Tailwind CSS** for styling.  

---

## **Project Structure**  

```plaintext
exercise-1/
|--- backend/
|      <NestJS backend application with its own package.json and pnpm-lock.yaml>
|--- frontend/
|      <React (Vite) frontend application with its own package.json and pnpm-lock.yaml>
|--- Dockerfile
|--- docker-compose.yml
```
### **Backend**  
- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript with static typing.  
- [pnpm](https://pnpm.io/) - A fast, disk space-efficient package manager.  
- [Serve-Static Module](https://docs.nestjs.com/techniques/serve-static) - To serve static frontend files from the backend.  

### **Frontend**  
- [React (Vite)](https://vitejs.dev/) - A fast frontend development build tool.  
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.  
- [Axios](https://axios-http.com/) - A promise-based HTTP client for making API requests.  


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

6. **React+Vite**:
   - Dedicated Web Portal implemented using React **React+Vite**.
   - Added Tailwind CSS for styling **Tailwind CSS**.
   - Using Axios for Backend API calls to Nestjs Server**Axios**.

7. **Error Handling**:
   - Custom **`ExceptionFilter`** for consistent and robust error responses.

8. **Postman Collection**:
   - A ready-to-use Postman collection (`postman_EX-1-Book Store App.json`) is included for testing the APIs.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:  
- **Node.js** (v20.x or higher).
- **pnpm** (v8.x or higher).
- **Docker**  installed on your system.
---

### 1. **Clone the Repository**

```bash
git clone https://github.com/Coders-Vision/abdullah-exercises.git
cd exercise-1
```

---

### **2. Run Locally (Without Docker)**  

#### **Backend**  
```bash
cd backend
pnpm install
pnpm start:dev
```

#### **Frontend**  
```bash
cd frontend
pnpm install
pnpm run dev
```

### **3. Run with Docker Compose**  
```bash
docker-compose up --build
```

### 3. **Access the Application**

- Web Portal URL: `http://localhost:8080`
- Web Portal URL: `http://localhost:8081` (Without Docker)
- API Base URL: `http://localhost:8080/api`
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
- For Better Scalablity we can go with Monorepo Approach while integrating Frontend Framework with React.
- We can add React Query or Redux Toolkit for better state management.

---