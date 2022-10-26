const express = require("express");
const PORT = 1234;

// requiring services
const { listUsers, getUser, addUser, DtUser } = require("./services");

const app = express();

// body parser
app.use(express.json({ extended: false }));

/**
 * list all users
 */
app.get("/users", (req, res) => {
  const users = listUsers();

  res.send(users);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Assignments 2.</h1>`);
});
/**
 * get a user with id
 * @param userId
 */
app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  const user = getUser(userId);

  res.send(user);
});

/**
 * Add a user to DB
 */
app.post("/users", (req, res) => {
  const user = req.body;

  const message = addUser(user);

  res.send(message);
});

/**
 * update an existing user
 */

/**
 * delete a user
 */
app.delete("/users/delete/:userId", (req, res) => {
  res.send("arhan");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
