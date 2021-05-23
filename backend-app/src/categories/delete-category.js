require('dotenv').config();

var AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

var params = {
    TableName: 'randomaq-categories',
    Key: {
        id: '4e654f00-7273-4b4e-ba5b-4d6731e51b27'
      },
    ReturnValues:"ALL_OLD"
}

console.log("Deleting a item...");
documentClient.delete(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });
