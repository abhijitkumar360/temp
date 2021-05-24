import pgconfig from '../config/db.postgres.config'
import sequelize, { Sequelize } from 'sequelize';

const sequelize =new Sequelize(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD, {
    host:pgconfig.host,
    dialect:pgconfig.dialect,
    port:pgconfig.PORT,
    operatorsAliases:false,
    pool:{
        max:pgconfig.pool.max,
        min:pgconfig.pool.min,
        acquire:pgconfig.pool.acuire,
        idele:pgconfig.pool.idele

    }
});

export const db = {
Sequelize :Sequelize,
sequelize :sequelize,
tutorials :tutorial.tutorial(sequelize,Sequelize)
}

