// const dotenv = require('dotenv/config');
const db = require('./src/index');
const { usersTable } = require('./src/db/schema');

async function GetAllUsers() {
    const users = await db.select().from(usersTable);
    console.log(`Users in DB`, users);
    return users;
}


async function createUser({ id, name, email }) {
    await db.insert(usersTable).values({
        id,
        name,
        email,
    });
}



GetAllUsers();
