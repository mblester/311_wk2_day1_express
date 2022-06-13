const express = require('express')
const app = express()
//get data
const data = require('./data');

// let fakeNewPerson = {
//   id: 6,
//   "name": "I am Sam",
//   "phone": "1111",
//   "email": "fake@fake.com",
//   "postalZip": "85020"
// };

app.use(express.json())

const port = 3000;

//get all people resource
app.get('/people', (req, res) => {
  res.json(data)
})

//get one person resource
app.get("/people/:id", (req, res) => {
  const id = req.params.id;
  const foundItem = data.find((item, index, arr) => item.id === +req.params.id);

  res.json(foundItem)
  // const person = people.find((person) => person.id === Number(id));
  // res.json(person);
});

app.post("/people", (req, res) => {
  const length = data.length;
  const newPerson = {
    id: length + 1,
    ...req.body,
  }
  data.push(newPerson)
  res.json(data)
});

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))