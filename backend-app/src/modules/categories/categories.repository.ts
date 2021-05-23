import  * as AWS from "aws-sdk";
import { v4 as uuid } from 'uuid';
import * as dotenv from "dotenv";
dotenv.config();
import { Category } from "../../models/category";

const documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

export class CategoriesRepository {

    TableName = 'randomaq-categories';


    /**
     * Get All categories
     * @returns 
     */
    async getAll(): Promise<any> {
        return await documentClient.scan({TableName:this.TableName}).promise();
    }

    /**
     * Get all categories
     * @param id of category
     * @returns 
     */
    async getOne(id: string): Promise<any> {
        return documentClient.get({TableName:this.TableName,Key:{id}}).promise();        
    }

    /**
     * Save new category
     * @param category 
     * @returns 
     */
    async create(category: Category): Promise<any> {
        category.id = uuid();
        var params = {
            TableName: this.TableName,
            Item: category,
            ReturnValues: "ALL_OLD"
        };
        return documentClient.put(params).promise();
    }

    /**
     * Update data of category
     * @param category 
     * @returns 
     */
    async update(category: Category | any): Promise<any> {
        //create updating objects 
        var names: any = {};
        var values: any = {};
        var updateExp = 'set ';

        for (let key in category){
            if(key != 'id'){
                names[`#${key}`] = key; 
                values[`:${key}`] = category[key]; 
                updateExp+=` #${key} = :${key}, `
            }
        }
        updateExp = updateExp.replace(/,\s*$/, "");
        //set params
        var params = {
            TableName: this.TableName,
            Key: {
                id: category.id
              },
            UpdateExpression: updateExp,
            ExpressionAttributeNames: names,
            ExpressionAttributeValues: values,
            ConditionExpression: 'attribute_exists(id)',
            ReturnValues:"UPDATED_NEW"
        };
        return documentClient.update(params).promise();
    }
    
    /**
     * Delete a category
     * @param id 
     * @returns 
     */
    async delete(id: string): Promise<any> {
        var params = {
            TableName: this.TableName,
            Key: { id },
            ReturnValues:"ALL_OLD"
        };

        return documentClient.delete(params).promise();
    }


}