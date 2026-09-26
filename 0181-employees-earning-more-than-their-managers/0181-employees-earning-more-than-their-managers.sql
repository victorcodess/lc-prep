-- Write your PostgreSQL query statement below
SELECT staff.Employee
FROM Employee staff (id, Employee, salary, managerId)
JOIN Employee boss (id, Employee, salary, managerId)
    ON staff.managerId = boss.id
WHERE staff.salary > boss.salary