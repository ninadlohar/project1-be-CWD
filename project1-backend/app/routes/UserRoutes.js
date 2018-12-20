const userController = require('../controllers/UserController');
const appConfig = require('./../../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/users`;

  // params: firstName, lastName, isAdmin, mobileNumber, email, password, userName, countryName
  app.post(`${baseUrl}/signup`, userController.signUpFunction);
  /**
   * @apiGroup users
   * @apiVersion 1.0.0
   * @api {post} /api/v1/users/signup api for registering a new user
   * 
   * @apiParam {string} firstName First Name of user. (body params)(required)
   * @apiParam {string} lastName Last Name of user. (body params)(required)
   * @apiParam {string} email Email of user. (body params)(required)
   * @apiParam {string} userName User Name of user. (body params)(required)
   * @apiParam {string} countryName Country Name of user. (body params)(required)
   * @apiParam {number} mobileNumber Mobile Number of user. (body params)(required)
   * @apiParam {boolean} isAdmin boolean(true/false) of user. (body params)(required)
   * @apiParam {string} password Password of user. (body params)(required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
        "__v": 0,
        "userName": "ninad",
        "email": "devilslove4evil@gmail.com",
        "countryName": "India",
        "_id": "5c19f2d04567130ae44fc5ae",
        "createdOn": "2018-12-19T07:27:12.000Z",
        "isAdmin": true,
        "mobileNumber": 123456789,
        "lastName": "Lohar",
        "userId": "mL08u4hBU",
        "firstName": "Ninad"
    }
}
  */

  // params: email, password
  app.post(`${baseUrl}/login`, userController.loginFunction);
  /**
   * @apiGroup users
   * @apiVersion 1.0.0
   * @api {post} /api/v1/users/login api for logging in users
   * 
   * @apiParam {string} email Email of the user. (body params)(required)
   * @apiParam {string} password Password of the user. (body params)(required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "Login Successful",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjRMOFhYclpoVyIsImlhdCI6MTU0NTIwNTQ2NDk1OSwiZXhwIjoxNTQ1MjkxODY0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibmluYWQiLCJlbWFpbCI6ImRldmlsc2xvdmU0ZXZpbEBnbWFpbC5jb20iLCJjb3VudHJ5TmFtZSI6IkluZGlhIiwiaXNBZG1pbiI6dHJ1ZSwibW9iaWxlTnVtYmVyIjoxMjM0NTY3ODksImxhc3ROYW1lIjoiTG9oYXIiLCJ1c2VySWQiOiJtTDA4dTRoQlUiLCJmaXJzdE5hbWUiOiJOaW5hZCJ9fQ.SxNvMt7spMZ82EU2y-pgWnoLbfSvxggZD5uwvtpXano",
        "userDetails": {
            "userName": "ninad",
            "email": "devilslove4evil@gmail.com",
            "countryName": "India",
            "isAdmin": true,
            "mobileNumber": 123456789,
            "lastName": "Lohar",
            "userId": "mL08u4hBU",
            "firstName": "Ninad"
        }
    }
}
   */

  app.post(`${baseUrl}/logout/:userId`, userController.logout);
  /**
   * @apiGroup users
   * @apiVersion 1.0.0
   * @api {post} /api/v1/users/logout/:userId api to log out of application
   * 
   * @apiParam {string} userId User ID of the user (body params)(required)
   * @apiParam {string} authToken Authorization Token of user (body params)(required) 
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "Logged Out Successfully",
    "status": 200,
    "data": null
}
   */

  // params: email
  app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword)
  /**
   * @apiGroup users
   * @apiVersion 1.0.0
   * @api {post} /api/v1/users/forgotPassword api for sending link for resetting password
   * 
   * @apiParam {string} email Email of the user (body params)(required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "email send successfully for password reset",
    "status": 200,
    "data": {
        "error": false,
        "message": "email sent successfully for reseting the password",
        "status": 200,
        "data": "email sent"
    }
}
   */

  // params: password
  app.post(`${baseUrl}/resetPassword`, userController.resetPassword)
  /**
   * @apiGroup users
   * @apiVersion 1.0.0
   * @api {post} /api/v1/users/resetPassword api for resetting password 
   * 
   * @apiParam {string} password Password of the user (body params)(required)
   * @apiParam {userId} userId User Id of the user (body params)(required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * { 
    "error": false,
    "message": "email successfully reset",
    "status": 200,
    "data": { 
        "error": false,
        "message": "password reset successfull",
        "status": 200,
        "data": "password reset successfull" 
    } 
}
   */

  app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUsers)
  /**
   * @apiGroup users
   * @apiVersion 1.0.0
   * @api {get} /api/v1/users/view/all api to get all users of application
   * 
   * @apiParam {string} authToken authToken of the user. (query params/body params/header)(required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "All User Details Found",
    "status": 200,
    "data": [
        {
            "userName": "ninad-admin",
            "email": "ninad.lohar94@gmail.com",
            "createdOn": "2018-12-16T09:30:19.000Z",
            "isAdmin": true,
            "password": "$2a$10$rQdMZtNXitUc7ZgsmSxj/.yJOFi1ImvSzA3vI1kMHPtvGsUGWYuAS",
            "mobileNumber": 1111111111,
            "lastName": "lohar",
            "userId": "JmXPtQayT",
            "firstName": "ninad "
        },
        {
            "userName": "sachin",
            "email": "tavkqqzd1@gmail.com",
            "createdOn": "2018-12-16T09:31:00.000Z",
            "isAdmin": false,
            "password": "$2b$10$ytRphgrfo3KfBhlfASAj/umCJf.r/83AQavZxANTWGJbmWHnzaMwK",
            "mobileNumber": 1111111111,
            "lastName": "tendulkar",
            "userId": "iN06B99Zd",
            "firstName": "sachin"
        }
    ]
}
   */


}

module.exports = {
  setRouter: setRouter
}