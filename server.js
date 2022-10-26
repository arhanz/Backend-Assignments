const express = require("express");
const app = express();
const port = 3000;
app.get("/users", (res, req) => {
  res.status(200).send(
    {
      id: 1,
      name: "Arhan Zeeshan",
      Message: "Successfull",
    },
    {
      id: 2,
      name: "Hayan Zeeshan",
      Message: "Successfull",
    },
    {
      id: 3,
      name: "Haya Zeeshan",
      Message: "Successfull",
    }
  );
});
app.get("/user/2", (res, req) => {
  res.status(200).send({
    id: 2,
    name: "Hayan Zeeshan",
    Message: "Successfull",
  });
});
app.get("/user/3", (res, req) => {
  res.status(200).send({
    id: 3,
    name: "Haya Zeeshan",
    Message: "Successfull",
  });
});
app.get("/user/1", (res, req) => {
  res.status(200).send({
    id: 1,
    name: "Arhan Zeeshan",
    Message: "Successfull",
  });
});
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
