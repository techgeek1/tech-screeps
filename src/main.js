var CreepManager = require('manager.creeps');

var RoleFactory = require('role.factory');
var Gatherer = require('role.gatherer');

module.exports.loop = function() {
    if (Game.spawns['HelloSpawn'].canCreateCreep(Gatherer.getModules(), '') == OK) {
        Gatherer.createCreep(Game.spawns['HelloSpawn']);
    }

    CreepManager.tickManager(Game.creeps);
}