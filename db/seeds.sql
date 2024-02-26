INSERT INTO departments (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('sales person', 75000, 1),
('sales lead', 100000, 1),
('mechanical engineer', 100000, 2),
('electrical engineer', 175000, 2),
('accountant', 125000, 3),
('financial advisor', 75000, 3),
('lawyer', 300000, 4),
('police', 65000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('john', 'doe', 1, NULL),
('tom', 'allen', 1, 1),
('sam', 'kash', 2, NULL),
('mike', 'chan', 2, 2),
('sarah', 'lourd', 3, NULL),
('ashley', 'saenz', 3, 3),
('clark', 'kent', 4, NULL),
('bruce', 'wayne', 4, NULL);