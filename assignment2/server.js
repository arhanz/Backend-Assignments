const express = require("express");
const PORT = 9000;

// requiring services
const { listUsers, getUser, addUser, deleteUser } = require("./services");

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
  res.send(`<h1>Assignment 2 is starts here.</h1>`);
});

/**
 * get a user with id
 * @param userId
 */ app.get(
  "/users/:userId",
  (req, res, next) => {
    const { userId } = req.params;

    isNaN(userId) ? res.send({ error: "Invalid userId type." }) : next();

    if (isNaN(userId)) {
      res.send({
        error: "Invalid userId type.",
      });
    } else {
      next();
    }
  },
  (req, res) => {
    const { userId } = req.params;

    const user = getUser(userId);

    res.send(user);
  }
);

/**
 * Add a user to DB
 */
app.post("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = req.body;
  user["id"] = Number(userId);
  const message = addUser(user);
  res.send(message);
});

/**
 * update an existing user
 */

/**
 * delete a user
 */
app.delete("/users/del/:userId", (req, res) => {
  const { userId } = req.params;
  const user = deleteUser(userId);
  res.send(user);
});

/** local host server port start */

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
