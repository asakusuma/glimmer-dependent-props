# glimmer-dependent-props

Illustrates issues with depending on component args.

To see the issue demo:
```
yarn
ember serve
```

### 1. Tracked properties can't depend on component arguments

```ts
@tracked('args.parentCount')
get count() {
  // Doesn't get updated when this.args.parentCount is updated
  return this.args.parentCount;
}
```

### 2. TypeScript complier isn't privy to the component signature
The following code causes a complier error: `Property 'parentCount' does not exist on type 'Object'`

```ts
this.args.parentCount;
```