const check = require("./checkLib.js");
const redis = require('redis');
let client = redis.createClient({
  host: 'redis-13592.c100.us-east-1-4.ec2.cloud.redislabs.com',
  password: 'jVLFL2AvLFSW2meFY7ibyNsQQZR4k3bQ',
  port: 13592
});

client.on('connect', () => {
  console.log("Redis connection successfully opened");
});

let getAllUsersInAHash = (hashName, callback) => {
  client.HGETALL(hashName, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null)
    } else if (check.isEmpty(result)) {
      console.log("online user list is empty");
      console.log(result)
      callback(null, {})
    } else {
      console.log(result);
      callback(null, result)
    }
  });
} // end get all users in a hash

// function to set new online user.
let setANewOnlineUserInHash = (hashName, key, value, callback) => {
  client.HMSET(hashName, [
    key, value
  ], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null)
    } else {
      console.log("user has been set in the hash map");
      console.log(result)
      callback(null, result)
    }
  });


} // end set a new online user in hash

let deleteUserFromHash = (hashName, key) => {
  client.HDEL(hashName, key);
  return true;
} // end delete user from hash

module.exports = {
  getAllUsersInAHash: getAllUsersInAHash,
  setANewOnlineUserInHash: setANewOnlineUserInHash,
  deleteUserFromHash: deleteUserFromHash
}