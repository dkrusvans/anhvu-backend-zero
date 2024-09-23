const connection = require("../config/database");
const getAllLnx = async (req,res) => {
    const [results, fields] = await connection.query('SELECT * FROM Lenhnhapxuat u');
    return results;
}
const getEditLnx = async (req,res) => {
    const lnxid = req.params.id;
    let [results, fields] = await connection.query('select * from Lenhnhapxuat where id = ?', [lnxid]);
    let lnx = results && results.length > 0 ? results[0] : {};
    return lnx;
}
module.exports = {
    getAllLnx,getEditLnx
}