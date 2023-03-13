# AngularFlow

This project demonstrates how to use [React](https://facebook.github.io/react/) and [Reactflow](https://reactflow.dev/) with [Angular](https://angular.io/). These examples are compatible with Angular 14+ and React 17+. The examples are based on the [Reactflow examples](https://reactflow.dev/examples/).

## React Component Directive

The [react-component](./src/app/react-component.directive.ts) directive allows you to use React components in Angular templates. Logic is handled in the React component, while the Angular template is used to pass data to the React component.

> Warning: This directive is a standalone directive. If you want to use it in your project, you need to modify the code to fit your needs.

## Import Reactflow styles

```scss
@import '@reactflow/core/dist/style.css';
@import '@reactflow/controls/dist/style.css';
@import '@reactflow/minimap/dist/style.css';
```

## React Component Wrapper

Just pass react component and props to the `react-component` directive. The directive will create a wrapper component that will render the react component.

```html
<div id="root">
  <div
    [reactComponent]="ReactFlowSubFlows"
    (onEvent)="onEvent($event)"
    [props]="props"
    class="react-flow-container"
  ></div>
</div>
```
