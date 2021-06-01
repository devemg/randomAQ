import  * as AWS from "aws-sdk";
import * as dotenv from "dotenv";
import { NewUserDto } from "../../dtos/users/new-user.dto";
import { User } from "../../models/user";
import { getRandomCode, getRandomId } from "../../const";


dotenv.config();

const documentClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2',
    accessKeyId: process.env.aws_dynamo_acces_key,
    secretAccessKey: process.env.aws_dynamo_secret_key
});


export class UsersRepository {

    TableName = 'randomaq-users';

    /**
     * Add new user
     * @param user 
     * @returns 
     */
    async newUser(newUser: NewUserDto, isAuthorized: boolean): Promise<any>{
        let user: User = 
        {
            ...newUser,
            id: getRandomId(),
            createdAt : new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            confirmationCode: getRandomCode(),
            isAuthorized
        };

        var params = {
            TableName: this.TableName,
            Item: user,
            ReturnValues: "ALL_OLD"
        };
        return documentClient.put(params).promise();
    }

    /**
     * login with user
     * @param user 
     * @returns 
     */
     async getUser(username: string): Promise<any>{
        return documentClient.get({TableName:this.TableName,Key:{}}).promise();        
    }

    /**
     * confirm Account
     * @param user 
     * @returns 
     */
     async confirmAccount(username: string, code: string): Promise<any>{
        return new Promise((resolve,reject)=>{
            resolve(true);
        })
    }

    /**
     * Forgot password
     * @param user 
     * @returns 
     */
     async resetPassword(username: string): Promise<any>{
        return new Promise((resolve,reject)=>{
            resolve(true);
        })
    }

}