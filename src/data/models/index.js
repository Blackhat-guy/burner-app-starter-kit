/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import User from './User';
import Burner from './Burner';

// Associations
User.hasMany(Burner, {foreignKey: 'userId'});
Burner.belongsTo(User, {foreignKey: 'userId'});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Burner };
