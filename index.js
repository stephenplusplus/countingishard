var secs = module.exports.secs = module.exports.seconds =
function (s) { return s * 1000 }

var mins = module.exports.mins = module.exports.minutes =
function (m) { return m * secs(60) }

var hrs = module.exports.hrs = module.exports.hours =
function (h) { return h * mins(60) }

var days = module.exports.days =
function (d) { return d * hrs(24) }

var weeks = module.exports.days =
function (w) { return w * days(7) }
