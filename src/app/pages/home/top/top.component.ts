import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {TopAnimation} from './top.animation';
import {of} from 'rxjs';
import {saveAs} from 'file-saver';
import FileSaver from 'file-saver';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [TopAnimation]
})
export class TopComponent implements OnInit {
  arc = 'false';
  projectDetails: any;
  models: any[] = [];
  projectHeading: any;
  contact: any;
  modelNo: any;
  findResult: any = null;
  relatedModel: [] = [];
  relatedModelData: any[] = [];
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };
  constructor(private http: HttpClient) {
    this.http.get('assets/projectDetails.json').subscribe((data: any) => {
      this.projectDetails = data;
      this.projectHeading = this.projectDetails.projectHeading;
      this.contact = this.projectDetails.contact;

    });
    this.http.get('assets/model.json').subscribe((data: any) => {
      this.models = data;
    });

  }

  ngOnInit(): void {

  }
  searchModel(){
    this.relatedModel = [];
    this.relatedModelData = [] ;
    const index = this.models.findIndex(x => x.model === this.modelNo);
    this.findResult = this.models[index];
    this.relatedModel =  this.findResult.related_model;
    /*------ using Angular ES6 provided method to filter an array---*/
    this.relatedModelData = this.models.filter(ar => this.relatedModel.find(rm => (rm === ar.model)));

    /* --------- using normal method to filter data from a array by using 'FindIndex' , this is also right----*/

    // for (let x = 0; x < this.relatedModel.length ; x++){
    //     const relatedModelIndex = this.models.findIndex(k => k.model === this.relatedModel[x]);
    //    // this.relatedModelData.push(this.models[relatedModelIndex]);
    //    // console.log(this.models[relatedModelIndex]);
    // }
  }
  toggleBounce(){
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
  fakeValidateUserData() {
    return of({
      userDate1: 1,
      userData2: 2
    });
  }
  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }
  dynamicDownloadTxt() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report',
        text: JSON.stringify(res)
      });
    });

  }

  dynamicDownloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report.json',
        text: JSON.stringify(res)
      });
    });
  }

  saveFile() {
    const blob = new Blob(['Hello, world!'], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'hello world.txt');
  }
}
