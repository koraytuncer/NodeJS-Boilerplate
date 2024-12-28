import { DataTypes } from "sequelize";
import { sequelize } from "../loaders/index.js";


// (async () => {
//   try {

//     await sequelize.sync()
//     console.log('Tablo senkronizasyonu başarıyla tamamlandı.');
//   } catch (error) {
//     console.error('Tablo senkronizasyonu sırasında bir hata oluştu:', error);
//   }
// })();

const UserModel = sequelize.define(
  'users',
  {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
   },
  },
  {
    tableName: 'users',
    timestamps: true,
  }
);


export default UserModel;