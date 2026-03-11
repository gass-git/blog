typescript

To pluck means to take hold of something and quickly remove it from its place. So in programming, it means
to pull specific values from a dataset.

E.g. we have a people list:

```ts
const people = [
  { name: "Robert", age: 40 },
  { name: "Anna", age: 55 },
  { name: "Pepe", age: 24 },
];
```

And we want to pluck only the names. So, what we are looking for is the following:

```ts
console.log(pluck(people, "name")); // ["Robert", "Anna", "Pepe"]
```

I will build a generic function that accepts `T` as a type and `K extends keyof T` means that K is a subset of the keys of T (name, age).

The parameters `(list: T[], key: K)` where `list` is an array of elements of type `T` `{name: string; age: number}` and returns `Array<T[K]>` which means an array of elements of the type `T` of key `K`.

```ts
function pluck<T, K extends keyof T>(list: T[], key: K): Array<T[K]> {
  return list.map((person) => person[key]);
}
```
