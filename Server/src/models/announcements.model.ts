import { DataTypes, Model, Optional } from "sequelize";
import sequelize from '../config/database';
import { AnnouncementAttributes, AnnouncementCreationAttributes } from "../interfaces/model";


class Announcement extends Model<AnnouncementAttributes, AnnouncementCreationAttributes> 
  implements AnnouncementAttributes {
  declare id: number;
  declare data: string;
  declare text: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Announcement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Announcement",
    tableName: "announcements",
    timestamps: true,
  }
);

export default Announcement;
