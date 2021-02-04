import { 
   WINDOW_RESIZE,
} from '../actions'
import { updateObject } from '@experiments/Toolbox';

const initialState = {
    x: window.innerWidth,
    y: window.innerHeight,
};

export default (state = initialState, action) => {
    switch(action.type){
        case WINDOW_RESIZE:
            return updateObject(state, { x: window.innerWidth, y: window.innerHeight })
        default:
            return state
    }
}