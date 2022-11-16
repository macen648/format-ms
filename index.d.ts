export type Parsed = {
    days: number
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
}

/**
Parse raw Milliseconds into a object.

@param ms - Milliseconds to object.

@example
```
import { objectMS } from 'format-ms';

console.log(objectMS(123456789))
// {
// 	days: 1,
// 	hours: 10,
// 	minutes: 17,
// 	seconds: 36,
// 	milliseconds: 789,
// }
```
*/
export function objectMS(ms: number): Parsed


/**
// Format raw Milliseconds to Years, Days, Hours, minutes, seconds, milliseconds. 

@param ms - Milliseconds to readable string.

@example
```
import formatMS from 'format-ms';

formatMS(123456789) => '1d 10h 17m 36s 789ms'

```
*/
export default function formatMS(ms: number): string

