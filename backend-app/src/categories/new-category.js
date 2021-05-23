require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

var AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

var params = {
    TableName:'randomaq-categories',
    Item: { 
        id: uuidv4(), 
        name:'Princesas' , 
        image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png', 
        description:'Lorem ipsum dolor sit amet,'
    },
    ReturnValues: "ALL_OLD"
};

console.log("Adding a new item...");
documentClient.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });

  /**
   * response: 
   * {}
   */