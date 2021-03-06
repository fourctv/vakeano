import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';

import { FourDCollection, FourDInterface } from 'js44d';

import { DataGrid } from 'js44d';
import { ViewerContentEx } from '../moviegenome/customDataModels/ViewerContentEx';
import { TasteProfilesEx } from '../moviegenome/customDataModels/TasteProfilesEx';
import { ViewerContent } from '../moviegenome/DB/ViewerContent';
import { Features } from '../moviegenome/DB/Features';

@Component({
    selector: 'profilerecommendations-info',
    template: `
    <div style="height:380px;overflow-y:auto;display:block;">
            <datagrid  [height]="400"
                [columns]="columnDefs"
                [useLazyLoading]="false"
                [pageableRefresh]="false"
                [pageableSizes]="false"
                [pageableMessage]="recordCount"
            ></datagrid>

        </div>
     `

})


export class ProfileRecommendationsInfo implements AfterViewInit {
    @Input() public record: TasteProfilesEx;

    @Input() controlList: FourDCollection = new FourDCollection();

    public get recordCount(): string { return (this.controlList.models) ? this.controlList.models.length.toString() + ' items' : '0'; }

    public columnDefs = [
    //    { title: 'ID', width: 50, field: 'FeatureID' },
        { title: 'Title', width: 250, field: 'IMDBTitle' },
        { title: 'e-Score', width: 80, field: 'EScore' },
        { title: 'Feedback Content', width: 350, field: 'Feedback_Content', attributes: { style: 'vertical-align: top; font-size: 9px' } },
        { title: 'Feedback Style', width: 350, field: 'Feedback_Style', attributes: { style: 'vertical-align: top; font-size: 9px' } },
        { title: 'Feedback Theme', width: 350, field: 'Feedback_Theme', attributes: { style: 'vertical-align: top; font-size: 9px' } },
        { title: 'Feedback Narrative', width: 350, field: 'Feedback_Narrative', attributes: { style: 'vertical-align: top; font-size: 9px' } },
        { title: 'Feedback Execution', width: 350, field: 'Feedback_Execution', attributes: { style: 'vertical-align: top; font-size: 9px' } }

    ];

    @ViewChild(DataGrid, {static: false}) private theGrid: DataGrid;

    ngAfterViewInit() {
        if (this.record && this.theGrid) {
            this.controlList.model = ViewerContentEx;
            this.refreshGrid();
        }
    }

    currentFeatureScore(feature: any): string {
        let score = (((feature.MGPEI + feature.MGPAI) * feature.MGCCI) / 2 + feature.MGEQI + feature.MGNQI).toFixed(2);
        return score;

    }

    refreshGrid() {
            let query = {custom:'MGSEFilterViewerContent', tableName:'ViewerContent', filter:'recommend'};
            if (this.record.ProfileID && this.record.ProfileID > 0) {
                query['profileID']=this.record.ProfileID;
                query['userID']=this.record.UserID;
            } else {
                query['userID']=FourDInterface.currentUserID;
            }

            //this.log.debug('query:'+queryType);
            this.controlList.getRecords(query,null,0, -1, '', '<' + ViewerContent.kMGPVR)
                .then(recs => {
                    //this.log.debug('length:'+recs.length);
                    if (recs.length > 0) {
                        let data = [];
                        this.controlList.models.forEach(element => {
                            let item = element.extractModelData();
                            item['EScore'] = this.currentFeatureScore(element);
                            data.push(item);
                        });

                        this.theGrid.setDataSource(data);
                    }
                });

    }
}
