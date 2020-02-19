-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName from Products
JOIN Categories
ON Products.CategoryID = Categories.CategoryID;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id as OrderId, CompanyName, OrderDate
FROM [Order]
INNER JOIN Shipper
ON [Order].ShipVia = Shipper.Id
WHERE OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records

SELECT Quantity, ProductName 
FROM OrderDetail
INNER JOIN Product
ON OrderDetail.ProductId = Product.Id
WHERE  OrderId = 10251
ORDER BY ProductName ASC;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT Id as OrderID, CompanyName, LastName as Employee_LastName
FROM [Order]
INNER JOIN Customer
ON [Order].CustomerId = Customer.Id
INNER JOIN Employee
On [Order].EmployeeId = Employee.Id;