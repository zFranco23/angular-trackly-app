import { Component, computed, Signal, signal } from '@angular/core';
import { inject } from '@angular/core';
import { UserStore } from '@modules/auth/stores/user.store';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  imports: [SkeletonModule],
})
export class Avatar {
  userStore = inject(UserStore);
  name = computed(() => this.userStore.user()?.name.split(' ')[0]);
  lastName = computed(() => this.userStore.user()?.lastName.split(' ')[0]);

  imageSrc = computed(() => {
    if (!this.userStore.user()) return '';
    const shortName = this.name();
    const shortLastName = this.lastName();
    const getQueryName = `${shortName}+${shortLastName}`;
    return `https://ui-avatars.com/api/?name=${getQueryName}`;
  });
}
