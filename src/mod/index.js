"use strict"

module.exports = function(config) {
    require("./common")(config)
    if(config.backend) require("./backend")(config)
    if(config.engine) require("./engine")(config)
    if(config.cronjobs) require("./cronjobs")(config)
}
