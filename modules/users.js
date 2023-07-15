const { db } = require("../config/dbsql");
const { v4: uuidv4 } = require("uuid");

const id = uuidv4();

const register = (email, password) => {
  return db("users").insert({email, password }).returning("id");
};

const login = (email) => {
  return db("users").select("id", "email", "password").where({ email });
};

module.exports = {
  register,
  login,
};
