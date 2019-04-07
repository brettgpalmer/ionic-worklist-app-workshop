import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkService} from '../../services/work.service';
import {WorkModel} from '../../shared/models/work-model';

@Component({
  selector: 'app-work-detail-view',
  templateUrl: './work-detail-view.page.html',
  styleUrls: ['./work-detail-view.page.scss'],
})
export class WorkDetailViewPage {

  work: WorkModel = <WorkModel>{};

  constructor(private route: ActivatedRoute, private workService: WorkService) { }

  ionViewWillEnter() {
    const workId = this.route.snapshot.paramMap.get('id');
    this.work = this.workService.getWorkById(workId);
  }

}
