const DB = require('../fakeDB')


const getAllShoppingItems = (req, res) => {
    res.status(200).json(DB)
}

const addShoppingItem = (req, res) => {
    DB.push(req.body)
    res.status(201).json(DB)
}

const getSingleShoppingItem = (req, res) => {
    const {item_name} = req.params;
    return items.find((item) => {
        item.item_name === item_name
    })
    
}

const deleteShoppingItem = (req, res) => {
    res.send('Deleting a single item')
}

const updateShoppingItem = (req, res) => {
    res.send('Updating single shopping item')
}

module.exports = {
    getAllShoppingItems,
    addShoppingItem,
    getSingleShoppingItem,
    deleteShoppingItem,
    updateShoppingItem
}