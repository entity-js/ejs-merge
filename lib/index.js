/**
 *  ______   __   __   ______  __   ______  __  __
 * /\  ___\ /\ "-.\ \ /\__  _\/\ \ /\__  _\/\ \_\ \
 * \ \  __\ \ \ \-.  \\/_/\ \/\ \ \\/_/\ \/\ \____ \
 *  \ \_____\\ \_\\"\_\  \ \_\ \ \_\  \ \_\ \/\_____\
 *   \/_____/ \/_/ \/_/   \/_/  \/_/   \/_/  \/_____/
 *                                         __   ______
 *                                        /\ \ /\  ___\
 *                                       _\_\ \\ \___  \
 *                                      /\_____\\/\_____\
 *                                      \/_____/ \/_____/
 */

/**
 * Provides the utility function 'merge'.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 *
 * @module ejs
 * @class merge
 */

/**
 * Recursively merge properties of two objects.
 *
 * @method merge
 * @param {Object} obj1 First object to merge into.
 * @param {Object} obj2 Second object to merge to obj1.
 * @return {Object} The result of obj2 being merged into obj1.
 */
module.exports = function merge (obj1, obj2) {
  'use strict';

  function objectMerge (id) {
    if (obj1[id] === undefined && obj2[id] === null) {
      obj1[id] = null;
    } else if (obj1[id] === undefined && obj2[id] instanceof Array) {
      obj1[id] = [];
    } else if (obj1[id] === undefined) {
      obj1[id] = {};
    }

    obj1[id] = merge(obj1[id], obj2[id]);
  }

  for (var p in obj2) {
    if (typeof obj2[p] === 'object') {
      objectMerge(p);
    } else {
      obj1[p] = obj2[p];
    }
  }

  return obj1;
};
