import { Directive, ElementRef, inject, Input } from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  selector: '[reactComponent]',
  standalone: true,
})
export class ReactComponentDirective<Comp extends ElementType> {
  @Input() reactComponent: Comp;
  @Input() props: ComponentProps<Comp>;
  @Input() children: any;

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnChanges() {
    this.root.render(
      createElement(
        this.reactComponent,
        this.props,
        this.children.map((child: any) =>
          createElement(child as React.FC<any>, {
            key: child.name,
            ...child.props,
          })
        )
      )
    );
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
