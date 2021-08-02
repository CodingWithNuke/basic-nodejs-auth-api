const nedb = require('nedb-promises');
const path = require('path');
const { hash } = require('bcryptjs')

const db = {};
db.users = new nedb({
  filename: path.join(__dirname, 'data/users.db'),
  autoload: true,
  onload: async (err) => {
    if (!err) {
      const userCount = await db.users.count({});

      if (!userCount) {
        await db.users.insert({
          username: 'admin',
          password: await hash('admin', 12)
        })
      }
    }
  }
})

module.exports = db;