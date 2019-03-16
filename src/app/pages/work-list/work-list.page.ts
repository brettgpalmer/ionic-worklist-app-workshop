import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { WorkModel } from 'src/app/shared/models/work-model';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.page.html',
  styleUrls: ['./work-list.page.scss'],
})
export class WorkListPage implements OnInit {

  loadedWork: WorkModel[];

  constructor(
    private workService: WorkService
  ) { }

  ngOnInit() {
    console.log('loading work list');
    this.loadedWork = this.workService.generateWorkList();
    console.log('Work list has been loaded');
  }

}
