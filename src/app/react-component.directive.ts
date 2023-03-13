import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[reactComponent]',
  // https://angular.io/guide/standalone-components
  // standalone components/directives/pipes are coming in Angular 14
  standalone: true,
})
export class ReactComponentDirective<Comp extends ElementType>
  implements OnChanges, OnDestroy
{
  @Input() public reactComponent: Comp;
  @Input() public props: ComponentProps<Comp>;
  @Input() public children: any;

  private root = createRoot(inject(ElementRef).nativeElement);

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
