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
const updateUsersById =async (username, email, password, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET username = ?, email = ?, password = ?
        WHERE id = ?`,
        [username, email, password, userId]);
}

const getLnxById =async (lnxId) => {
    let [results, fields] = await connection.query('select*from Lenhnhapxuat where id = ?',[lnxId]);
    let lnx = results && results.length > 0 ? results[0] : {};
    return lnx;
}
const updateLnxById =async (khachhang, loainhapxuat, thoigiannhanhang,
    tenvattu, quycach, soluong, trongluong, dongia, cbkd, lnxId) => {
    let [results, fields] = await connection.query(   
        `UPDATE Lenhnhapxuat
        SET khachhang=?, loainhapxuat=?, thoigiannhanhang=?,
        tenvattu=?, quycach=?, soluong=?, trongluong=?, dongia=?, cbkd=?
        WHERE id=?`,
        [khachhang, loainhapxuat, thoigiannhanhang,
        tenvattu, quycach, soluong, trongluong, dongia, cbkd, lnxId]);
}
const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [id]);
}

module.exports = {
    getAllUsers, getUsersById, getLnxById, getAllLnxs,
    updateUsersById, updateLnxById, deleteUserById
}