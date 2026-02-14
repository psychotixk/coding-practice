
const { defineConfig } = require('drizzle-kit');

const config = defineConfig({
    dialect: 'postgresql',
    out: './drizzle',
    schema: './src/db/schema.js',
    dbCredentials: {
        url: 'postgres://postgres:admin@localhost:5432/mydb'
    },
});


module.exports = config;