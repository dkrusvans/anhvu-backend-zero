
//proccess data
//call model
const getHomepage = (req, res) => {
    res.send('Hello World do hoang anh vu 123 456')
}

const getA = (req,res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,getA
}