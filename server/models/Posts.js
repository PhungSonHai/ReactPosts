module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comment, {
    //         onDelete: "cascade"
    //     })
    // }

    Posts.hasMany(sequelize.models.Comment, { foreignKey: "postId" })

    return Posts;
}