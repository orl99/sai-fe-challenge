import { IUser } from './../models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

// Orlando: Does this the use of a pipe make sanse un this simple operation???
@Pipe({name: 'userInfo'})
export class UserInfoPipe implements PipeTransform {
  transform(value: IUser, returns: 'name' | 'lastname'): string {
    switch (returns) {
      case 'name':
        return value.firstName;
        break;
      case 'lastname':
        return value.lastName;
        break;
      default:
        break;
    }
  }
}
