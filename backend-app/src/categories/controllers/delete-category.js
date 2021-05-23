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
        id: 'de995a89-9b0b-4735-887a-9f52e6ad1aa4'
      },
    ReturnValues:"ALL_OLD"
}

console.log("Deleting a item...");
documentClient.delete(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });

   /**
   * response: 
   * {
    Attributes: {
      description: 'Lorem ipsum dolor sit amet,',
      id: 'de995a89-9b0b-4735-887a-9f52e6ad1aa4',
      image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png',
      name: 'Juegos'
    }
  }
   */