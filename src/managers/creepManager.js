var Manager = require('manager');
var RoleFactory = require('roles/factory');

class CreepManager extends Manager {
    static tickManager(creeps) {
        for(const baseCreep in creeps) {
            var creep = RoleFactory.createRoleState(baseCreep);
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