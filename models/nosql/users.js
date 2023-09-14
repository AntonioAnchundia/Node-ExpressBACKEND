const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //TODO fecha_creacion, fecha_updated - marcas de tiempo
    versionkey: false, //
  }
);

module.exports = mongoose.model("users", UserScheme);
//users es el nombre de la colección, la cual maneja el esquema UserScheme
