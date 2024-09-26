const express = require("express");
const cors = require("cors");
// const db = require("./models/index_model");
const taskRoutes = require("./routes/task_routes");
const authRoutes = require("./routes/auth_routes");
const notificationRoutes = require("./routes/notification_routes");
const authMiddleware = require("./middlewares/auth_middleware");
const setupSwagger = require("./config/swagger");

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
app.use("/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("we recived a get request");
});

setupSwagger(app);

// db.sequelize.sync().then(() => {
//   console.log("Database synchronized");
// });

module.exports = app;
