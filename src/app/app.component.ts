import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    {
      label: 'Sub Flows',
      route: '/sub-flows',
    },
    {
      label: 'Turbo Flow',
      route: '/turbo-flow',
    },
    {
      label: 'Add Node Edge on Drop',
      route: '/add-node-edge-on-drop',
    },
    {
      label: 'Node Toolbars',
      route: '/node-toolbars',
    },
    {
      label: 'Dagre Tree',
      route: '/dagre-tree',
    },
    {
      label: 'Custom Dagre Tree',
      route: '/custom-dagre-tree',
    },
  ];

  public constructor(private router: Router) {
    const randomIndex = Math.floor(Math.random() * this.menuItems.length);

    this.router.navigate([this.menuItems[randomIndex].route]);
  }

  onNgInit() {}
}
