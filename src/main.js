var CreepManager = require('manager.creeps');

var RoleFactory = require('roleFactory');
var Gatherer = require('role.gatherer');

module.exports.loop = function() {
    if (Game.spawns['Spawn1'].canCreateCreep(Gatherer.getModules(), '') == OK) {
        Gatherer.createCreep(Game.spawns['Spawn1']);
    }

    CreepManager.tickManager(Game.creeps);
}