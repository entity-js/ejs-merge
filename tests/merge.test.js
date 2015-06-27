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

var test = require('unit.js');

describe('ejs/merge', function () {

  'use strict';

  var merge = require('../lib');

  it('shouldMergeTwoObjects', function () {

    var obj1 = {hello: 'world'},
        obj2 = {foo: 'bar'};

    test.object(
      merge(obj1, obj2)
    ).is({
      hello: 'world',
      foo: 'bar'
    });

  });

  it('shouldRecursivlyMergesObjects', function () {

    var obj1 = {hello: 'world', config: {v1: 1, v3: 9}},
        obj2 = {foo: 'bar', config: {v2: 2, v3: 3}};

    test.object(
      merge(obj1, obj2)
    ).is({
      hello: 'world',
      config: {
        v1: 1,
        v3: 3,
        v2: 2
      },
      foo: 'bar'
    });

  });

  it('shouldMergeNullValues', function () {

    var obj1 = {hello: 'world', test: null},
        obj2 = {foo: 'bar', config: null};

    test.object(
      merge(obj1, obj2)
    ).is({
      hello: 'world',
      test: null,
      foo: 'bar',
      config: null
    });

  });

});
