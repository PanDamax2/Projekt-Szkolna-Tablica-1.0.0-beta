import { DataTypes, Model, CreationOptional } from 'sequelize';
import sequelize from '../config/database';
import { ViewAttributes, ViewCreationAttributes } from '../interfaces/model';

type ViewMode = 'school' | 'event' | 'slider' | 'alarm' | 'assembly';

class View extends Model<ViewAttributes, ViewCreationAttributes> {
    declare id: CreationOptional<number>;
    declare schoolLogo: string;
    declare viewMode: ViewMode;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

View.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        schoolLogo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        viewMode: {
            type: DataTypes.ENUM('school', 'event', 'slider', 'alarm', 'assembly'),
            allowNull: false,
            defaultValue: 'school'
        }
    },
    {
        sequelize,
        modelName: 'View',
        tableName: 'views',
        timestamps: true
    }
);

export default View;
