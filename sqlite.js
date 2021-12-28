const db = require('better-sqlite3')('asd.db')


db.exec(`
drop table if exists item;
create table item
(
    id  integer primary key autoincrement,
    str jsonb not null
);
`);

const insert = db.prepare('insert into item (str) VALUES (?)')
console.log('Inserting item with column value "test"')
insert.run('"test"')
console.log('Retrieved row:', db.prepare('SELECT * from item').get())
