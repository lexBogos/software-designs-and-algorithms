import { Component } from '@angular/core';

export class NamedComponent extends Component {
  protected name: string;

  getName() {
    return this.name;
  }
}

export class WelcomeComponent extends NamedComponent {
  message = `Welcome, ${this.getName()}!`;
}

// NamedComponent add aditional method to Component and could be used anywhere as Component