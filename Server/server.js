const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const randomString = require("randomstring");
const session = require("express-session");
const auth = require("./middleware/auth");
const userController = require("./controllers/userController");
const validator = require("validator");


mongoose
  .connect(
    "mongodb+srv://man311:123@cluster0.o8iuqwq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connection successfully ...");
  })
  .catch((err) => "no connection");

const app = express();
// const cors = require('cors')
// app.use(cors())
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { validate: uuidValidate } = require("uuid");
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

const { v4: uuidV4 } = require("uuid");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/peerjs", peerServer);
app.use(session({
  secret: "mywebsitesessionisthis",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "ejs");
app.use(express.static("public"));

const securePassword = async (password) => {
  try {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
  } catch (error) {
    console.log(error.message);
  }
};

app.get("/", auth.isLogout, (req, res) => {
  // res.redirect(`/${uuidV4()}`)
  //req.session.error = '';
  res.render("login_N");
});

app.post("/createNew", function (req, res) {
  res.render("Host_N");
});

app.post("/joinmeet", function (req, res) {
  res.redirect("/join_N");
});

const sendVerifyMail = async (username, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "manan31102002@gmail.com",
        pass: "ckyyilctofautqsl",
      },
    });
    const mailOptions = {
      from: "manan31102002@gmail.com",
      to: email,
      subject: "For verfication mail",
      html:
        "<p> Hii " +
        username +
        ', please click here to <a href="http://localhost:3030/verify?id=' +
        user_id +
        '"> Verify </a> your mail . </p>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent-", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

app.get("/verify", async (req, res) => {
  try {
    const updateInfo = await User.updateOne(
      {
        _id: req.query.id,
      },
      {
        $set: { is_verified: 1 },
      }
    );
    console.log(updateInfo);
    res.render("email-verified");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/login",function (req, res) {
  try {
    res.render("login_N");

  } catch (error) {
    console.log(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const hashPass = await securePassword(req.body.password);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    };

    const usere = await User.findOne({ email: req.body.email });
    const usere2 = await User.findOne({ username: req.body.username });

    if (usere2) {
      res.render("login_N", { message: "This username already exists" });
    }

    else if (usere) {
      res.render("login_N", { message: "This email already exists" });
    }

    else if (!validator.isEmail(req.body.email)) {
      res.render("login_N", { message: "Please enter a valid email address" });
    }

    else if (!validator.isStrongPassword(req.body.password, options)) {
      res.render("login_N", { message: "Please enter a strong password with at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol" });
    }
    else {

      const userData = await user.save();
      if (userData) {
        sendVerifyMail(req.body.username, req.body.email, userData._id);
        res.render("login_N", {
          message:
            "Your registration has been completed successfully. Please check your mail to verify",
        });
      } else {
        res.render("login_N", {
          message: "Your registration has not been completed",
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/signin", auth.isLogin, (req, res) => {
  res.render(("join_N"));
})

app.post("/signin", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const userData = await User.findOne({ username: username });

    if (userData) {
      const passwordMatch = await bcrypt.compare(password, userData.password);
      if (passwordMatch) {
        if (userData.is_verified === 0) {
          res.render("login_N", { message: "Please verify your email first" });
        } else {
          req.session.user = userData._id;
          res.redirect("join_N");
        }
      } else {
        res.render("login_N", { message: "Invalid login details" });
      }
    } else {
      res.render("login_N", { message: "Invalid login details" });
    }
  } catch (error) {
    console.log(error.message);
  }
});


app.get("/join_N", auth.isLogin, (req, res) => {
  res.render("join_N");
})

app.get("/joinmeet", auth.isLogin, (req, res) => {
  res.redirect("/join_N");
})


app.get("/forgot", (req, res) => {
  res.render("forgot");
});


// app.get("http://localhost:3000" , auth.isLogin , (req,res)=>{
//   res.redirect("http://localhost:3000");
// })


const sendResetMail = async (username, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "manan31102002@gmail.com",
        pass: "ckyyilctofautqsl",
      },
    });
    const mailOptions = {
      from: "manan31102002@gmail.com",
      to: email,
      subject: "For reset password",
      html:
        "<p> Hii " +
        username +
        ', please click here to <a href="http://localhost:3030/forgot-password?token=' +
        token +
        '"> Reset </a> your password . </p>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent-", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

app.get("/profile", auth.isLogin,async function (req, res) {
  user_id = req.session.user;
  const userData = await User.findOne({ _id: user_id });
  res.render("profile", { user: userData });
})


app.get("/verification", async (req, res) => {
  res.render("verification");
});

app.post("/verification", async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await User.findOne({ email: email });
    if (userData) {
      sendVerifyMail(userData.username, email, userData._id);
      res.render("verification", {
        message: "Verifiaction link has been sent to your mail",
      });
    } else {
      res.render("verification", { message: "Enter valid email" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/forgot", async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await User.findOne({ email: email });
    if (userData) {
      if (userData.is_verified === 0) {
        res.render("forgot", { message: "Please verify your mail first" });
      } else {
        const randS = randomString.generate();
        userData.token = randS;
        const updatedData = await userData.save();
        sendResetMail(userData.username, userData.email, randS);
        res.render("forgot", {
          message: "Please check your mail to reset your password",
        });
      }
    } else {
      res.render("forgot", { message: "Email is incorrect" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/forgot-password", async (req, res) => {
  try {
    const token = req.query.token;
    const tokenData = await User.findOne({ token: token });
    if (tokenData) {
      res.render("forgot-password", { user_id: tokenData._id });
    } else {
      res.render("404", { message: "Token is invalid" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/forgot-password", async (req, res) => {
  try {
    const password = req.body.password;
    const user_id = req.body.user_id;
    const sPassword = await securePassword(password);

    const updatedData = await User.findByIdAndUpdate(
      { _id: user_id },
      { $set: { password: sPassword, token: "" } }
    );

    res.redirect("/login");
  } catch (error) {
    console.log(error.message);
  }
});

// app.get("/home",auth.isLogin ,function(req, res) {
//   res.render("home");
// });

app.get("/home", auth.isLogin, userController.loadHome);

app.post("/fa93aee1-f54a-494a-9423-41814a1717f7", function (req, res) {
  res.redirect(`/${uuidV4()}`);
});

// app.get('/fa93aee1-f54a-494a-9423-41814a1717f7', function(req, res) {
//   if (uuidValidate(req.params.room)) { //validates if used a proper uuidV4
//     res.render('fa93aee1-f54a-494a-9423-41814a1717f7', {
//       'fa93aee1-f54a-494a-9423-41814a1717f7': req.params.room,
//       title: 'Host | '
//     });
//   } else {
//     res.redirect(`/${uuidV4()}`)
//   }
// })

app.post("/room",async  function (req, res) {
  console.log("running");
  let name = req.body.name;
  let roomId = req.body.roomID;
  console.log(roomId);
  const user_id = req.session.user;
  const userData = await User.findOne({_id:user_id});
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
await userData.meetings.push(today);
console.log(userData);
console.log(userData.meetings.length);

  res.redirect(`/${roomId}`);
});

// res.render('home_N');

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
    // messages
    socket.on("message", (message) => {
      //send message to the same room
      io.to(roomId).emit("createMessage", message);
    });

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

server.listen(process.env.PORT || 3030, () => {
  console.log("Server started");
});
