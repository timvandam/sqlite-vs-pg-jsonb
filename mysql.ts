const mariadb = require('mariadb');

async function main () {
	const client = await mariadb.createConnection({
		user: 'mysql',
		database: 'default'
	});

	await client.query(`
drop table if exists item;
`)

	await client.query(`
create table item
(
    id serial,
    str json not null
);
`)

	await client.query('insert into item (str) VALUES (?)', ['"test"'])
	console.log('Inserting item with column value "test"')
	const res = await client.query('SELECT * from item')
	console.log('Retrieved row:', res[0])
	await client.end()
}

main()
