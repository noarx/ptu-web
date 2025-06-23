// Main Web-app Logic

import { Pokemon } from "./classes/pokemon";

// Test Pokemon Object Implementation

const missingno = new Pokemon({
    pkmn_name: "Missingno",
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

function displayPokemon(pokemon: Pokemon) {
    let prettyTypeString: string;

    if (pokemon.getSecondaryType() != null) {
        prettyTypeString = pokemon.getPrimaryType() + '/' + pokemon.getSecondaryType();
    } else {
        prettyTypeString = pokemon.getPrimaryType();
    };

    document.querySelector<HTMLDivElement>('#pokemonBox')!.innerHTML = `

        <h2>${pokemon.getPkmn_name()}</h2>

        <ul class="framed buttons">
            <li>HP: ${pokemon.getHp()}</li>
            <li>ATK: ${pokemon.getAtk()}</li>
            <li>DEF: ${pokemon.getDef()}</li>
            <li>Sp. ATK: ${pokemon.getSp_atk()}</li>
            <li>Sp. DEF: ${pokemon.getSp_def()}</li>
            <li>SPD: ${pokemon.getSpeed()}</li>
        </ul>

        <h3>Type: ${prettyTypeString}</h3>
    `
};

displayPokemon(missingno);