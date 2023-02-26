import * as dotenv from 'dotenv'
dotenv.config()

export default () => ({
    appSecret: process.env.APP_SECRET,
    appPort: process.env.APP_PORT
})