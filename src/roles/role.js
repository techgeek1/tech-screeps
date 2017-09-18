var RoleType = require('role.roleType');

class Role {
    constructor(creep) {
        this.self = creep;
    }
    
    onInitialize() {
        
    }
    
    onTick() {
        
    }
    
    onDestroy() {
        
    }
    
    shouldBeInitialized() {
        return this.self.ticksToLive == 1500;
    }
    
    shouldBeDestroyed() {
        return this.self.ticksToLive == 1;
    }
    
    static getRole() {
        return RoleType.Unassigned;
    }
    
    static getModules() {
        return [MOVE];
    }
    
    static createCreep(spawner) {
        return spawner.createCreep(this.getModules(), '', { role: this.getRole() });
    }
}

module.exports = Role;