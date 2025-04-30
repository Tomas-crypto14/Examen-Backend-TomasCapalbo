const port = 8000;
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

//EJERCICIO 1
let comida = [
    {
        id: 1,
        comida: "Hamburguesa"
    },
    {
        id: 2,
        comida: "Pizza"
    },
    {
        id: 3,
        comida: "Macarrones"
    }
]

//let comida = ["Hamburguesa", "Pizza", "Macarrones"];

app.get("/comida", (req, res) => {
    //Hay que ponerlo dentro para que funcione
    let randomFood = Math.floor(Math.random()*comida.length);
    res.send(comida[randomFood]);
})

//EJERCICIO 2
let minmax = [
    
]
app.post("/minmax", (req, res) => {

    const number = req.body.number;
    minmax.push(number); 
    //Había que poner spread   
    const minMath = Math.min(...minmax);
    const maxMath = Math.max(...minmax);
    console.log(req.body.number);
    res.json ({min: minMath, max: maxMath});
})

//EJERCICIO 3
//Estaba puesto el app.put en vez de app.delete, put es para actualizar y eso es un codigo para eliminar usuarios,
//no para actualizarlos.
app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const sql = `DELETE FROM users WHERE id=${userId}`;
    db.query(sql, (error, result) => {
        if(error) throw error;
        if (result.affectedRows > 0){
        console.log(result);
        res.send(`User ${userId} deleted from the db.`);
        }
    })
})

/*const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root',
    database: 'ExamennodeJS',
})
db.connect()*/
app.listen(port, () => {
    console.log("Puerto escuchado, que empiece el examen!")
})