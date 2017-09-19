var Manager = require('manager');
var RoleFactory = require('roleFactory');

class CreepManager extends Manager {
    static tickManager(creeps) {
        for(var creepName in creeps) {
            var creep = RoleFactory.createRoleState(creeps[creepName]);
            if (creep.shouldBeInitialized()) {
                creep.onInitialize();
            }

            creep.onTick();

            if (creep.shouldBeDestroyed()) {
                creep.onDestroy();
            }
        }
    }
}

module.exports = CreepManager;