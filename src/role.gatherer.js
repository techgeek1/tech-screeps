var RoleType = require('roleType');
var Role = require('role');

class Gatherer extends Role {
    onTick() {
        if (canCarryEnergy()) {
            harvestNearestSource();
        }
        else {
            if (hasEnergy()) {
                transferToNearestStructure();
            }
        }
    }
    
    canCarryEnergy() {
        return self.carry.energy < self.carryCapacity;
    }
    
    harvestNearestSource() {
        var source = self.pos.findClosestByRange(FIND_SOURCES);
        if (source != null) {
            if (self.harvest(source) == ERR_NOT_IN_RANGE) {
                self.moveTo(source);
            }
            
            return true;
        }
        else {
            return false;
        }
    }
    
    hasEnergy() {
        return self.carry.energy > 0;
    }
    
    transferToNearestStructure() {
        var targets = creep.room.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                    structure.energy < structure.energyCapacity;
            }
        });

        if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
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