import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { FourDInterface } from 'js44d';
import { ModalConfig, ICustomModal } from 'js44d';
import { DataGrid } from 'js44d';
import { TasteProfilesEx } from '../moviegenome/customDataModels/TasteProfilesEx';

@Component({
    selector: 'analyze-season',
    template: `
    <div class="formPanel">
        <h1>Vakeano Series Season Analyzer</h1>
        <br/>
        <div class="row" style="padding-left:10px;">
            <h4>Select the Taste Profile to use for analyzing: <span style="color:green;">{{inputData.seasonName}}</span></h4>
            <button class="regularButton" style="width:120px;margin-left:380px" (click)="checkSeason()">Analyze</button>
        </div>
        <div style="margin-bottom:15px;">
            <h3>Results:</h3>
            <textarea style="width:950px;height:120px" class="fieldEntry" type="text" [(ngModel)]="analyzeResponse" disable></textarea>
        </div>
       <div>
                <datagrid  [height]="340"
                    [columns]="columnDefs"
                    [model]="model"
                    [useLazyLoading]="false"
                    [pageableRefresh]="false"
                    [pageableSizes]="false"
                ></datagrid>
        </div>
    </div>
     `
})

export class AnalyzeSeasonComponent implements AfterViewInit {
    public static dialogConfig: ModalConfig = <ModalConfig>{
        size: 'lg',
        actions: ['Maximize', 'Minimize', 'Close'], position: { top: 50, left: 50 }, selfCentered: true,
        title: 'Analyze Season',
        isResizable: false,
        width: 1000, height: 700
    };

    public analyzeResponse:string;

    //
    // Declare Datagrid properties
    //
    public model = TasteProfilesEx; // the record datamodel to use

    // the columns for the datagrid
    public columnDefs = [
        { title: 'Profile ID', field: 'ProfileID', width: 30 },
        { title: 'User ID', field: 'UserID', width: 30 },
        { title: 'User Name', field: 'UserName', width: 80 },
        { title: 'Profile Name', field: 'Name', width: 80 },
        { title: 'Origin', field: 'Origin', width: 80 },
        { title: 'Description', field: 'Description', width: 120 }
    ];

    public set modelContentData(v:ICustomModal) {
        this.inputData = v;
    }

    public inputData: any;

    @ViewChild(DataGrid, {static: false}) private theGrid: DataGrid;

    constructor(private fourD:FourDInterface) { }

    ngAfterViewInit() {
        this.theGrid.loadData({query:['All']});
    }

    public checkSeason() {
        this.analyzeResponse = '';
        if (this.theGrid && this.theGrid.currentRecord) {
            let body = {
                seasonID: (<any>this.inputData).seasonID,
                profileID: (<TasteProfilesEx>this.theGrid.currentRecord).ProfileID
            };
            this.fourD.call4DRESTMethod('MGRErestCheckFeature', body, {responseType:'text'})
                .subscribe(result => {
                    this.analyzeResponse = result;
                }, error => { console.log(error); alert('Error:' + error); });
        }
    }

}
