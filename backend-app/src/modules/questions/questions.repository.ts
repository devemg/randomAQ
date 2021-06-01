import  * as AWS from "aws-sdk";
import { v4 as uuid } from 'uuid';
import * as dotenv from "dotenv";
import { Question } from "../../models/question";
import { NewQuestionDto } from "../../dtos/questions/new-question.dto";
import { UpdateQuestionDto } from "../../dtos/questions/update-question.dto";
dotenv.config();

const documentClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});

export class QuestionsRepository {

    TableName = 'randomaq-questions';


    /**
     * Get All Questions
     * @returns 
     */
    async getAll(): Promise<any> {
        return await documentClient.scan({TableName:this.TableName}).promise();
    }

    /**
     * Get all Questions
     * @param id of Question
     * @returns 
     */
    async getOne(id: string): Promise<any> {
        return documentClient.get({TableName:this.TableName,Key:{id}}).promise();        
    }

    /**
     * Save new Question
     * @param Question 
     * @returns 
     */
    async create(newQuestion: NewQuestionDto): Promise<any> {
        let question: Question = {
            ...newQuestion,
            id : uuid(),
            createdAt : new Date().toISOString(),
            updatedAt : new Date().toISOString()
        };
        var params = {
            TableName: this.TableName,
            Item: question,
            ReturnValues: "ALL_OLD"
        };
        return documentClient.put(params).promise();
    }

    /**
     * Update data of question
     * @param question 
     * @returns 
     */
    async update(body: UpdateQuestionDto | any): Promise<any> {
        body.updatedAt = new Date().toISOString();
        //create updating objects 
        var names: any = {};
        var values: any = {};
        var updateExp = 'set ';

        for (let key in body){
            if(key != 'id'){
                names[`#${key}`] = key; 
                values[`:${key}`] = body[key]; 
                updateExp+=` #${key} = :${key}, `
            }
        }
        updateExp = updateExp.replace(/,\s*$/, "");
        //set params
        var params = {
            TableName: this.TableName,
            Key: {
                id: body.id
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
     * Delete a question
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