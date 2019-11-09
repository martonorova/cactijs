// Kirendereli az oldalt a template engine segitsegevel

module.exports = function (viewName) {
    return function (req, res) {
        res.render(viewName, res.tpl);
    };
};