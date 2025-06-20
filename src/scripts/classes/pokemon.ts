export class pokemon {
    private pkmn_name: string;
    private hp: number;
    private atk: number;
    private def: number;
    private sp_atk: number;
    private sp_def: number;
    private speed: number;
    private type1: string;
    private type2: string;
    private basic_ability1: string;
    private basic_ability2: string;
    private adv_ability1: string;
    private adv_ability2: string;
    private high_ability: string;
    private evo_name: string;
    private evo_level: number;
    private height: number; // meters
    private weight: number; // kilograms
    private gender_ratio: number; // Percent Male (out of 100) - NULL indicates genderless 'mon
    private egg_group1: string;
    private egg_group2: string;
    private hatch_rate: number;

    public getPkmn_name(): string {
        return this.pkmn_name;
    }

    public setPkmn_name(pkmn_name: string): void {
        this.pkmn_name = pkmn_name;
    }

    public getHp(): number {
        return this.hp;
    }

    public setHp(hp: number): void {
        this.hp = hp;
    }

    public getAtk(): number {
        return this.atk;
    }

    public setAtk(atk: number): void {
        this.atk = atk;
    }

    public getDef(): number {
        return this.def;
    }

    public setDef(def: number): void {
        this.def = def;
    }

    public getSp_atk(): number {
        return this.sp_atk;
    }

    public setSp_atk(sp_atk: number): void {
        this.sp_atk = sp_atk;
    }

    public getSp_def(): number {
        return this.sp_def;
    }

    public setSp_def(sp_def: number): void {
        this.sp_def = sp_def;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public getType1(): string {
        return this.type1;
    }

    public setType1(type1: string): void {
        this.type1 = type1;
    }

    public getType2(): string {
        return this.type2;
    }

    public setType2(type2: string): void {
        this.type2 = type2;
    }

    public getBasic_ability1(): string {
        return this.basic_ability1;
    }

    public setBasic_ability1(basic_ability1: string): void {
        this.basic_ability1 = basic_ability1;
    }

    public getBasic_ability2(): string {
        return this.basic_ability2;
    }

    public setBasic_ability2(basic_ability2: string): void {
        this.basic_ability2 = basic_ability2;
    }

    public getAdv_ability1(): string {
        return this.adv_ability1;
    }

    public setAdv_ability1(adv_ability1: string): void {
        this.adv_ability1 = adv_ability1;
    }

    public getAdv_ability2(): string {
        return this.adv_ability2;
    }

    public setAdv_ability2(adv_ability2: string): void {
        this.adv_ability2 = adv_ability2;
    }

    public getHigh_ability(): string {
        return this.high_ability;
    }

    public setHigh_ability(high_ability: string): void {
        this.high_ability = high_ability;
    }

    public getEvo_name(): string {
        return this.evo_name;
    }

    public setEvo_name(evo_name: string): void {
        this.evo_name = evo_name;
    }

    public getEvo_level(): number {
        return this.evo_level;
    }

    public setEvo_level(evo_level: number): void {
        this.evo_level = evo_level;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public getGender_ratio(): number {
        return this.gender_ratio;
    }

    public setGender_ratio(gender_ratio: number): void {
        this.gender_ratio = gender_ratio;
    }

    public getEgg_group1(): string {
        return this.egg_group1;
    }

    public setEgg_group1(egg_group1: string): void {
        this.egg_group1 = egg_group1;
    }

    public getEgg_group2(): string {
        return this.egg_group2;
    }

    public setEgg_group2(egg_group2: string): void {
        this.egg_group2 = egg_group2;
    }

    public getHatch_rate(): number {
        return this.hatch_rate;
    }

    public setHatch_rate(hatch_rate: number): void {
        this.hatch_rate = hatch_rate;
    }

    constructor(pkmn_name: string, hp: number, atk: number, def: number, sp_atk: number, sp_def: number, speed: number, type1: string, type2: string, basic_ability1: string, basic_ability2: string, adv_ability1: string, adv_ability2: string, high_ability: string, evo_name: string, evo_level: number, height: number, weight: number, gender_ratio: number, egg_group1: string, egg_group2: string, hatch_rate: number,) {
        this.pkmn_name = pkmn_name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.sp_atk = sp_atk;
        this.sp_def = sp_def;
        this.speed = speed;
        this.type1 = type1;
        this.type2 = type2;
        this.basic_ability1 = basic_ability1;
        this.basic_ability2 = basic_ability2;
        this.adv_ability1 = adv_ability1;
        this.adv_ability2 = adv_ability2;
        this.high_ability = high_ability;
        this.evo_name = evo_name
        this.evo_level = evo_level
        this.height = height;
        this.weight = weight
        this.gender_ratio = gender_ratio;
        this.egg_group1 = egg_group1;
        this.egg_group2 = egg_group2;
        this.hatch_rate = hatch_rate
    }
}