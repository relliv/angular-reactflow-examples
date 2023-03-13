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

## Example Implementation for Older Angular Versions

An example implementation for older Angular versions based [react-component.directive.ts](./src/app/react-component.directive.ts) file.

```ts
import { ApplicationRef, Directive, ElementRef, inject, Injector, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { ComponentProps, createElement, ElementType, React } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[reactComponent]',
})
export class ReactComponentDirective<Comp extends ElementType> implements OnChanges, OnDestroy {
	@Input() public reactComponent: Comp;
	@Input() public props: ComponentProps<Comp>;
	@Input() public children: any;

	private root: any;

	constructor(private appRef: ApplicationRef, private elementRef: ElementRef) {
		this.root = createRoot(this.elementRef.nativeElement);
	}

	public ngOnChanges(): void {
		this.root.render(
			createElement(
				this.reactComponent,
				this.props,
				this.children?.map((child: any) =>
					createElement(child as React.FC<any>, {
						key: child.name,
						...child.props,
					})
				)
			)
		);
	}

	public ngOnDestroy(): void {
		this.root.unmount();
	}
}
```
