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
    faker.seed(123);
    this._workList = this.generateWorkList();
  }

  generateWorkList(): WorkModel[] {

    const maxList = 500;

    const genList: WorkModel[] = new Array(maxList);

    for (let i = 0; i < maxList; i++) {
      genList[i] = new WorkModel(
        '' + i,
        faker.name.findName(),
        faker.lorem.paragraph(),
        faker.image.avatar(),
        faker.lorem.paragraph(),
        null,
        null
      );
    }
    return genList;
  }


/*
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public notes: string,
        public imageList: string[],
    ) {
*/

  addWork(
    title: string,
    description: string,
    imgUrl: string,
    workDate: Date
  ) {
    this._workList.push(
      new WorkModel(
        '100',
        title,
        description,
        imgUrl,
        null,
        null,
        workDate)
      );
  }

  getWorkList() {
    return this._workList;
  }

  getWorkById(id: string): WorkModel {
    for(const work of this._workList) {
      if (work.id === id) {
        return work;
      };
    };
    return undefined;
  }

}
