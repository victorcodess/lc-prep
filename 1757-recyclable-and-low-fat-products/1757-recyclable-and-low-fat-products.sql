-- Write your PostgreSQL query statement below
SELECT tab.product_id
FROM Products tab
WHERE low_fats = 'Y' AND recyclable = 'Y'