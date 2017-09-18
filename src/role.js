var RoleType = require('roleType');

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
        var creep = spawner.createCreep(this.getModules(), '');
        creep.memory.role = this.getRole();
        
        return creep;
    }
}

module.exports = Role;