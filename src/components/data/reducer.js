import initial from '../data/initial';
import { difficulty } from './actions';

const counterIncrease = state => ({ ...state, count: state.count + 1 });

  const shuffle = (data) => {
    let array = [...data]
    for(let i = (array.length -1) ; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    return array
};

const setQuestionsReducer = (state,{data}) => ({ ...state, cards: shuffle(data) })

// const shuffleCards = (state,{arrayShuff}) => ({ ...state, cards: arrayShuff })

const clickUpdate = (state,{cardClick}) => ({ ...state, cards: cardClick })

const pairs = (state,{valuePair}) => ({ ...state, score: valuePair })

// const scoreUpdate = (state,{scoreChange}) => ({ ...state, score: scoreChange })

const scoreIncr = (state,{scoreVal}) => ({ ...state, score: scoreVal })

const diffclty = (state,{selectedDiff}) => ({ ...state, selectedOption: selectedDiff })

const updPlyrNm = (state,{valuePlayerName}) => ({ ...state, playername: valuePlayerName })

const clickRchecker = state => ({ ...state, tooManyClicks: !state.tooManyClicks});

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "setCards": return setQuestionsReducer(state,action);
        // case "SHUFFLE": return shuffleCards(state,action);
        case "CLICKSTATUS": return pairs(clickUpdate(state,action),action);;
        case "SCOREUPDATE": return scoreIncr(state,action);
        case "DIFFICULTY": return diffclty(state,action);
        case "PLAYERNAME": return updPlyrNm(state,action);
        case "CLICKERCHECKER": return clickRchecker(state);
        case "RESET": return initial;
        default: return state;
        }
    };
console.log("init",initial)

// const shuffleCards= state => ({...state, cards: state.cards.sort(() => Math.random() - 0.5)});

    // const rootReducer = (state, action) => { if (action.type === 'RESET_APP') { 
    //     state = undefined;} 
    //         return appReducer(state, action);
    //     }


// const shuffle = (data) => {
//     let arrShuff = [...data]
//     arrShuff.sort(() => Math.random() - 0.5)
//     return arrShuff
// };


// const cardStatus = (index) => {
//     let newCards = [...state.cards];
//     newCards[index].counter = !state.cards[index].counter;
//     ({ cards: newCards });
    
// }

// const updateScore= state => {
//     let arr2=[];
//     state.cards.filter((item,index)=>{
//       if (item.paired == true){
//                return arr2.push(item.paired);
//               }
//     });
    
//     let tot= (arr2.length / 2);
//     ({ score: tot});
// }



// const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// const shuffleCards = (state) => ({ ...state, cards: shuffle(state.cards)})