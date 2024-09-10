const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select*from Users');
    return results;
}

const getAllLnxs = async () => {
    let [results, fields] = await connection.query('select*from Lenhnhapxuat');
    return results;
}

const getUsersById =async (userId) => {
    let [results, fields] = await connection.query('select*from Users where id = ?',[userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const getLnxById =async (lnxId) => {
    let [results, fields] = await connection.query('select*from Lenhnhapxuat where id = ?',[lnxId]);
    let lnx = results && results.length > 0 ? results[0] : {};
    return lnx;
}

module.exports = {
    getAllUsers, getUsersById, getLnxById, getAllLnxs
}