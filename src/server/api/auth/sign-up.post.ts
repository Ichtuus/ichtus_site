import { Error } from "mongoose";
import { MongoError } from "mongodb";
import { UserRequestBody } from "../../../types/user";
import userModel from "../../models/User";
import { hashStrings } from "../../utils/string";
import sanitize from "mongo-sanitize";
import { generateUUID } from "../../utils/generate-uuid";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<UserRequestBody | null>(event);
    if (!body) {
      return createError({ statusCode: 400, statusMessage: "Bad request." });
    }
    const user = await userModel.create({
      uuid: generateUUID(19),
      firstName: sanitize(body.firstName),
      lastName: sanitize(body.lastName),
      email: sanitize(body.email),
      password: await hashStrings(body.password),
    });

    return user.uuid;
  } catch (error: unknown) {
    if (error instanceof Error.ValidationError) {
      return createError({
        statusCode: 400,
        statusMessage: "Bad request",
        data: Object.values(error.errors).map((err) => ({
          [err.path]: err.message,
        })),
      });
    }
    if (error instanceof MongoError) {
      return createError({
        statusCode: 409,
        statusMessage: "Email already exist",
      });
    }
    return createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});
