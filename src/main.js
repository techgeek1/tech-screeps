var CreepManager = require('managers/creepManager');

var RoleFactory = require('roles/factory');
var Gatherer = require('roles/gatherer');

module.exports.loop = function() {
    if (Game.spawns['Spawn1'].canCreateCreep(Gatherer.getModules(), '') == OK) {
        Gatherer.createCreep(Game.spawns['Spawn1']);
    }

    CreepManager.tickManager(Game.creeps);
}