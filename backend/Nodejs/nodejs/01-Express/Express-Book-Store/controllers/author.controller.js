const authorsTable = require('../models/author.model');
const db = require('../db');
const {eq} = require('drizzle-orm')

const booksTable = require('../models/book.model')



exports.getAllAuthors = async function (req, res) {
    const authors = await db.select().from(authorsTable)
    return res.json(authors)
};


exports.getAuthorsById = async function (req, res) {
    const id = req.params.id;

    const [author] = await db.select().from(authorsTable).where(eq(authorsTable.id, id));
    
    if (!author) {
        res.status(404).json({ error: `Author with ID ${id} does not exists`});
    }

    return res.json(author);
};


exports.newAuthor = async function(req, res) {
    const { firstName, lastName, email } = req.body;

    const [insert] = await db
    .insert(authorsTable).values({ firstName, lastName, email })
    .returning({id: authorsTable.id});

    return res.json({ message: "Author has been created...."}, insert.id)
};


exports.getBooksByAuthor = async function(req, res) {

    const books = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.authorId, req.params.id));

    return res.json(books)
}
