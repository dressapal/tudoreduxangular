import { createReducer, on , Action} from '@ngrx/store';
import { filtrosVarios, setFiltro } from './filter.actions';

export const initialState :filtrosVarios = 'todos';

export const filtroReducer = createReducer<filtrosVarios,Action>(initialState,

  on(setFiltro, (state, {filtro})=> filtro)

);