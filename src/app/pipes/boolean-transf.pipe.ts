import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'booleanTransform'
})
export class BooleaTransformPipe implements PipeTransform {
    transform(value: any, args?: any): string {
        let valueToType;
        if (value === 'true' || value === true) {
            valueToType = true;
        } else {
            valueToType = false;
        }
        return valueToType;
    }
}
