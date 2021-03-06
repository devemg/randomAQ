import  * as AWS from "aws-sdk";
import { NewUserDto } from "../../dtos/users/new-user.dto";
import { User } from "../../models/user";
import { getRandomId } from "../../providers/random-provider";
import { enviroment } from "../../enviroment";

const documentClient = new AWS.DynamoDB.DocumentClient(enviroment.aws_dynamo_config);

export class UsersRepository {

    private TableName = 'randomaq-users';

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
            confirmationCode: undefined,//getRandomCode(),
            isAuthorized
        };

        var params = {
            TableName: this.TableName,
            Item: user,
            ReturnValues: "ALL_OLD",
            ConditionExpression: 'attribute_not_exists(email)',
        };

        return documentClient.put(params).promise();
    }

    /**
     * login with user
     * @param user 
     * @returns 
     */
     async getUser(username: string) {

        let params = {
            TableName: this.TableName,
            Key: { username }
          };
        
        return documentClient.get(params).promise();        
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