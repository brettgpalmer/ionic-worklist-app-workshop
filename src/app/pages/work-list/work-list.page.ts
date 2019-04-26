import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { WorkModel } from 'src/app/shared/models/work-model';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.page.html',
  styleUrls: ['./work-list.page.scss'],
})
export class WorkListPage implements OnInit {

  searchText = '';
  loadedWork: WorkModel[];
  filteredWork: WorkModel[];

  constructor(
    private workService: WorkService
  ) { }

  ngOnInit() {
    console.log('loading work list');
    this.loadedWork = this.workService.getWorkList();
    this.filteredWork = [...this.loadedWork];
    console.log('Work list has been loaded');
  }

  filterText() {
    this.filteredWork = this.searchText ?
        this.loadedWork.filter(work => work.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) :
        [...this.loadedWork];
  }

}
