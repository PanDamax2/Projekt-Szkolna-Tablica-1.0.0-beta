import { sender } from './mailtrap.config';
import { mailtrapClient } from './mailtrap.config';
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from './emailTemplate';

export const sendVerificationEmail = async (email : string, verificationToken: string ): Promise<void> => {
    const recipient = [{ email }];

    try {
        await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Zweryfikuj swój adres e-mail',
            html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
            category: 'Email Verification'
        });
    } catch (error) {
        logging.error(`Error sending verification email: ${error}`);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email: string, name: string): Promise<void> => {
    const recipient = [{ email }];

    try {
        await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Zweryfikowano twój email',
            html: VERIFICATION_EMAIL_SUCCESS_TEMPLATE.replace('{name}', name),
            category: 'Email Verification'
        });
    } catch (error) {
        logging.error(`Error sending welcome email: ${error}`);
        throw new Error(`Error sending welcome email: ${(error as Error).message}`);
    }
};

export const sendPasswordResetEmail = async (email: string, resetUrl: string): Promise<void> => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Resetowanie hasła',
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetUrl),
            category: 'Password Reset'
        });
    } catch (error) {
        logging.error(`Error sending password reset email: ${error}`);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email: string): Promise<void> => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Resetowanie hasła powiodło się',
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: 'Password Reset'
        });
    } catch (error) {
        logging.error(`Error sending password reset success email: ${error}`);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
};
