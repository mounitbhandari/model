import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {TopAnimation} from './top.animation';
import {Observable, of} from 'rxjs';
import {saveAs} from 'file-saver';
import FileSaver from 'file-saver';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {CommonService} from '../../../services/common.service';
import {ModelService} from '../../../services/model.service';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [TopAnimation]
})
export class TopComponent implements OnInit {
  myControl = new FormControl();
  options$: Observable<Product[]>;

  keyword = 'model';


  arc = 'false';
  projectDetails: any;
  models: Product[] = [];
  projectHeading: any;
  contact: any;
  modelNo: any;
  findResult: any = null;
  relatedModel: string[] = [];
  relatedModelData: Product[] = [];
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };
  constructor(private http: HttpClient, private modelService: ModelService) {
    this.http.get('assets/projectDetails.json').subscribe((data: any) => {
      this.projectDetails = data;
      this.projectHeading = this.projectDetails.projectHeading;
      this.contact = this.projectDetails.contact;

    });
    // this.http.get('assets/model.json').subscribe((data: any) => {
    //   this.models = data;
    // });
    this.http.get('assets/test_model.json').subscribe((data: any) => {
      this.models = data;
    });
    this.options$ = this.modelService.getUsers();
    // console.log(this.options$);
  }

  ngOnInit(): void {

  }
  searchModel(){
    this.relatedModel = [];
    this.relatedModelData = [] ;
    const index = this.models.findIndex(x => x.model === this.modelNo);
    if (index < 0){
        alert('This Model does not exist');
        return;
    }

    this.findResult = this.models[index];
    this.relatedModel =  this.findResult.related_model;
    console.log(this.relatedModel);
    /*------ using Angular ES6 provided method to filter an array---*/
    this.relatedModelData = this.models.filter(ar => this.relatedModel.find(rm => (rm === ar.model)));
    console.log(this.relatedModelData);

    /* --------- using normal method to filter data from a array by using 'FindIndex' , this is also right----*/

    // for (let x = 0; x < this.relatedModel.length ; x++){
    //     const relatedModelIndex = this.models.findIndex(k => k.model === this.relatedModel[x]);
    //     console.log(relatedModelIndex);
    //     this.relatedModelData.push(this.models[relatedModelIndex]);
    //     console.log(this.relatedModelData);
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

  selectEvent($event: any) {
    console.log($event);
  }

  onChangeSearch($event: any) {
    console.log($event);
  }

  onFocused($event: any) {

  }
}
