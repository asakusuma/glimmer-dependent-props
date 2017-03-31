# glimmer-dependent-props

~~Illustrates issues with depending on component args.~~
Demonstrates how to create computed properties that depend on component args.

For a better demo, checkout: https://github.com/glimmerjs/glimmer-demos/blob/master/src/ui/components/server-uptime/component.ts

```
yarn
ember serve
```

```ts
@tracked('args')
get computedArg() {
  return this.args.myArg;
}
```

### TypeScript complier isn't privy to the component signature
The following code causes a complier error: `Property 'parentCount' does not exist on type 'Object'`

```ts
this.args.parentCount;
```