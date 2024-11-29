### README for Order Processing Script

---

# **Order Processing Script**

This project processes a CSV file containing order data and generates two output files with summarized information:
1. **Average quantities of products per order.**
2. **Most popular brands for each product.**

---

## **Features**

- Parses a CSV file with order records.
- Generates two output files:
  - `0_<input_file_name>`: Contains product names and their average quantities per order.
  - `1_<input_file_name>`: Contains product names and their most popular brands.
- Efficiently handles large files (up to 10,000 rows) using streaming for file processing.
- Ensures correctness by meeting specified constraints for average calculations.

---

## **Prerequisites**

Ensure you have the following installed:

- **Node.js** (version 14 or later)
- A terminal or command-line interface.

---

## **Setup and Usage**

### 1. **Clone the Repository**

```bash
git clone <repository_url>
cd exercise-2
```

### 2. **Prepare the Input File**

Place your input CSV file in the project directory. The file should follow this format:

| Column Name   | Description                            |
|---------------|----------------------------------------|
| ID            | Order ID                              |
| Area          | Delivery location                     |
| Product Name  | Name of the product ordered           |
| Quantity      | Quantity of the product in the order  |
| Brand         | Brand of the product                  |

Example file content:
```
ID1,Minneapolis,shoes,2,Air
ID2,Chicago,shoes,1,Air
ID3,Central Department Store,shoes,5,BonPied
ID4,Quail Hollow,forks,3,Pfitzcraft
```

### 3. **Install Dependencies**

This script has no external dependencies. Node.js built-in modules are used.

### 4. **Run the Script**

Run the script using the following command:

```bash
node order-processor.js <input_file_name>
```

For example:

```bash
node order-processor.js orders.csv
```

---

## **Output Files**

The script generates two output files in the project directory:

1. **`0_<input_file_name>`**:
   - Contains product names and their average quantities per order.
   - Example:
     ```
     shoes,2
     forks,0.75
     ```

2. **`1_<input_file_name>`**:
   - Contains product names and their most popular brands.
   - Example:
     ```
     shoes,Air
     forks,Pfitzcraft
     ```

---

## **Testing the Script**

### Example Input File

Create a file named `orders.csv` with the following content:

```
ID944806,Willard Vista,Intelligent Copper Knife,3,Hilll-Gorczany
ID644525,Roger Centers,Intelligent Copper Knife,1,Kunze-Bernhard
ID348204,Roger Centers,Small Granite Shoes,4,Rowe and Legros
ID710139,Roger Centers,Intelligent Copper Knife,4,Hilll-Gorczany
ID426632,Willa Hollow,Intelligent Copper Knife,4,Hilll-Gorczany
```

Run the script:

```bash
node processOrders.js orders.csv
```

### Expected Output Files

- **`0_orders.csv`**:
  ```
  Intelligent Copper Knife,2.4
  Small Granite Shoes,0.8
  ```

- **`1_orders.csv`**:
  ```
  Intelligent Copper Knife,Hilll-Gorczany
  Small Granite Shoes,Rowe and Legros
  ```