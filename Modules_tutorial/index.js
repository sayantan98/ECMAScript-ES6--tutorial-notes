// module is like writting code in multiple files, we call each file of code modules
import {Teacher} from "./teacher";
const teacher = new Teacher("Mosh","MSc");
Teacher.teach();

/*
Named and Default Exports:-

For named exports, it's the normal as we used above, like

import {...} from 'X'

but for default export, we have to use default keyword, like

export default class Person {}

and, imports as follows:-

import ... from 'X'

*/
