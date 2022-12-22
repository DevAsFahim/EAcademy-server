const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const courses = require('./data/courses.json');

app.use(cors())

// default page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// get course data
app.get('/courses', (req, res) => {
    res.send(courses)
})

// get category
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id)
    res.send(selectedCourse)
})

// listed port
app.listen(port, () => {
    console.log(`my app listening on port ${port}`)
})