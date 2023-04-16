import RickyMorty from "../RickyMorty.jsx";
import Poke from "../Poke.jsx";

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
            return Poke(poke_response_2.data);
        }
        {result_data()};
        const result = result_data().name;

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