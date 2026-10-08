-- Write your PostgreSQL query statement below
SELECT firstName, lastName, city, state
FROM Person final
LEFT JOIN Address other
    ON final.personId = other.personId