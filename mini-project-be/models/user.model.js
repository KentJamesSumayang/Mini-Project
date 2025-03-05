const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/database");
const bcrypt = require("bcryptjs");

class User extends Model {
    async validPassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "active",
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            },
        },
    }
);

module.exports = User;
