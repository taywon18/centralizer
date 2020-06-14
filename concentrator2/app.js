"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const express = require("express");
const path = require("path");
const cors = require("cors");
const index_1 = require("./routes/index");
const player_1 = require("./routes/player");
const retrieve_1 = require("./routes/retrieve");
const push_1 = require("./routes/push");
const app = express();
app.use(express.json());
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/player', player_1.default);
app.use('/retrieve', retrieve_1.default);
app.use('/push', push_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
//# sourceMappingURL=app.js.map