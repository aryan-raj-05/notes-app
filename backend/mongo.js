const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

const url = 'mongodb+srv://aryan56raj342:EFP8zU9hqyirMjL3@cluster0.u1xgkjm.mongodb.net/testNoteApp?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const n = new Note({
  content: 'HTML is easy',
  important: true,
})

const m = new Note({
  content: 'CSS is easy',
  important: false,
})

n.save().then(() => { console.log('saved note') })
m.save().then(() => { console.log('saved note') })

mongoose.connection.close()