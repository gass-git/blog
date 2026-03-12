typescript

To pluck means to take hold of something and quickly remove it from its place. So in programming, it means
to pull specific values from a dataset.

For example let's say we have a people list:

```ts
const people = [
  { name: "Robert", age: 40 },
  { name: "Anna", age: 55 },
  { name: "Pepe", age: 24 },
];
```

And we want to pluck only the names. So, our objective is to have a fully typed function capable of returning a list such as the following:

```ts
console.log(pluck(people, "name")); // ["Robert", "Anna", "Pepe"]
```

I guess there might be many ways of implementing this, but I'll use generics.

The following generic function will accept `T` as a type and a key `K` that `extends keyof T` which means that `K` is a subset of the keys of `T` (`name`, `age` in our example).

![subset](pluck-svg-1.svg)

Let's go step by step. We now have:

```ts
function pluck<T, K extends keyof T>(list, key) {
  return list.map((person) => person[key]);
}
```

Okay, so let's continue. Then we see that the function accepts two parameters: `list` an array of objects and `key` being the string key we want to pluck from the people list.

By using generics, TS can infer the type `T` of the objects passed as an argument to the function and by consequence it can also infer the keys of the object. So we can tell TS that `list` parameter will be of type `Array<T>` and `key` is going to be one of the keys of `T`

```ts
function pluck<T, K extends keyof T>(list: Array<T>, key: K) {
  return list.map((person) => person[key]);
}
```

Lastly what remains is to infer the returned type. Since we are using `Array.map()` we have the first clue, it returns an Array.

The remaining question is the type of the elements inside that array. If `T` represents the type of the objects in the list and `K` is the key we want to pluck, then `T[K]`represents the type of that specific property.

Therefore, each mapped element will be of type `T[K]`, and the overall return type becomes `Array<T[K]>`.

```ts
function pluck<T, K extends keyof T>(list: T[], key: K): Array<T[K]> {
  return list.map((person) => person[key]);
}
```

And there you have it!
The end.
