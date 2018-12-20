define({ "api": [
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/allMeetings/:userId",
    "title": "api to fetch all meetings for admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of admin (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http stataus code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all meetings found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-12-18T13:51:21.000Z\",\n            \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n            \"createdFor\": \"iN06B99Zd\",\n            \"createdById\": \"JmXPtQayT\",\n            \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n            \"createdBy\": \"ninad  lohar\",\n            \"endDate\": \"2018-12-20T14:14:00.000Z\",\n            \"startDate\": \"2018-12-18T18:42:00.000Z\",\n            \"title\": \"fdgfdg\",\n            \"meetingId\": \"oVHJEoyCO\"\n        },\n        {\n            \"createdOn\": \"2018-12-18T18:42:16.000Z\",\n            \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n            \"createdFor\": \"iN06B99Zd\",\n            \"createdById\": \"JmXPtQayT\",\n            \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n            \"createdBy\": \"ninad  lohar\",\n            \"endDate\": \"2018-12-28T18:42:11.000Z\",\n            \"startDate\": \"2018-12-26T18:42:08.000Z\",\n            \"title\": \"fdgdfg\",\n            \"meetingId\": \"MT3ni2fc0\"\n        }\n\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "GetApiV1MeetingAllmeetingsUserid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getMeetingOnClick",
    "title": "api for get all meetings onClick(in browser) as admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdById",
            "description": "<p>User ID of admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdForId",
            "description": "<p>User ID of nomal user (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http stataus code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all meetings found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-12-18T13:51:21.000Z\",\n            \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n            \"createdFor\": \"iN06B99Zd\",\n            \"createdById\": \"JmXPtQayT\",\n            \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n            \"createdBy\": \"ninad  lohar\",\n            \"endDate\": \"2018-12-20T14:14:00.000Z\",\n            \"startDate\": \"2018-12-18T18:42:00.000Z\",\n            \"title\": \"fdgfdg\",\n            \"meetingId\": \"oVHJEoyCO\"\n        },\n        {\n            \"createdOn\": \"2018-12-18T18:42:16.000Z\",\n            \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n            \"createdFor\": \"iN06B99Zd\",\n            \"createdById\": \"JmXPtQayT\",\n            \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n            \"createdBy\": \"ninad  lohar\",\n            \"endDate\": \"2018-12-28T18:42:11.000Z\",\n            \"startDate\": \"2018-12-26T18:42:08.000Z\",\n            \"title\": \"fdgdfg\",\n            \"meetingId\": \"MT3ni2fc0\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "GetApiV1MeetingGetmeetingonclick"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getNormalMeetings/:userId",
    "title": "api to fetch all meetings of normal user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the normal user (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of normal user (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http stataus code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all meetings found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-12-18T13:51:21.000Z\",\n            \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n            \"createdFor\": \"iN06B99Zd\",\n            \"createdById\": \"JmXPtQayT\",\n            \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n            \"createdBy\": \"ninad  lohar\",\n            \"endDate\": \"2018-12-20T14:14:00.000Z\",\n            \"startDate\": \"2018-12-18T18:42:00.000Z\",\n            \"title\": \"fdgfdg\",\n            \"meetingId\": \"oVHJEoyCO\"\n        },\n        {\n            \"createdOn\": \"2018-12-18T18:42:16.000Z\",\n            \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n            \"createdFor\": \"iN06B99Zd\",\n            \"createdById\": \"JmXPtQayT\",\n            \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n            \"createdBy\": \"ninad  lohar\",\n            \"endDate\": \"2018-12-28T18:42:11.000Z\",\n            \"startDate\": \"2018-12-26T18:42:08.000Z\",\n            \"title\": \"fdgdfg\",\n            \"meetingId\": \"MT3ni2fc0\"\n        }\n\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "GetApiV1MeetingGetnormalmeetingsUserid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getOneMeeting/:meetingId",
    "title": "api to get meeting of the selected meeting(snapshot) as admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Meeting ID of the meeting (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5c193f88aeba780384856aee\",\n        \"createdOn\": \"2018-12-18T18:42:16.000Z\",\n        \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n        \"createdFor\": \"iN06B99Zd\",\n        \"createdById\": \"JmXPtQayT\",\n        \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n        \"createdBy\": \"ninad  lohar\",\n        \"endDate\": \"2018-12-28T18:42:11.000Z\",\n        \"startDate\": \"2018-12-26T18:42:08.000Z\",\n        \"title\": \"fdgdfg\",\n        \"meetingId\": \"MT3ni2fc0\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "GetApiV1MeetingGetonemeetingMeetingid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/createMeeting",
    "title": "to api to add meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "topic",
            "description": "<p>Topic of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start Date of Meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "endDate",
            "description": "<p>End of Meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Name of the Admin who created meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdByEmail",
            "description": "<p>Email of the Admin who created the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdById",
            "description": "<p>ID of the Admin who created the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdFor",
            "description": "<p>ID of the Normal User for whom the meeting was created (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdForEmail",
            "description": "<p>email of the Normal user for whom the meeting was created (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token(body param/header/query param) of the admin who created meeting (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n     \"error\": false,\n     \"message\": \"meeting created\",\n     \"status\": 200,\n     \"data\": {\n          \"__v\": 0,\n          \"_id\": \"5c1a06ad1a0d8a1f24c722fb\",\n          \"createdOn\": \"2018-12-19T08:51:57.000Z\",\n          \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n          \"createdFor\": \"iN06B99Zd\",\n          \"createdById\": \"JmXPtQayT\",\n          \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n          \"createdBy\": \"ninad  lohar\",\n          \"endDate\": \"2018-12-21T08:51:33.000Z\",\n          \"startDate\": \"2018-12-21T08:51:33.000Z\",\n          \"title\": \"Complete Project\",\n          \"meetingId\": \"PzF3CuAFY\" \n      } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "PostApiV1MeetingCreatemeeting"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/deleteMeeting/:meetingId",
    "title": "api to delete meeting as admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Meeting Id of the meeting which is deleted by admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token of the admin</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"meeting was successfully deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5c193f88aeba780384856aee\",\n        \"__v\": 0,\n        \"createdOn\": \"2018-12-18T18:42:16.000Z\",\n        \"createdForEmail\": \"tavkqqzd1@gmail.com\",\n        \"createdFor\": \"iN06B99Zd\",\n        \"createdById\": \"JmXPtQayT\",\n        \"createdByEmail\": \"ninad.lohar94@gmail.com\",\n        \"createdBy\": \"ninad  lohar\",\n        \"endDate\": \"2018-12-28T18:42:11.000Z\",\n        \"startDate\": \"2018-12-26T18:42:08.000Z\",\n        \"title\": \"fdgdfg\",\n        \"meetingId\": \"MT3ni2fc0\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "PostApiV1MeetingDeletemeetingMeetingid"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/setReminder",
    "title": "api for sending reminders for today's meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of logged in admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Meeting Id of the meeting which is deleted by admin</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"error\": false,\n    \"message\": \"meetings found\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Meetings Found and sent reminders\",\n        \"status\": 200,\n        \"data\": null\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "PostApiV1MeetingSetreminder"
  },
  {
    "group": "meeting",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meeting/updateMeeting/:meetingId",
    "title": "api to update meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "topic",
            "description": "<p>Topic of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Meeting ID of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token(header/body param/query param) of the creator of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start Date of the Meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "endDate",
            "description": "<p>End Date of the Meeting (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/MeetingRoutes.js",
    "groupTitle": "meeting",
    "name": "PutApiV1MeetingUpdatemeetingMeetingid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api to get all users of application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query params/body params/header)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userName\": \"ninad-admin\",\n            \"email\": \"ninad.lohar94@gmail.com\",\n            \"createdOn\": \"2018-12-16T09:30:19.000Z\",\n            \"isAdmin\": true,\n            \"password\": \"$2a$10$rQdMZtNXitUc7ZgsmSxj/.yJOFi1ImvSzA3vI1kMHPtvGsUGWYuAS\",\n            \"mobileNumber\": 1111111111,\n            \"lastName\": \"lohar\",\n            \"userId\": \"JmXPtQayT\",\n            \"firstName\": \"ninad \"\n        },\n        {\n            \"userName\": \"sachin\",\n            \"email\": \"tavkqqzd1@gmail.com\",\n            \"createdOn\": \"2018-12-16T09:31:00.000Z\",\n            \"isAdmin\": false,\n            \"password\": \"$2b$10$ytRphgrfo3KfBhlfASAj/umCJf.r/83AQavZxANTWGJbmWHnzaMwK\",\n            \"mobileNumber\": 1111111111,\n            \"lastName\": \"tendulkar\",\n            \"userId\": \"iN06B99Zd\",\n            \"firstName\": \"sachin\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/UserRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "api for sending link for resetting password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"email send successfully for password reset\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"email sent successfully for reseting the password\",\n        \"status\": 200,\n        \"data\": \"email sent\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/UserRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for logging in users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjRMOFhYclpoVyIsImlhdCI6MTU0NTIwNTQ2NDk1OSwiZXhwIjoxNTQ1MjkxODY0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJOYW1lIjoibmluYWQiLCJlbWFpbCI6ImRldmlsc2xvdmU0ZXZpbEBnbWFpbC5jb20iLCJjb3VudHJ5TmFtZSI6IkluZGlhIiwiaXNBZG1pbiI6dHJ1ZSwibW9iaWxlTnVtYmVyIjoxMjM0NTY3ODksImxhc3ROYW1lIjoiTG9oYXIiLCJ1c2VySWQiOiJtTDA4dTRoQlUiLCJmaXJzdE5hbWUiOiJOaW5hZCJ9fQ.SxNvMt7spMZ82EU2y-pgWnoLbfSvxggZD5uwvtpXano\",\n        \"userDetails\": {\n            \"userName\": \"ninad\",\n            \"email\": \"devilslove4evil@gmail.com\",\n            \"countryName\": \"India\",\n            \"isAdmin\": true,\n            \"mobileNumber\": 123456789,\n            \"lastName\": \"Lohar\",\n            \"userId\": \"mL08u4hBU\",\n            \"firstName\": \"Ninad\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/UserRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout/:userId",
    "title": "api to log out of application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of the user (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token of user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/UserRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogoutUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for resetting password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"email successfully reset\",\n    \"status\": 200,\n    \"data\": { \n        \"error\": false,\n        \"message\": \"password reset successfull\",\n        \"status\": 200,\n        \"data\": \"password reset successfull\" \n    } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/UserRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for registering a new user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>Country Name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>boolean(true/false) of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"userName\": \"ninad\",\n        \"email\": \"devilslove4evil@gmail.com\",\n        \"countryName\": \"India\",\n        \"_id\": \"5c19f2d04567130ae44fc5ae\",\n        \"createdOn\": \"2018-12-19T07:27:12.000Z\",\n        \"isAdmin\": true,\n        \"mobileNumber\": 123456789,\n        \"lastName\": \"Lohar\",\n        \"userId\": \"mL08u4hBU\",\n        \"firstName\": \"Ninad\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/UserRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
