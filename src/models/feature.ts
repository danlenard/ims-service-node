import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import { Feature } from "../types/feature";

interface FeatureCreationAttributes extends Optional<Feature, "deletedAt"> {}

class FeatureModel extends Model<Feature, FeatureCreationAttributes> implements Feature {
  public phoneNumber!: string;
  public callForwardNoReplyProvisioned!: boolean;
  public callForwardNoReplyDestination!: string | null;
  public deletedAt?: Date | null;
}

FeatureModel.init(
  {
    phoneNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: "phone_number",
      references: {
        model: "subscribers",
        key: "phone_number",
      },
    },
    callForwardNoReplyProvisioned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "call_forward_no_reply_provisioned",
    },
    callForwardNoReplyDestination: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "call_forward_no_reply_destination",
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "deleted_at",
    },
  },
  {
    sequelize,
    modelName: "Feature",
    tableName: "features",
    timestamps: false,
    paranoid: true,
  }
);

export { FeatureModel };
