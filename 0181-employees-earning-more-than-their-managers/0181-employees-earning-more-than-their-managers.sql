-- Write your PostgreSQL query statement below
SELECT staff.name AS Employee
FROM Employee staff
JOIN Employee boss
    ON staff.managerId = boss.id
WHERE staff.salary > boss.salary