// Main Web-app Logic

import { Pokemon } from "./classes/pokemon";

// Test Pokemon Object Implementation

const missingno = new Pokemon({
    pkmn_name: "missingno",
    hp: 1,
    atk: 2,
    def: 3,
    sp_atk: 4,
    sp_def: 5,
    speed: 6,
    type1: "normal",
    type2: null,
    basic_ability1: "test ability 1",
    basic_ability2: "test ability 2",
    adv_ability1: "test ability adv1",
    adv_ability2: "test ability adv2",
    high_ability: "test ability high",
    evo_name: null, 
    evo_level: null, 
    height: 20,
    weight: 25, 
    gender_ratio: null,
    egg_group1: null,
    egg_group2: null, 
    hatch_rate: null
});