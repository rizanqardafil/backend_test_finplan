-- Membuat tabel users
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  gender VARCHAR(1),
  status VARCHAR(10)
);

-- Memasukkan nilai pada tabel users
INSERT INTO users (id, name, gender, status) VALUES
(1, 'Frasch', 'F', 'active'),
(2, 'Garmuth', 'M', 'active'),
(3, 'Goliath', 'M', 'active'),
(4, 'Luna', 'F', 'active'),
(5, 'Zeus', 'M', 'active'),
(6, 'Aphrodite', 'F', 'active'),
(7, 'Ares', 'M', 'active'),
(8, 'Lina', 'F', 'active'),
(9, 'Lanaya', 'F', 'active'),
(10, 'Hades', 'M', 'active');

-- Membuat tabel hobbies
CREATE TABLE hobbies (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  level INT
);

-- Memasukkan nilai pada tabel hobbies
INSERT INTO hobbies (id, name, level) VALUES
(1, 'Running', 8),
(2, 'Skipping', 5),
(3, 'Push Up', 10);

-- Membuat tabel map_user_hobby
CREATE TABLE map_user_hobby (
  id INT PRIMARY KEY,
  id_user INT,
  id_hobby INT,
  status VARCHAR(10)
);

-- Memasukkan nilai pada tabel map_user_hobby
INSERT INTO map_user_hobby (id, id_user, id_hobby, status) VALUES
(1, 1, 1, 'active'),
(2, 3, 1, 'active'),
(3, 8, 3, 'deleted'),
(4, 2, 2, 'active'),
(5, 4, 1, 'deleted'),
(6, 6, 2, 'active'),
(7, 5, 3, 'active'),
(8, 8, 1, 'active'),
(9, 7, 2, 'active'),
(10, 4, 2, 'active'),
(11, 9, 3, 'deleted'),
(12, 10, 2, 'deleted'),
(13, 3, 2, 'active'),
(14, 2, 3, 'active'),
(15, 10, 2, 'active');
