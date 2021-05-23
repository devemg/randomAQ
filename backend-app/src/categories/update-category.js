require('dotenv').config();

var AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

var body = {
  description: 'Lorem ipsum dolor sit amet,',
  id: '4e654f00-7273-4b4e-ba5b-4d6731e51b27',
  name: 'Juegos',
  image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
};

//create updating objects 
var names = {};
var values = {};
var updateExp = 'set ';

for (let key in body){
  if(key != 'id'){
    names[`#${key}`] = key; 
    values[`:${key}`] = body[key]; 
    updateExp+=` #${key} = :${key}, `
  }
}
updateExp = updateExp.replace(/,\s*$/, "");


var params = {
    TableName: 'randomaq-categories',
    Key: {
        id: body.id
      },
    UpdateExpression: updateExp,
    ExpressionAttributeNames: names,
    ExpressionAttributeValues: values,
    ReturnValues:"UPDATED_NEW"
}

console.log("Updating a item...");
documentClient.update(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });

  /**
   * 
   * {
  description: 'Lorem ipsum dolor sit amet,',
  id: '4e654f00-7273-4b4e-ba5b-4d6731e51b27',
  name: 'Princesas',
  image: 'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'
}
   */