import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosVarios } from '../filter/filter.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[],filtro:filtrosVarios): Todo[] {
    switch(filtro){
      case 'completados':
        return value.filter(todo => todo.completado)
      
      case 'pendientes':
        return value.filter(todo => !todo.completado)
      
      default:
        return value;
    }
  }


}
