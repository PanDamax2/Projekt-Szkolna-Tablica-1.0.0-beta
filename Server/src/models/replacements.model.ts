import { Model, DataTypes, CreationOptional, Optional } from "sequelize";
import sequelize from '../config/database';
import { ReplacementAttributes, ReplacementCreationAttributes } from "../interfaces/model";

class Replacement extends Model<ReplacementAttributes, ReplacementCreationAttributes> {
  declare id: CreationOptional<number>;
  declare lesson: string;
  declare teacher: string;
  declare branch: string;
  declare subject: string;
  declare room: string;
  declare date: string;
  declare deputy: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Replacement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lesson: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deputy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { 
    sequelize, 
    modelName: "Replacement", 
    tableName: "replacements",
    timestamps: true 
  }
);

export default Replacement;