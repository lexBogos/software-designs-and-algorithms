import { Weapon } from './Weapon'

export class Sword extends Weapon {

    constructor(
       baseDamage: number,
       baseDurability: number,
       value: number,
       weight: number,
      ) 
      {
          super('sword', baseDamage, baseDurability,  value, weight);
      }

      public MODIFIER_CHANGE_RATE = 0.05;
      private initialDamage = this.baseDamage;
  
    polish(): void {
        this.baseDamage = this.baseDamage + this.MODIFIER_CHANGE_RATE >= 1.25*this.initialDamage ? 1.25*this.initialDamage : this.baseDamage + this.MODIFIER_CHANGE_RATE
    }

  }
  