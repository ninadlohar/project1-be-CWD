const express = require('express');
const meetingController = require("../controllers/MeetingController");
const appConfig = require("./../../config/appConfig")
const auth = require('../middlewares/auth')

let setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/meeting`;

  // params: startDate, endDate, title, createdByEmail, createdBy, createdById, createdForEmail, createdFor, meetingId
  app.post(`${baseUrl}/createMeeting`, auth.isAuthorized, meetingController.createMeeting);
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {post} /api/v1/meeting/createMeeting to api to add meeting
   * 
   * @apiParam {string} topic Topic of the meeting (body param) (required)
   * @apiParam {date} startDate Start Date of Meeting (body param) (required)
   * @apiParam {date} endDate End of Meeting (body param) (required)
   * @apiParam {string} createdBy Name of the Admin who created meeting (body param) (required)
   * @apiParam {string} createdByEmail Email of the Admin who created the meeting (body param) (required)
   * @apiParam {string} createdById ID of the Admin who created the meeting (body param) (required)
   * @apiParam {string} createdFor ID of the Normal User for whom the meeting was created (body param) (required)
   * @apiParam {string} createdForEmail email of the Normal user for whom the meeting was created (body param) (required)
   * @apiParam {string} authToken Authorization Token(body param/header/query param) of the admin who created meeting (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * { 
     "error": false,
     "message": "meeting created",
     "status": 200,
     "data": {
          "__v": 0,
          "_id": "5c1a06ad1a0d8a1f24c722fb",
          "createdOn": "2018-12-19T08:51:57.000Z",
          "createdForEmail": "tavkqqzd1@gmail.com",
          "createdFor": "iN06B99Zd",
          "createdById": "JmXPtQayT",
          "createdByEmail": "ninad.lohar94@gmail.com",
          "createdBy": "ninad  lohar",
          "endDate": "2018-12-21T08:51:33.000Z",
          "startDate": "2018-12-21T08:51:33.000Z",
          "title": "Complete Project",
          "meetingId": "PzF3CuAFY" 
      } 
}
   */

  // params: topic, startDate, endDate
  app.put(`${baseUrl}/updateMeeting/:meetingId`, auth.isAuthorized, meetingController.updateMeeting)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {put} /api/v1/meeting/updateMeeting/:meetingId api to update meeting
   * 
   * @apiParam {string} topic Topic of the meeting (body param) (required)
   * @apiParam {string} meetingId Meeting ID of the meeting
   * @apiParam {string} authToken Authorization Token(header/body param/query param) of the creator of the meeting (body param) (required)
   * @apiParam {date} startDate Start Date of the Meeting (body param) (required)
   * @apiParam {date} endDate End Date of the Meeting (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "updated successfully",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
   */

  // params: userId
  app.get(`${baseUrl}/allMeetings/:userId`, auth.isAuthorized, meetingController.getAllMeetingsOnInit)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {get} /api/v1/meeting/allMeetings/:userId api to fetch all meetings for admin
   * 
   * @apiParam {string} authToken Authorization(body param/header/query param) Token of the admin (body param) (required)
   * @apiParam {string} userId User ID of admin (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http stataus code, result
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "all meetings found",
    "status": 200,
    "data": [
        {
            "createdOn": "2018-12-18T13:51:21.000Z",
            "createdForEmail": "tavkqqzd1@gmail.com",
            "createdFor": "iN06B99Zd",
            "createdById": "JmXPtQayT",
            "createdByEmail": "ninad.lohar94@gmail.com",
            "createdBy": "ninad  lohar",
            "endDate": "2018-12-20T14:14:00.000Z",
            "startDate": "2018-12-18T18:42:00.000Z",
            "title": "fdgfdg",
            "meetingId": "oVHJEoyCO"
        },
        {
            "createdOn": "2018-12-18T18:42:16.000Z",
            "createdForEmail": "tavkqqzd1@gmail.com",
            "createdFor": "iN06B99Zd",
            "createdById": "JmXPtQayT",
            "createdByEmail": "ninad.lohar94@gmail.com",
            "createdBy": "ninad  lohar",
            "endDate": "2018-12-28T18:42:11.000Z",
            "startDate": "2018-12-26T18:42:08.000Z",
            "title": "fdgdfg",
            "meetingId": "MT3ni2fc0"
        }

    ]
}
   */

  // query params: createdById, createdForId
  app.get(`${baseUrl}/getMeetingOnClick`, auth.isAuthorized, meetingController.getAllMeetingsOnClick)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {get} /api/v1/meeting/getMeetingOnClick api for get all meetings onClick(in browser) as admin
   * 
   * @apiParam {string} authToken Authorization(body param/header/query param) Token of the admin (body param) (required)
   * @apiParam {string} createdById User ID of admin (body param) (required)
   * @apiParam {string} createdForId User ID of nomal user (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http stataus code, result
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "all meetings found",
    "status": 200,
    "data": [
        {
            "createdOn": "2018-12-18T13:51:21.000Z",
            "createdForEmail": "tavkqqzd1@gmail.com",
            "createdFor": "iN06B99Zd",
            "createdById": "JmXPtQayT",
            "createdByEmail": "ninad.lohar94@gmail.com",
            "createdBy": "ninad  lohar",
            "endDate": "2018-12-20T14:14:00.000Z",
            "startDate": "2018-12-18T18:42:00.000Z",
            "title": "fdgfdg",
            "meetingId": "oVHJEoyCO"
        },
        {
            "createdOn": "2018-12-18T18:42:16.000Z",
            "createdForEmail": "tavkqqzd1@gmail.com",
            "createdFor": "iN06B99Zd",
            "createdById": "JmXPtQayT",
            "createdByEmail": "ninad.lohar94@gmail.com",
            "createdBy": "ninad  lohar",
            "endDate": "2018-12-28T18:42:11.000Z",
            "startDate": "2018-12-26T18:42:08.000Z",
            "title": "fdgdfg",
            "meetingId": "MT3ni2fc0"
        }
    ]
}
   */

  // param: meetingId
  app.get(`${baseUrl}/getOneMeeting/:meetingId`, auth.isAuthorized, meetingController.getSingleMeeting)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {get} /api/v1/meeting/getOneMeeting/:meetingId api to get meeting of the selected meeting(snapshot) as admin
   * 
   * @apiParam {string} authToken Authorization(body param/header/query param) Token of the admin (body param) (required)
   * @apiParam {string} meetingId Meeting ID of the meeting (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "Meeting Found",
    "status": 200,
    "data": {
        "_id": "5c193f88aeba780384856aee",
        "createdOn": "2018-12-18T18:42:16.000Z",
        "createdForEmail": "tavkqqzd1@gmail.com",
        "createdFor": "iN06B99Zd",
        "createdById": "JmXPtQayT",
        "createdByEmail": "ninad.lohar94@gmail.com",
        "createdBy": "ninad  lohar",
        "endDate": "2018-12-28T18:42:11.000Z",
        "startDate": "2018-12-26T18:42:08.000Z",
        "title": "fdgdfg",
        "meetingId": "MT3ni2fc0",
        "__v": 0
    }
}
   */

  // param: meetingId
  app.get(`${baseUrl}/getNormalMeetings/:userId`, auth.isAuthorized, meetingController.getNormalMeetingsOnInit)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {get} /api/v1/meeting/getNormalMeetings/:userId api to fetch all meetings of normal user
   * 
   * @apiParam {string} authToken Authorization(body param/header/query param) Token of the normal user (body param) (required)
   * @apiParam {string} userId User ID of normal user (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http stataus code, result
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "all meetings found",
    "status": 200,
    "data": [
        {
            "createdOn": "2018-12-18T13:51:21.000Z",
            "createdForEmail": "tavkqqzd1@gmail.com",
            "createdFor": "iN06B99Zd",
            "createdById": "JmXPtQayT",
            "createdByEmail": "ninad.lohar94@gmail.com",
            "createdBy": "ninad  lohar",
            "endDate": "2018-12-20T14:14:00.000Z",
            "startDate": "2018-12-18T18:42:00.000Z",
            "title": "fdgfdg",
            "meetingId": "oVHJEoyCO"
        },
        {
            "createdOn": "2018-12-18T18:42:16.000Z",
            "createdForEmail": "tavkqqzd1@gmail.com",
            "createdFor": "iN06B99Zd",
            "createdById": "JmXPtQayT",
            "createdByEmail": "ninad.lohar94@gmail.com",
            "createdBy": "ninad  lohar",
            "endDate": "2018-12-28T18:42:11.000Z",
            "startDate": "2018-12-26T18:42:08.000Z",
            "title": "fdgdfg",
            "meetingId": "MT3ni2fc0"
        }

    ]
}
   */

  // param: meetingId
  app.post(`${baseUrl}/deleteMeeting/:meetingId`, auth.isAuthorized, meetingController.deleteMeeting)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {post} /api/v1/meeting/deleteMeeting/:meetingId api to delete meeting as admin
   * 
   * @apiParam {string} meetingId Meeting Id of the meeting which is deleted by admin
   * @apiParam {string} authToken Authorization Token of the admin
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   * {
    "error": false,
    "message": "meeting was successfully deleted",
    "status": 200,
    "data": {
        "_id": "5c193f88aeba780384856aee",
        "__v": 0,
        "createdOn": "2018-12-18T18:42:16.000Z",
        "createdForEmail": "tavkqqzd1@gmail.com",
        "createdFor": "iN06B99Zd",
        "createdById": "JmXPtQayT",
        "createdByEmail": "ninad.lohar94@gmail.com",
        "createdBy": "ninad  lohar",
        "endDate": "2018-12-28T18:42:11.000Z",
        "startDate": "2018-12-26T18:42:08.000Z",
        "title": "fdgdfg",
        "meetingId": "MT3ni2fc0"
    }
}
   */

  app.post(`${baseUrl}/setReminder`, auth.isAuthorized, meetingController.setReminder)
  /**
   * @apiGroup meeting
   * @apiVersion 1.0.0
   * @api {post} /api/v1/meeting/setReminder api for sending reminders for today's meeting
   * 
   * @apiParam {string} userId User ID of logged in admin (body param) (required)
   * @apiParam {string} meetingId Meeting Id of the meeting which is deleted by admin (body param) (required)
   * 
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Example:
   * {
    "error": false,
    "message": "meetings found",
    "status": 200,
    "data": {
        "error": false,
        "message": "Meetings Found and sent reminders",
        "status": 200,
        "data": null
    }
}
   * 
   */
}

module.exports = {
  setRouter: setRouter
}