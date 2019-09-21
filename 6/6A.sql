//Query Insert Table name
INSERT INTO `name` (`id`, `name`, `id_work`, `id_salary`) VALUES 1'Bintang', '1', '1'), 2'Tasya', '2', '1');

//Query Insert Table work
INSERT INTO `work` (`id`, `name`, `id_salary`) VALUES (1, 'Frontend Dev', '1'), (2, 'Backend Dev', '2');

//Query Insert Table kategori
INSERT INTO `kategori` (`id`, `salary`) VALUES (1, '10000000'), (2, '12000000');

//Query Join 3 Tabel (name, work, kategori)
SELECT name.name, work.name as work, kategori.salary FROM (name LEFT JOIN work on name.id_work=work.id) LEFT JOIN kategori ON work.id_salary=kategori.id
