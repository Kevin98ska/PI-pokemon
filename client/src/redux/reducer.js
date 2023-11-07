import { GET_POKEMONS, FILTER_POKEMONS, GET_BY_NAME, FILTER_NAME, ORDER_POKEMONS } from "./actions";


const initialState = {
    allPokemons: [],
    pokemons: [],
    typesPokemons: [], // para el tipo de pokemon que es
    orderBy: [], // para ordenar?
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {...state, allPokemons: action.payload, pokemons: action.payload};
        
        case FILTER_POKEMONS:
            return { ...state, typesPokemons: action.payload };
    
        case FILTER_NAME:
            const filtros = [...state.allPokemons]
            const filtrados = [...filtros.filter((pokes)=> {
                return pokes.types && pokes.types
                .map(tipos=> tipos.trim()).includes(action.payload)
            })]
            return {...state, pokemons: filtrados};


        case GET_BY_NAME:
             return{...state, allPokemons: action.payload};


        case ORDER_POKEMONS:
            const allPokemonsCopy = [...state.allPokemons];
            let sortedPokemons = [];
          
                if (action.payload === "Ascendente") {
                  sortedPokemons = allPokemonsCopy.sort((a, b) => a.name.localeCompare(b.name));
                } else if (action.payload === "Descendente") {
                  sortedPokemons = allPokemonsCopy.sort((a, b) => b.name.localeCompare(a.name));
                } else if (action.payload === "Ataque") {
                  sortedPokemons = allPokemonsCopy.sort((a, b) => a.attack - b.attack);
                }
          
            return {
            ...state,
            allPokemons: sortedPokemons,
            orderBy: action.payload,
            };
          
            default:
            return state;
            }
          };
          
          export default rootReducer;