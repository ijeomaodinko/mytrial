module.exports.addMessage = async(req, res, next) => {
    try {
        const { from, to, message } = req.body;
        const data = await messageModel.created ({
            messag: { text: message },
            users: [from, to];
            sender: from,
        });
        if(data) return res.json({ msg: "Message added successfully."});
    return res.json({ msg: "Failed to add message from the database."});

    }catch(ex) {
        next(ex);
        }
};

module.exports.getAllMessage = async(req, res, next) => {
    try{
        
    } catch(ex) {
        next(ex);
    }
};