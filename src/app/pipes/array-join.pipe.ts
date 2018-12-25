import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayJoin'
})

export class ArrayJoinPipe implements PipeTransform {
    transform(value: string[], args?: any): any {
        let stringNew: string;
        if (value) {
            stringNew = value.join(' ');
        } else {
            stringNew = null;
        }
        return stringNew;
    }
}
