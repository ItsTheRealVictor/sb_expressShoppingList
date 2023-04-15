const DB = require('../fakeDB')


const getAllShoppingItems = (req, res) => {
    res.status(200).json(DB)
}

const addShoppingItem = (req, res) => {
    DB.push(req.body)
    res.status(201).json(DB)
}

const getSingleShoppingItem = (req, res) => {
    console.log('fart')
    const {item_name} = req.params;
    const result = DB.find(item => item.item_name === item_name) 
    res.status(200).json(result)
}

const deleteShoppingItem = (req, res) => {
    const {item_name} = req.params
    const result = DB.filter((val, idx) => {
        if (val.item_name !== item_name){
            DB.splice(idx, 1)
            return true
        }
        return false
    })
    res.status(200).json({msg: 'ITEM DELETED', new_list: result}) 
}

const updateShoppingItem = (req, res) => {
    const {new_name, new_price} = req.params
    
}

module.exports = {
    getAllShoppingItems,
    addShoppingItem,
    getSingleShoppingItem,
    deleteShoppingItem,
    updateShoppingItem,
}