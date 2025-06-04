import { Component, input } from '@angular/core';
import { SettingsDrawer } from './settings-drawer/settings-drawer.component';

import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  imports: [SettingsDrawer, TooltipModule],
})
export class SectionHeader {
  title = input.required<string>();
  description = input.required<string>();
  showTooltip = input<boolean>(false);
}
