/**
 * Created by tt on 16/6/15.
 */
    var add = require('./math').add;
    exports.increment = function(val) {
        return add(val, 1);
    };
