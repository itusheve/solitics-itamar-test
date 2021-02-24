import { Component, OnInit } from '@angular/core';
import { IDataType } from '../../types/data-type.interface';
import { DataService } from '../../services/data.service';
import { fromEvent } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { adjustDate } from './table.helper';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  tableData: IDataType[];
  displayedColumns: string[];
  isInput = false;
  dtArray = ['active', 'new', 'removed', 'blocked', 'stopped', 'total'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.tableData = data;
      const allList: any[] = this.tableData.splice(
        this.tableData.findIndex((item) => item.isAllList === true),
        1
      );
      this.tableData = allList.concat(this.tableData);
      this.tableData = adjustDate(this.tableData);
    });
  }

  onEdit() {
    this.isInput = true;
    const keyDowns = fromEvent(document, 'keydown').pipe(
      filter((e: KeyboardEvent) => e.keyCode === 27 || e.keyCode === 13),
      distinctUntilChanged()
    );
    keyDowns.subscribe((escpress) => {
      if (escpress.type === 'keydown') {
        this.isInput = false;
      }
    });
  }
}
