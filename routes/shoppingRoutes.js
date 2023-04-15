const express = require('express')
const router = express.Router()

const {
    getAllShoppingItems,
    addShoppingItem,
    getSingleShoppingItem,
    deleteShoppingItem,
    updateShoppingItem
} = require('../controller_funcs/controller_funcs')

router.route('/').get(getAllShoppingItems).post(addShoppingItem)
router.route('/:item_name').get(getSingleShoppingItem).patch(updateShoppingItem).delete(deleteShoppingItem)

module.exports = router