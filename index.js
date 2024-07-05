const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

let users = [
    {
        id: 1,
        name: 'Alex',
        surname: 'Kozlov',
        age: 28,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui quia quibusdam ab dignissimos explicabo quae iusto illum
            aliquam numquam deserunt.
        `,
    },
    {
        id: 2,
        name: 'Ivan',
        surname: 'Kozlov',
        age: 28,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui quia quibusdam ab dignissimos explicabo quae iusto illum
            aliquam numquam deserunt.
        `,
    },
    {
        id: 3,
        name: 'Sergey',
        surname: 'Kozlov',
        age: 28,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui quia quibusdam ab dignissimos explicabo quae iusto illum
            aliquam numquam deserunt.
        `,
    },
    {
        id: 4,
        name: 'Vasiliy',
        surname: 'Kozlov',
        age: 28,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui quia quibusdam ab dignissimos explicabo quae iusto illum
            aliquam numquam deserunt.
        `,
    },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  res.json(users);
})

app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userUpdateData = req.body;

    let updatedUser;

    users = users.map(user => {
        if (user.id == userId) {
            const newUser = {...user, ...userUpdateData};
            updatedUser = newUser;
            return newUser;
        }

        return user;
    });

    res.json(updatedUser);
})

app.get('/error', (req, res) => {
    res.status(400);
    res.json();
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
