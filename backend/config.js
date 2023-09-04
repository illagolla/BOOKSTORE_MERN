import 'dotenv/config'

export const PORT = process.env.PORT || 5555;

export const mongoDBURL = `mongodb+srv://${process.env.USER}:${process.env.kEY}@nodeexpressprojects.jhmiapc.mongodb.net/books-collection?retryWrites=true&w=majority`