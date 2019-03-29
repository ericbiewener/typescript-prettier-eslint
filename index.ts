type Obj = { [key: string]: 1 };

// the `as` syntax below causes the error
const obj = { foo: 1 } as Obj;
