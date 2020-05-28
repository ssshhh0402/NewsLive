// userService.js
import { createInstance } from "./index.js";

const instance = createInstance();

function findById(id, success, fail) {
  instance
    .get("/api/users/" + id)
    .then(success)
    .catch(fail);
}

function findByName(name, success, fail) {
  instance
    .get("/api/users/name/" + name)
    .then(success)
    .catch(fail);
}

function signup(email, name, password, success, fail) {
  const user = {
    email: email,
    name: name,
    password: password
  };

  instance
    .post("/api/users", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

// function getMemberInfo(token, success, fail) {
//   const headers = {
//     "jwt-auth-token": token 
//   };
//   instance
//     .post("/api/getUser", JSON.stringify(headers))
//     .then(success)
//     .catch(fail);
// }


function login(email, password, success, fail) {
  const body = {
    email: email,
    password: password
  };

  instance
    .post("/api/users/login", JSON.stringify(body))
    .then(success)
    .catch(fail);
}

function update(user, success, fail) {
  instance
    .put("/api/users", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

function sendMail(sender, receiver, success, fail) {
  // var mailData = {uid:sender, select:receiver}
  let form = new FormData();
  form.append('uid', sender);
  form.append('select', receiver)
  instance
    .post("/api/mailsend", form)
    .then(success)
    .catch(fail);
}

export { findById, findByName, signup, login, update, sendMail };
