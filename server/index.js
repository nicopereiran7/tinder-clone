import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import People from "./models/People.js";

// APP CONFIG
const app = express();
const port = process.env.PORT || 3001;
const connection_url = "mongodb+srv://admin:1999_nico@cluster0.nzsl1.mongodb.net/tinder_db?retryWrites=true&w=majority"

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// DB CONFIG
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log(err));

// API ENDPOINTS
app.get('/', (req, res) => res.status(200).send("mi primer endpoint"));
app.post('/tinder/peoples', (req, res) => {
  const people = req.body;

  People.create(people, (err, data) => {
    if(err) {
      res.status(500).send(err);
    }else {
      res.status(200).send(data);
    }
  })

})
app.get('/tinder/peoples', (req, res) => {
  People.find({}, (err, data) => {
    if(err) {
      res.status(500).send(err);
    }else{ 
      res.status(200).send(data);
    }
  })

})

// LISTEN
app.listen(port, () => {
  console.log(`Server en el puerto ${port}`);
})
