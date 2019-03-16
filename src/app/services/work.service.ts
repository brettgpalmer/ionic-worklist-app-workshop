import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { WorkModel } from '../shared/models/work-model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private _workList: WorkModel[];

  constructor(
  ) {
    faker.seed(1234);
    this._workList = this.generateWorkList();
  }

  generateWorkList(): WorkModel[] {

    const maxList = 500;

    const genList: WorkModel[] = new Array(maxList);

    for (let i = 0; i < maxList; i++) {
      genList[i] = new WorkModel(
        ' ' + i,
        faker.name.findName(),
        faker.lorem.paragraph(),
        faker.image.avatar(),
        faker.lorem.paragraph()
      );
    }
    return genList;
  }
}
