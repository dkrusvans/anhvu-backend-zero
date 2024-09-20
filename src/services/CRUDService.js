const connection = require("../config/database");
const getAllLnx = async () => {
    const [results, fields] = await connection.query('SELECT * FROM Lenhnhapxuat u');
    return results;
}
module.exports = {
    getAllLnx
}