import { DataTypes, Model, CreationOptional } from "sequelize";
import sequelize from '../config/database';
import { ClassroomAttributes, ClassroomCreationAttributes } from "../interfaces/model";

class Classroom extends Model<ClassroomAttributes, ClassroomCreationAttributes> {
    declare id: CreationOptional<number>;
    declare html: string;
    declare readonly createdAt: CreationOptional<Date>;
    declare readonly updatedAt: CreationOptional<Date>;
}

Classroom.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        html: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Classroom",
        tableName: "classrooms",
        timestamps: true,
    }
);

export default Classroom;
