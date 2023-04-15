import RickyMorty from "../RickyMorty.jsx";
import Poke from "../Poke.jsx";
import axios_test from "axios";

describe('Funtions inside the component Poke', ()=>{
    describe('Poke', ()=>{

        const result_data =async ()=> {
            const poke_response_2 = await axios_test.get(poke_Link , {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  'Access-Control-Allow-Origin': `${poke_Link="https://pokeapi.co/api/v2/pokemon/6/"}`
                }
            })
            console.log("ResultadosSSSSSSSSSSSSSSSSSSSSS    000",poke_response_2);
            console.log("ResultadosSSSSSSSSSSSSSSSSSSSSS    111",poke_response_2.data);
            return Poke(poke_response_2.data);
        }
        {result_data()};
        const result = result_data().name;
        console.log("ResultadosSSSSSSSSSSSSSSSSSSSSS    1",result_data());
        console.log("ResultadosSSSSSSSSSSSSSSSSSSSSS    2",result_data().name);
        console.log("ResultadosSSSSSSSSSSSSSSSSSSSSS    3",result);

        test('return the id as a String', ()=>{
            expect(typeof result).toBe('string');
        });

        test('return the name as a String', ()=>{
            expect(result).toBe('charizard');
        });

        test('return void', ()=>{
            expect(Poke()).toBe(undefined);
        });
    });
});

describe('Funtions inside the component RickandMorty', ()=>{

});