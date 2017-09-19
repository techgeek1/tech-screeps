var RoleType = require('roleType');
var Role = require('role');

class Gatherer extends Role {
    onTick() {
        if (this.canCarryEnergy()) {
            this.harvestNearestSource();
        }
        else {
            if (this.hasEnergy()) {
                this.transferToNearestStructure();
            }
        }
    }
    
    canCarryEnergy() {
        return this.self.carry.energy < this.self.carryCapacity;
    }
    
    harvestNearestSource() {
        var source = this.self.pos.findClosestByRange(FIND_SOURCES);
        if (source != null) {
            if (this.self.harvest(source) == ERR_NOT_IN_RANGE) {
                this.self.moveTo(source);
            }
            
            return true;
        }
        else {
            return false;
        }
    }
    
    hasEnergy() {
        return this.self.carry.energy > 0;
    }
    
    transferToNearestStructure() {
        var target = this.self.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                    structure.energy < structure.energyCapacity;
            }
        });

        if(this.self.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            this.self.moveTo(target);
        }
    }
    
    static getRole() {
        return RoleType.Gatherer;
    }
    
    static getModules() {
        return [MOVE, CARRY, WORK];
    }
}

module.exports = Gatherer;