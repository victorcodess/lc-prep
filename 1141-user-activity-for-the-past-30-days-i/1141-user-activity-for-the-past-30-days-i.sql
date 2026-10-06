-- Write your PostgreSQL query statement below
SELECT
    activity_date AS day,
    COUNT(DISTINCT user_id) AS active_users
FROM
    Activity
WHERE
    activity_date > DATE '2019-07-27' - 30
    AND activity_date <= DATE '2019-07-27'
GROUP BY 1;