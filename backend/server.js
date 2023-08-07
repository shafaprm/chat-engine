const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//Constants
const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res, next) => {
  const { username } = req.body;

  try {
    const response = await axios.post(
        "https://api.chatengine.io/users/",
        {
          username: username,
          secret: username,
          first_name: username,
        },
        {
          headers: { "Private-Key": "5327bfe4-7be7-486a-83d1-f854392b2a87", "Content-Type": "application/json" },
        }
      );

        return res.status(response.status).json(response.data)
  } catch (err) {
    console.log(err)
    // return res.status(err.response.data).json(err.response.data)
    return
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
