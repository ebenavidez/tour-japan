# tour-japan

I added the vendor files and .env. I normally do not add these files
to the repo but for smoother run process, I added the files.

Use laravel sail to run project and view on localhost.

I had trouble installing bootstrap to the project. I wanted to use
its cards and other functionlities especially for creating
a responsive user experience. Unfortunately, I needed more time to
implement the library on this particular project.

I also included my API keys but I will remove access to those keys a few days
after sumbission.

I wanted to have the besic weather info available to users as they choose
which city they want to go to. This would allow them to choose easier which place
to visit as weather play an important role in choosing where people would go,
what they need to wear and bring.

Thank you for your time.

## Part 2: SQL

1.

SELECT
Concat('T', LPAD(t.id, 11, 0)) as tId,
t.nickname,
t.status,
group_concat(tr.role SEPARATOR '/')
FROM trn_teacher as t
INNER JOIN trn_teacher_role as tr
ON t.id = tr.teacher_id
Group by t.id

2.

SELECT
q.id,
q.nickname,
q.Open,
q.Reserved,
SUM(CASE WHEN te.result LIKE 'taught' THEN 1 ELSE 0 END) AS Taught,
SUM(CASE WHEN te.result LIKE 'noshow' THEN 1 ELSE 0 END) AS No_show
FROM
(SELECT t.id, t.nickname,
SUM(CASE WHEN tt.status LIKE 'open' THEN 1 ELSE 0 END) AS Open,
SUM(CASE WHEN tt.status LIKE 'reserved' THEN 1 ELSE 0 END) AS Reserved
FROM trn_teacher AS t
LEFT JOIN trn_time_table AS tt ON t.id = tt.teacher_id
GROUP BY t.id) AS q
LEFT JOIN trn_evaluation AS te ON q.id = te.teacher_id
GROUP BY q.id
