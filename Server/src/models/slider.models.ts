import { DataTypes, Model, CreationOptional, Optional } from "sequelize";
import sequelize from '../config/database';
import { SliderAttributes, SliderCreationAttributes } from "../interfaces/model";

class Slider extends Model<SliderAttributes, SliderCreationAttributes> {
  declare id: CreationOptional<number>;
  declare file: string; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Slider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    file: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Slider",
    tableName: "slider",
    timestamps: true,
  }
);

export default Slider;