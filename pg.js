const { Client } = require('pg')

async function main() {
	const client = new Client({database:'test',user:'postgres'})
	await client.connect()

	await client.query(`
drop table if exists item;
create table item
(
    id  serial
        primary key,
    str jsonb not null
);
`);

	await client.query('insert into item (str) VALUES ($1)', ['"test"'])
	console.log('Inserting item with column value "test"')
	const res = await client.query('SELECT * from item')
	console.log('Retrieved row:', res.rows[0])
	await client.end()
}

main();
