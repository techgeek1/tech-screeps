var Manager = require('manager');
var RoleFactory = require('roleFactory');

class CreepManager extends Manager {
    static tickManager(creeps) {
        for(var baseCreep in creeps) {
            console.log(baseCreep.memory);
            
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