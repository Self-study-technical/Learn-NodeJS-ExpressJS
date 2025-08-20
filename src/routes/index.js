const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    // Use the news router for /news path
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
