class RoleFactory {
    static createRoleState(creep) {
        var roleId = creep.memoty.role;
        switch (roleId) {
            case RoleType.Unassigned:
                return new Role(creep);
            case Gatherer:
                return new Gatherer(creep);
            case Worker:
                return;
            case Builder:
                return;
            case Soldier:
                return;
            default:
                console.log("Invalid role type!");
                return;
        }
    }
    
    static getRoleIdFromMemory(creep) {
        return creep.memory.role;
    }
}