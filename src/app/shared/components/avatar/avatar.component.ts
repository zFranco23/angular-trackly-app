import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
})
export class Avatar {
  name = signal<string>('Franco Jossep');

  get getAvatarImage() {
    const getQueryName = this.name().replaceAll(' ', '+');
    return `https://ui-avatars.com/api/?name=${getQueryName}`;
  }
}
