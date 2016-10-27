import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'calcluatePrice' })
export class CalculatePrice implements PipeTransform {
    transform(value: string, exponent: string): string {
        return "test";
    }
}