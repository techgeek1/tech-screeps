var RoleType = require('roleType');
var Gatherer = require('role.gatherer');

class RoleFactory {
    static createRoleState(creep) {
        var roleId = creep.memory.role;
        switch (roleId) {
            case RoleType.Unassigned:
                return new Role(creep);
            case RoleType.Gatherer:
                return new Gatherer(creep);
            case RoleType.Worker:
                return;
            case RoleType.Builder:
                return;
            case RoleType.Soldier:
                return;
            default:
                console.log("Invalid role type!");
                return;
        }
    }
}

module.exports = RoleFactory;