import User from "../models/User";
import crypto from "crypto";
import _ from "lodash";
import moment from "moment";
import jwt from "jsonwebtoken";
import {
  registerSchema,
  loginSchema,
  lostPasswordSchema,
  resetPasswordSchema,
} from "../utils/validators";
import { handleMessage, handleError } from "../utils/handles";

export async function register(req, res) {
  try {
    const { name, email, password } = await registerSchema.validateAsync(
      req.body
    );
    const encryptedPasswod = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");
    const created = await User.create({
      name,
      email,
      password: encryptedPasswod,
    });

    return handleMessage(res, created);
  } catch (error) {
    return handleError(500, res, error);
  }
}
