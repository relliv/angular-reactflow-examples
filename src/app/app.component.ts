import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menuItems: any[] = [
    {
      label: 'Hello World',
      route: '/hello-world',
    },
    {
      label: 'Feature Overflow',
      route: '/feature-overflow',
    },
    {
      label: 'Floating Edges',
      route: '/floating-edges',
    },
    {
      label: 'Proximity Connect',
      route: '/proximity-connect',
    },
    {
      label: 'Drag Handle',
      route: '/drag-handle',
    },
  ];

  public constructor() {}

  onNgInit() {}
}
