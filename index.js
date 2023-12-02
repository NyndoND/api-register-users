import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.json("Artplace API status: OK");
});

// ### ROTAS PARA CLIENTES
const users = [];


app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: Math.random().toString(36),
    name,
    email,
  };

  users.push(newUser);
  return res.json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  users.splice(index, 1);
  return res.status(204).json();
});

// ### ROTAS PARA ARTISTAS
const artistas = [];

app.get("/artistas", (req, res) => {
  return res.json(artistas);
});

app.post("/artistas", (req, res) => {
  const { name, email } = req.body;

  const newartistas = {
    id: Math.random().toString(36),
    name,
    email,
  };

  artistas.push(newartistas);
  return res.json(newartistas);
});

app.delete("/artistas/:id", (req, res) => {
  const { id } = req.params;

  const index = artistas.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  artistas.splice(index, 1);
  return res.status(204).json();
});

app.listen(port, () => console.log(`listening on ${port}`));
