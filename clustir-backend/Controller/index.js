
const UserModel = require("../Models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// exports.login = asyncHandler(async (req, res, next) => {

//   try {
//     let { body } = req;
//     // Json creation for storing it in database
//     let whereQuery = {
//       email: body.email,
//     };
//     UserModel.findOne(whereQuery)
//       .then((response) => {
//         if (response) {
//           if (bcrypt.compareSync(body.password, response.password)) {
//             // generate jwt token
//             let token = jwt.sign(
//               {
//                 Username: response.Username,
//                 userType: response.userType,
//                 email: response.email,
//                 id: response._id,
//               },
//               `key23KFUWqdi789`
//             );

//             res.status(200).json({
//               message: "Successfully logged in",
//               data: {
//                 Username: response.Username,
//                 userType: response.userType,
//                 email: response.email,
//                 id: response._id,
//                 Token: token,
//               },
//             });
//           } else {
//             res.status(403).json({
//               message: "Inserted Password is incorrect",
//             });
//           }
//         } else {
//           res.status(404).json({
//             message: "User Not Found with the given Email Id",
//           });
//         }
//       })
//       .catch((error) => {
//         printConsole(error);
//       });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "An error occurred" });
//   }

// });

// exports.register = asyncHandler(async (req, res, next) => {
//   try {
//     let { body } = req;
//     // Check if user already exists
//     let whereQuery = {
//       email: body.email,
//     };
//     UserModel.findOne(whereQuery)
//       .then((response) => {
//         if (response) {
//           res.status(409).json({
//             message: "User already exists",
//           });
//         } else {
//           // Create new user
//           let newUser = new UserModel({
//             email: body.email,
//             password: bcrypt.hashSync(body.password, 10),
//             // Add other user properties here
//           });
//           newUser.save()
//             .then((savedUser) => {
//               // generate jwt token
//               let token = jwt.sign(
//                 {
//                   Username: savedUser.Username,
//                   userType: savedUser.userType,
//                   email: savedUser.email,
//                   id: savedUser._id,
//                 },
//                 `key23KFUWqdi789`
//               );

//               res.status(201).json({
//                 message: "User registered successfully",
//                 data: {
//                   Username: savedUser.Username,
//                   userType: savedUser.userType,
//                   email: savedUser.email,
//                   id: savedUser._id,
//                   Token: token,
//                 },
//               });
//             })
//             .catch((error) => {
//               console.error("Error registering user:", error);
//               res.status(500).json({ error: "An error occurred" });
//             });
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking user existence:", error);
//         res.status(500).json({ error: "An error occurred" });
//       });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

const register = async (req, res) => {
  try {
    let { body } = req;
    // Check if user already exists
    let whereQuery = {
      email: body.email,
    };
    UserModel.findOne(whereQuery)
      .then((response) => {
        if (response) {
          return res.status(409).json({
            message: "User already exists",
          });
        } else {
          // the OTP should expire in one minute
          const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6 digit OTP
          // Send the OTP to the email
          const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
              user: 'vivian.hahn@ethereal.email',
              pass: 'MrYjFTTMdqbwsuCh2h'
            }
          });


          const mailOptions = {
            from: 'username@example.com', // replace with your email
            to: body.email,
            subject: 'Your OTP',
            text: `Your OTP is ${otp}`,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return res.status(500).json({ message: 'Error sending OTP', error });
            } else {
              // Set timeout to delete OTP after one minute
              setTimeout(() => {
                UserModel.findOneAndUpdate({ email: savedUser.email }, { reset_token: null }, (err, doc) => {
                  if (err) {
                    console.error("Error deleting OTP:", err);
                  }
                });
              }, 60000); // One minute in milliseconds
              res.status(200).json({ message: 'OTP sent successfully' });
            }
          });
          // Create new user
          let newUser = new UserModel({
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            reset_token: otp,
            // Add other user properties here
          });
          newUser.save()
            .then((savedUser) => {
              // generate jwt token
              let token = jwt.sign(
                {
                  email: savedUser.email,
                  id: savedUser._id,
                },
                `key23KFUWqdi789`
              );

              return res.status(201).json({
                message: "User registered successfully",
                data: {
                  email: savedUser.email,
                  password: savedUser.password,
                  // id: savedUser._id,
                  // Token: token,
                },
              });
            })
            .catch((error) => {
              console.error("Error registering user:", error);
              return res.status(500).json({ error: "An error occurred" });
            });
        }
      })
      .catch((error) => {
        console.error("Error checking user existence:", error);
        return res.status(500).json({ error: "An error occurred" });
      });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
}

const verifyUser = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const userDetail = await UserModel.findOne({ email })
    if (!userDetail) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (userDetail && userDetail.reset_token === otp) {
      await UserModel.updateOne({ email }, { is_verified: true });
      return res.status(200).json({ message: 'OTP verification successful' });
    }
    return res.status(400).json({ message: 'OTP verification failed' });

  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { register, verifyUser }