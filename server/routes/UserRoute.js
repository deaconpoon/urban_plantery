const express = require("express");

const route = express.Router();

route.get("/api/users/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Deacon",
      email: "deaconpoon@gmail.com",
      password: "1234",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(user);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default userRoute;
