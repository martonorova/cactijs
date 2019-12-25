"use strict";
// Kirendereli az oldalt a template engine segitsegevel
module.exports = function (objectRepository, viewName) {
    return function (req, res) {
        res.render(viewName, res.tpl);
    };
};
