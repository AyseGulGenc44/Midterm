/*
 * filename: index.js
 * student name: Ayse Gul Genc
 * student number: 301088239
 * Date: March 2, 2022
 * COMP229 Midterm
 */
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
