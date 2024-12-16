export const up = async (queryInterface, Sequelize) => {
    const columns = await queryInterface.describeTable('Games');

    if (!columns.developer) {
        await queryInterface.addColumn('Games', 'developer', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    }

    if (!columns.releaseYear) {
        await queryInterface.addColumn('Games', 'releaseYear', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    }

    if (!columns.description) {
        await queryInterface.addColumn('Games', 'description', {
            type: Sequelize.TEXT,
            allowNull: true,
        });
    }
};

export const down = async (queryInterface) => {
    await queryInterface.removeColumn('Games', 'developer');
    await queryInterface.removeColumn('Games', 'releaseYear');
    await queryInterface.removeColumn('Games', 'description');
};

export default { up, down };  
