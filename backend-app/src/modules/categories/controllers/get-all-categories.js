require('dotenv').config();

var AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

var params = {
    TableName:'randomaq-categories'
};

console.log("Getting a new item...");
documentClient.scan(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data.Items);
  });

  
  /**
   * response: 
   * [
      {
        description: 'Lorem ipsum dolor sit amet,',
        id: 'eef7f05a-7931-4166-b0cf-59d2c07a6025',
        name: 'Princesas',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        id: '3fb76102-c1d7-4b57-90c9-93b1fe0333c9',
        name: 'Princesas',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        id: 'efe74d5a-1fce-4aac-9418-f4829dfcb72f',
        name: 'Princesas',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        id: '2534ec40-2703-4465-bac7-ed6ec6697ac3',
        name: 'Princesas',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
      },
      {
        description: 'Lorem ipsum dolor sit amet,',
        id: 'de995a89-9b0b-4735-887a-9f52e6ad1aa4',
        name: 'Princesas',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
      }
    ]
   */