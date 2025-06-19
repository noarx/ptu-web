class pokemon {
    pkmn_name: string;
    hp: number;
    atk: number;
    def: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
    type1: string;
    type2: string;
    basic_ability1: string;
    basic_ability2: string;
    adv_ability1: string;
    adv_ability2: string;
    high_ability: string;
    evo_name: string;
    evo_level: number;
    height: number; //meters
    weight: number; //kilograms
    gender_ratio: number; //percent male (out of 100) - NULL indicates genderless 'mon
    egg_group1: string;
    egg_group2: string;
    hatch_rate: number;

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