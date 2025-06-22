type PokemonOptions = {
    pkmn_name: string;
    hp: number;
    atk: number;
    def: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
    type1: string;
    type2: string | null;
    basic_ability1: string;
    basic_ability2: string | null;
    adv_ability1: string | null;
    adv_ability2: string | null;
    high_ability: string | null;
    evo_name: string | null;
    evo_level: number | null;
    height: number; // meters
    weight: number; // kilograms
    gender_ratio: number | null; // Percent Male (out of 100) - null indicates genderless 'mon
    egg_group1: string | null;
    egg_group2: string | null;
    hatch_rate: number | null;
}


export class Pokemon {
    // Constructor
    private opts: PokemonOptions;
    
    constructor(options: PokemonOptions) {
        this.opts = options;
    }

    // Access Methods

    public getPkmn_name(): string {
        return this.opts.pkmn_name;
    }

    public setPkmn_name(pkmn_name: string): void {
        this.opts.pkmn_name = pkmn_name;
    }

    public getHp(): number {
        return this.opts.hp;
    }

    public setHp(hp: number): void {
        this.opts.hp = hp;
    }

    public getAtk(): number {
        return this.opts.atk;
    }

    public setAtk(atk: number): void {
        this.opts.atk = atk;
    }

    public getDef(): number {
        return this.opts.def;
    }

    public setDef(def: number): void {
        this.opts.def = def;
    }

    public getSp_atk(): number {
        return this.opts.sp_atk;
    }

    public setSp_atk(sp_atk: number): void {
        this.opts.sp_atk = sp_atk;
    }

    public getSp_def(): number {
        return this.opts.sp_def;
    }

    public setSp_def(sp_def: number): void {
        this.opts.sp_def = sp_def;
    }

    public getSpeed(): number {
        return this.opts.speed;
    }

    public setSpeed(speed: number): void {
        this.opts.speed = speed;
    }

    public getPrimaryType(): string {
        return this.opts.type1;
    }

    public setPrimaryType(type1: string): void {
        this.opts.type1 = type1;
    }

    public getSecondaryType(): string | null {
        return this.opts.type2;
    }

    public setSecondaryType(type2: string | null): void {
        this.opts.type2 = type2;
    }

    public getBasic_ability1(): string {
        return this.opts.basic_ability1;
    }

    public setBasic_ability1(basic_ability1: string): void {
        this.opts.basic_ability1 = basic_ability1;
    }

    public getBasic_ability2(): string | null {
        return this.opts.basic_ability2;
    }

    public setBasic_ability2(basic_ability2: string | null): void {
        this.opts.basic_ability2 = basic_ability2;
    }

    public getAdv_ability1(): string | null {
        return this.opts.adv_ability1;
    }

    public setAdv_ability1(adv_ability1: string | null): void {
        this.opts.adv_ability1 = adv_ability1;
    }

    public getAdv_ability2(): string | null {
        return this.opts.adv_ability2;
    }

    public setAdv_ability2(adv_ability2: string | null): void {
        this.opts.adv_ability2 = adv_ability2;
    }

    public getHigh_ability(): string | null {
        return this.opts.high_ability;
    }

    public setHigh_ability(high_ability: string | null): void {
        this.opts.high_ability = high_ability;
    }

    public getEvo_name(): string | null {
        return this.opts.evo_name;
    }

    public setEvo_name(evo_name: string | null): void {
        this.opts.evo_name = evo_name;
    }

    public getEvo_level(): number | null {
        return this.opts.evo_level;
    }

    public setEvo_level(evo_level: number | null): void {
        this.opts.evo_level = evo_level;
    }

    public getHeight(): number {
        return this.opts.height;
    }

    public setHeight(height: number): void {
        this.opts.height = height;
    }

    public getWeight(): number {
        return this.opts.weight;
    }

    public setWeight(weight: number): void {
        this.opts.weight = weight;
    }

    public getGender_ratio(): number | null {
        return this.opts.gender_ratio;
    }

    public setGender_ratio(gender_ratio: number | null): void {
        this.opts.gender_ratio = gender_ratio;
    }

    public getEgg_group1(): string | null {
        return this.opts.egg_group1;
    }

    public setEgg_group1(egg_group1: string | null): void {
        this.opts.egg_group1 = egg_group1;
    }

    public getEgg_group2(): string | null {
        return this.opts.egg_group2;
    }

    public setEgg_group2(egg_group2: string | null): void {
        this.opts.egg_group2 = egg_group2;
    }

    public getHatch_rate(): number | null {
        return this.opts.hatch_rate;
    }

    public setHatch_rate(hatch_rate: number | null): void {
        this.opts.hatch_rate = hatch_rate;
    }
}