const { DataTypes } = require('sequelize'); // Impor DataTypes

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Memeriksa apakah kolom 'developer' sudah ada
        const columns = await queryInterface.describeTable('Games');
        if (!columns.developer) {
            await queryInterface.addColumn('Games', 'developer', {
                type: Sequelize.STRING,
                allowNull: false,
            });
        }

        if (!columns.releaseYear) {
            await queryInterface.addColumn('Games', 'releaseYear', {
                type: Sequelize.INTEGER,
                allowNull: false,
            });
        }

        if (!columns.description) {
            await queryInterface.addColumn('Games', 'description', {
                type: Sequelize.TEXT,
                allowNull: true,
            });
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Games', 'developer');
        await queryInterface.removeColumn('Games', 'releaseYear');
        await queryInterface.removeColumn('Games', 'description');
    }
};
