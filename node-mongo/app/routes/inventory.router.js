module.exports = function(app) {
  var inventories = require('../controllers/inventory.controllers.js');

  app.post('/api/inventories/new', inventories.createInventory);
  app.get('/api/inventories/:id', inventories.getInventory);
  app.get('/api/inventories/', inventories.inventories);
  app.put('/api/inventories/:id', inventories.updateInventory);
  app.delete('/api/inventories/:id', inventories.deleteInventory);
}
