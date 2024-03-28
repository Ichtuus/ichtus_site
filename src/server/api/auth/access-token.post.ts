import userModel from "../../models/User";
import signToken from "../../utils/sign-token";
import verifyToken from "../../utils/verify-token.ts";

export default defineEventHandler(async (event) => {
  try {
  const header = await getHeader(event, "cookie");

  if (!header || !header.startsWith("authorization")) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorize 1" });
  }

  const authorization = header.split("=")[1];

  const verify = verifyToken(
    authorization,
    useRuntimeConfig().JWT_TOKEN_SECRET
  );

  if (!verify) {
    return createError({ statusCode: 401, statusMessage: "Unauthorize 2" });
  }

  const user = await userModel.findOne({ uuid: verify.uuid });
  if (!user) {
    return createError({ statusCode: 401, statusMessage: "Unauthorize 3" });
  }

  const token = signToken(
    { uuid: user.uuid },
    useRuntimeConfig().JWT_TOKEN_SECRET,
    "1hr"
  );

  return { accessToken: token };

  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "Something went wrong.",
    });
  }
});
