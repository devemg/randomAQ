import * as dotenv from "dotenv";
dotenv.config();

/**
 * enviroment keys
 */
export const enviroment = {
  port: 3000,
  jwt_secret_key: process.env.jwt_secret_key,
  aws_dynamo_config: {
    region: 'us-east-2',
    accessKeyId: process.env.aws_dynamo_acces_key || '',
    secretAccessKey: process.env.aws_dynamo_secret_key || ''
  }
}