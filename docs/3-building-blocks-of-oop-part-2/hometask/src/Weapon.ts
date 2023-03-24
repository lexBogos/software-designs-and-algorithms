import {Item} from './Item'

export abstract class Weapon extends Item {

  constructor(
     name: string,
     public baseDamage: number,
     public baseDurability: number,
     value: number,
     weight: number,
    ) 
    {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability
    }

    public MODIFIER_CHANGE_RATE = 0.05;

  getEffectiveDamage(): number {
    return this.baseDamage;
  }

  getEffectiveDurability(durabilityModifier?: number): number {
    return this.baseDurability = durabilityModifier ? this.baseDurability + durabilityModifier : this.baseDurability
  }

  use(): string {
    const effectiveDurability = this.baseDurability>0?this.getEffectiveDurability():0;
    if (effectiveDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    const damage = this.getEffectiveDamage();
    const newDurability = this.baseDurability - this.MODIFIER_CHANGE_RATE;
    this.baseDurability = newDurability < 0 ? 0 : newDurability;
    if (this.baseDurability <= 0) {
      console.log(`The ${this.name} breaks.`);
    }
    return `You use the ${this.name}, dealing ${damage.toFixed(2)} points of damage.${this.baseDurability <= 0?`\nThe ${this.name} breaks.`:''}`;
  }

  toString(): string {
    return `${super.toString()}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${((this.getEffectiveDurability()) * 100).toFixed(2)}%`;
  }
}
