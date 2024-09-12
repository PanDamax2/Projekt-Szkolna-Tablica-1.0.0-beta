import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { UserAttributes, UserCreationAttributes } from '../interfaces/model';

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public lastname!: string;
    public avatar!: string | null;
    public email!: string;
    public login!: string;
    public password!: string;
    public isVerified!: boolean;
    public lastLogin!: Date;
    public resetPasswordToken!: string | null;
    public resetPasswordExpireAt!: Date | null;
    public verificationToken!: string | null;
    public verificationTokenExpireAt!: Date | null;
    public isAdmin!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        lastLogin: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resetPasswordExpireAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        verificationToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        verificationTokenExpireAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true
    }
);

export default User;
