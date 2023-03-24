import { Weapon } from './Weapon'

export class Bow extends Weapon {

    constructor(
       baseDamage: number,
       baseDurability: number,
       value: number,
       weight: number,
      ) 
      {
          super('bow', baseDamage, baseDurability,  value, weight);
      }

      
      public MODIFIER_CHANGE_RATE = 0.05;


  
    polish(): void {
       this.baseDurability + this.MODIFIER_CHANGE_RATE <= 1 ? super.getEffectiveDurability(this.MODIFIER_CHANGE_RATE):null;
    }

  }
  