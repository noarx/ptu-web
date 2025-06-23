type AbilityOptions = {
    ability_name: string;
    ability_type: string;
    ability_effect: string;
}

export class Ability {
    // Constructor
    private opts: AbilityOptions;

    constructor (options: AbilityOptions) {
        this.opts = options; 
    }

    // Access Methods
    public getAbility_name(): string {
        return this.opts.ability_name;
    }

    public setAbility_name(ability_name: string): void {
        this.opts.ability_name = ability_name;
    }

    public getAbility_type(): string {
        return this.opts.ability_type;
    }

    public setAbility_type(ability_type: string): void {
        this.opts.ability_type = ability_type;
    }

    public getAbility_effect(): string {
        return this.opts.ability_effect;
    }

    public setAbility_effect(ability_effect: string): void {
        this.opts.ability_effect = ability_effect;
    }
}