-- Write your PostgreSQL query statement below
SELECT today.id
FROM Weather today
JOIN Weather yesterday
    ON today.recordDate = yesterday.recordDate + INTERVAL '1 day'
WHERE today.temperature > yesterday.temperature
