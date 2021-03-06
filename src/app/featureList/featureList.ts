import { Component, ViewChild } from '@angular/core';

import { FourDInterface } from 'js44d';
import { DataGrid } from 'js44d';
import { Modal, ModalDialogInstance } from 'js44d';

import { FeatureInfoDialog } from './featureInfoDialog';
import { AnalyzeFeatureComponent } from './analyzeFeature';

import {FeaturesEx, Features} from '../moviegenome/index';

@Component({
    selector: 'feature-list',
    template: `
    <web-application>
        <record-list [editWindow]="editWindow" [dialogInstance]="dialog">
            <query-band [enableSort]="true" [enableQBE]="true" [enableButtonBar]="true" [enableAddRecord]="true" [enableDeleteRecord]="true">
                <queryband class="form-group">
                    <features-queryband #customQueryBand class="form-group"></features-queryband>
                </queryband>
                <custombuttonbar>
                    <button class="regularButton" style="width:120px;" (click)="addNewReleases()">Add New Releases</button>
                    <button class="regularButton" style="width:120px;" (click)="checkFeature()">Analyse</button>
                </custombuttonbar>
            </query-band>
           <datagrid
                [model]="model"
                [columns]="columnDefs"
                [useLazyLoading]="true"
                [optimizeGridLoading]="true"
                [pageSize]="50"
                [excelFilename]="'FeatureList.xlsx'"
                >
            </datagrid>
        </record-list>
    </web-application>
`,
    providers: [Modal]
})

export class FeatureListApp {
    /**
     * get the associated Datagrid object instance
     */
    @ViewChild(DataGrid, {static: false}) theGrid: DataGrid;

    //
    // our Modal Dialog instance, populated by the Modal service, when running inside
    //
    public dialog:ModalDialogInstance = null;

    //
    // Declare Program edit Window
    //
    public editWindow = FeatureInfoDialog;

    //
    // Declare Datagrid properties
    //
    public model = FeaturesEx; // the record datamodel to use

    // the columns for the datagrid
    public columnDefs = [
        { title: 'Feature ID', field: 'FeatureId'},
        { title: 'JW ID', field: 'JustWatchID'},
        { title: 'IMDB ID', field: 'IMDBID'},
        { title: 'IMDB Title', field: 'IMDBTitle' },
        { title: 'Prod. Title', field: 'ProductionTitle' },
        { title: 'Series', field: 'SeriesName'},
        { title: 'Episode', field: 'EpisodeNumber' },
        { title: 'Prod. Company', field: 'ProdCompany'},
        { title: 'Prod. Year', field: 'ProdYear'},
        { title: 'Rating', field: 'CensorshipRating', filterable: { multi: true } },
        { title: 'Origin', field: 'CountryOfOrigin', filterable: { multi: true } },
        { title: 'StarName', field: 'StarName' }
    ];

     //
    // We need access to a Modal dialog component, to open an associated Record Edit Form
    //
    constructor(private fourD:FourDInterface, private modal: Modal) {
    }

    public checkFeature() {
        if (this.theGrid && this.theGrid.currentRecord) {
            let theRec:FeaturesEx = <any>this.theGrid.currentRecord;
            this.modal.openDialog(AnalyzeFeatureComponent, {featureID:theRec.FeatureId, featureName: theRec.IMDBTitle}); // open user recomendations dialog
        }
    }

    public addNewReleases() {
        this.fourD.call4DRESTMethod("MGRErestGetNewFeatures",{}, {responseType:'text'})
        .subscribe(r => {
            this.theGrid.loadData({query: [Features.kCreationDate+';=;'+this.fourD.dateTo4DFormat(new Date())]});
        })
    }
}
