CREATE TABLE Developers (
    member_id INT,
    name VARCHAR(90),
    email VARCHAR(90),
    influence_count INT,
    Joining_date DATE,
    multiplier INT
);


INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (1, 'Taylor Otwell', 'otwell@laravel.com', 739360, '2020-6-10', 10);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (2, 'Ryan Dahl', 'ryan@nodejs.org', 633632, '2020-04-22', 10);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (3, 'Brendan Eich', 'eich@javascript.com', 939570, '2020-05-07', 8);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (5, 'Evan You', 'you@vuejs.org', 982630, '2020-06-11', 7);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (6, 'Rasmus Lerdorf', 'lerdorf@php.net', 937927, '2020-06-03', 8);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (7, 'Guido van Rossum', 'guido@python.org', 968827, '2020-07-18', 19);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (8, 'Adrian Holovaty', 'adrian@djangoproject.com', 570724, '2020-05-07', 5);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (9, 'Simon Willison', 'simon@djangoproject.com', 864615, '2020-04-30', 4);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (10, 'James Gosling', 'james@java.com', 719491, '2020-05-18', 5);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (11, 'Rod Johnson', 'rod@spring.io', 601744, '2020-05-18', 7);

INSERT INTO developers (member_id, name, email, influence_count, Joining_date, multiplier)
VALUES (12, 'Satoshi Nakamoto', 'nakamoto@blockchain.com', 630488, '2020-05-10', 10);

SELECT * FROM developers;

ALTER TABLE developers
CHANGE COLUMN influence_count followers INT;

DESCRIBE developers;

UPDATE developers
SET followers = followers + 10;

SELECT * FROM developers;

SELECT name, email, followers
FROM developers;

SELECT name, ((followers * 100/1000000) * (multiplier * 100/20)) / 100 AS Efficiency
FROM developers;
