import { CheckUserExistenceResult } from "../interfaces/utils";
import User from "../models/user.model";

export async function checkUserExistence(email?: string, login?: string): Promise<CheckUserExistenceResult> {
    const existingUserByEmail = email ? await User.findOne({ where: { email } }) : null;
    const existingUserByLogin = login ? await User.findOne({ where: { login } }) : null;

    const messages: string[] = [];

    if (existingUserByEmail) {
        messages.push('Email jest już zajęty');
        logging.error('Validation error: { success: false, message: Email jest już zajęty }');
    }

    if (existingUserByLogin) {
        messages.push('Login jest już zajęty');
        logging.error('Validation error: { success: false, message: Login jest już zajęty }');
    }

    return {
        exists: messages.length > 0,
        message: messages.join(' i ')
    };
}