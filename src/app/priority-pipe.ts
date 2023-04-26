import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'priority'})
export class PriorityPipe implements PipeTransform {
    transform(value: string) {
        return ` (${value})`;
    }
}