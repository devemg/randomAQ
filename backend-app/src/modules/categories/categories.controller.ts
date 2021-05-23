import  * as AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

export class CategoriesController {

    params = {
        TableName:'randomaq-categories'
    };

    getAll() {
        console.log("Getting a new item...");
        documentClient.scan(this.params, function(err, data) {
            if (err) console.log(err);
            else console.log(data.Items);
        });
    }

}