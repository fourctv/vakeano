import { Component, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';

import { FourDInterface } from 'js44d';
import { DataGrid } from 'js44d';
import { TasteProfilesEx, ViewerContent, ViewerContentEx } from '../moviegenome/index';

@Component({
    selector: 'viewercontent-info',
    template: `
        <div>
            <div class="row" style="padding-left:10px;">
                <button class="regularButton" style="width:120px;margin-left:380px" (click)="checkFeature()">Analyze</button>
                <button class="regularButton" style="width:140px;margin-left:30px" (click)="recalcRecommendations()">Recalc Recommendations</button>
        </div>
            <div style="margin-bottom:5px;margin-top:5px;">
                <textarea style="width:950px;height:100px" class="fieldEntry" type="text" [(ngModel)]="analyzeResponse" disable></textarea>
            </div>
            <div style="height:300px;overflow-y:auto;display:block;">
                <datagrid  [height]="300"
                        [columns]="columnDefs"
                        [columnMenu]="false"
                        [useLazyLoading]="false"
                        [pageableRefresh]="false"
                        [pageableSizes]="false"
                        [pageableMessage]="recordCount"
                    ></datagrid>
                </div>

        </div>
     `
})


export class ViewerContentInfo implements AfterViewInit {
    @Input() public record: TasteProfilesEx;

    public analyzeResponse:string;

    public get recordCount():string {return (this.record.viewerContentList)?this.record.viewerContentList.length.toString()+' items':'0';}

    public columnDefs = [
        { title: 'IMDB ID', width:80, field: 'IMDBID' },
        { title: 'IMDB Title', width:250, field: 'IMDBTitle' },
        { title: 'Prod.Year', width:80, field: 'ProdYear' },
        { title: 'Directors', width:200, field: 'DirectorsList' },
        { title: 'Score', width:80, field: 'UserScore', filterable: { multi: true }  },
        { title: 'Score Date', width:100, field: 'ScoreDate', template:function (dataItem){return (isNaN(dataItem.ScoreDate))?'':kendo.format('{0:d}',dataItem.ScoreDate)} },
        { title: 'Recom.Date', width:100, field: 'RecommendationDate', template:function (dataItem){return (isNaN(dataItem.RecommendationDate))?'':kendo.format('{0:d}',dataItem.RecommendationDate)} },
        { title: 'Is Rejected?', width:80, field: 'IsRejected' },
        { title: 'MGCCI', width:80, field: 'MGCCI', filterable: false },
        { title: 'MGPEI', width:80, field: 'MGPEI', filterable: false },
        { title: 'MGEQI', width:80, field: 'MGEQI', filterable: false },
        { title: 'MGPAI', width:80, field: 'MGPAI', filterable: false },
        { title: 'MGNQI', width:80, field: 'MGNQI', filterable: false },
        { title: 'MGPVR', width:80, field: 'MGPVR', filterable: false }
     ];

    @ViewChild(DataGrid, {static: false}) private theGrid: DataGrid;

    constructor(private elementRef: ElementRef, private fourD:FourDInterface) {}

    ngAfterViewInit() {
        this.refreshGrid();
    }

    public checkFeature() {
        this.analyzeResponse = '';
        if (this.theGrid && this.theGrid.selectedRow()) {
            let body = {
                featureID: (<ViewerContent>this.theGrid.selectedRow()).FeatureID,
                profileID: (<ViewerContent>this.theGrid.selectedRow()).ProfileID
            };
            this.fourD.call4DRESTMethod('MGRErestCheckFeature', body, {responseType:'text'})
                .subscribe(result => {
                    this.analyzeResponse = result;
                }, error => { console.log(error); alert('Error:' + error); });
        }
    }

    public recalcRecommendations() {
        if (this.record) {
            let body = {
                profileID: this.record.ProfileID
            };
            kendo.ui.progress($(this.elementRef.nativeElement), true); // show loading progress icon
            this.fourD.call4DRESTMethod('MGSErestRecalcRecommendations', body, {responseType:'text'})
                .subscribe(result => {
                   this.record.refresh().then(r => {
                       kendo.ui.progress($(this.elementRef.nativeElement), false); // hide loading progress icon
                       this.refreshGrid();
                   });
                }, error => { console.log(error); alert('Error:' + error); });
        }

    }

    public refreshGrid() {
        if (this.record && this.theGrid) {
            if (this.record.viewerContentList.length > 0) {
                let data = [];
                this.record.viewerContentList.forEach(element => {
                    let item:ViewerContentEx = new ViewerContentEx();
                    item.populateModelData(element);
                    data.push(item.extractModelData());
                });

                this.theGrid.setDataSource(data);
            }
        }
    }
}
