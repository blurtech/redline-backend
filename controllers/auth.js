const repository = require('../repositories/users');

exports.sendMessage = async (req, res) => {
    const data = await repository.getKeywords();
    return res.success({message: answer.message});
};