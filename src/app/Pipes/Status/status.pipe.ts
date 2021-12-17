import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any):any {

    if(value===true){
      return "completed";
    }
    else{
      return "pending";
    }
   
  }

}
