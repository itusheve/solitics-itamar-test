import { Component, OnInit, Input } from '@angular/core';
import { IDataType } from 'src/app/types/data-type.interface';
import { IconType } from 'src/app/types/icon.enum';

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.css'],
})
export class StatusIconComponent implements OnInit {
  @Input() status: IDataType;
  iconType = {img: null, label: null};

  constructor() {}

  ngOnInit(): void {
    const icon = this.status.isAllList || this.status.isDynamic || null;
    this.setIconType();
  }

  setIconType() {
    let icon = null;
    if (this.status.hasOwnProperty('isAllList')) {
      this.iconType.img = IconType.isAllList;
      this.iconType.label = IconType.main;
    } else if (this.status.hasOwnProperty('isDynamic')) {
      this.iconType.img = IconType.isDynamic;
      this.iconType.label = IconType.dynamic;
    } else if (this.status.state.total === 0) {
      this.iconType.img = IconType.totalState;
      this.iconType.label = IconType.empty;
    }
  }
}
