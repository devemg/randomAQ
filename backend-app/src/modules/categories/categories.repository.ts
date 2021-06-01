import  * as AWS from "aws-sdk";
import { getRandomId } from "../../const";

import { NewCategoryDto } from "../../dtos/categories/new-category.dto";
import { UpdateCategoryDto } from "../../dtos/categories/update-category.dto";
import { enviroment } from "../../enviroment";
import { Category } from "../../models/category";

const documentClient = new AWS.DynamoDB.DocumentClient(enviroment.aws_dynamo_config);

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
    async create(newCategory: NewCategoryDto): Promise<any> {
        let category: Category = {
            ...newCategory,
            id:  getRandomId(),
            createdAt : new Date().toISOString(),
            updatedAt : new Date().toISOString()
        };

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
    async update(category: UpdateCategoryDto | any): Promise<any> {
        //create updating objects 
        category.updatedAt = new Date().toISOString();
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