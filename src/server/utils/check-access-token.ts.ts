import { H3Event } from 'h3'
import userModel from "../models/User";
import verifyToken from './verify-token.ts';

async function checkAccessToken(event: H3Event): Promise<number | boolean> {
    try {
        const authorizationHeader = getHeader(event, 'authorization')
        if (!authorizationHeader) {
            return false
        }
        if (!authorizationHeader.startsWith('Bearer')) {
            return false
        }
        const authorization = authorizationHeader.split(' ')[1]
        const payload = verifyToken(authorization, useRuntimeConfig().JWT_TOKEN_SECRET)
        if (!payload) {
            return false
        }
        const user = await userModel.findOne({ uuid: payload.uuid })
        if (!user) {
            return false
        }
        return user.uuid
    } catch (error) {
        return false
    }
}

export default checkAccessToken