import User from '../models/user.model';

export function removeSensitiveInfo(user: User) {
    const { password, verificationToken, createdAt, updatedAt, verificationTokenExpireAt, resetPasswordExpireAt, ...userWithoutSensitiveInfo } =
        user.get({ plain: true });
    return userWithoutSensitiveInfo;
}