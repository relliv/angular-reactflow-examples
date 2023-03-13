import { Directive, ElementRef, inject, Input } from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[reactComponent]',
  standalone: true,
})
export class ReactComponentDirective<Comp extends ElementType> {
  @Input() public reactComponent: Comp;
  @Input() public props: ComponentProps<Comp>;
  @Input() public children: any;

  private root = createRoot(inject(ElementRef).nativeElement);

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
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

  ngOnDestroy() {
    this.root.unmount();
  }
}
