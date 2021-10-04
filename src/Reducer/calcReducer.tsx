
import { expression } from 'mathjs';
import { CalcState } from '../Interfaces/calcReducer.interface';

const initialState: CalcState = {
  value: 0,
  expressions:0,
};

const calcReducer = (state = initialState, action: any) => {
  switch(action.type){
      case 'ADD_NUMBERS':
          return{
              ...state,
              value: state.value === 0 ? action.payload : state.value + action.payload,
              expressions:state.value + action.payload
          }
      case 'CLEAR':
          return{
              ...state,
              value: 0,
              expressions:0
          }
      case 'EQUAL':
          return{
              ...state,
              // eslint-disable-next-line no-eval
              value: eval(action.payload),
          }
      default:
          return state;
  }
}

export default calcReducer
