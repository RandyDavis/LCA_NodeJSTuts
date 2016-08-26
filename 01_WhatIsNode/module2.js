/**
 * Created by davirand on 8/26/2016.
 */
var a = 2;

module.exports.a = a;
// module.exports.b = 3;
// exports.c = 4;

module.exports = function () {
    console.log('module 2!');
}
