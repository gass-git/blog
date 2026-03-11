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
console.log(pluck("name")); // ["Robert", "Anna", "Pepe"]
```

...to be continued
