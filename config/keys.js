// module.exports = {
//   mongoURI:
//     "mongodb+srv://dev:vwOwx97LCoaHs0mf@mern-twitter.mroze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   secretOrKey: "kfU}{oLq+Z}&8h2",
// };
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
