import { Features } from '../DB/Features';
import { Series } from '../DB/Series';
import { Seasons } from '../DB/Seasons';
import { Companies } from '../DB/Companies';
import { ContentProfileEx } from './ContentProfileEx';

export class FeaturesEx extends Features {
    fields: Array<any> = [
        { name: 'ProdCompany', longname: Companies.kShortName, type: 'text', related: true },
        { name: 'SeriesName', longname: Series.kIMDBTitle, type: 'text', related: true },
        { name: 'SeasonName', longname: Seasons.kProductionTitle, type: 'text', related: true },
        { name: 'SeasonNumber', longname: Seasons.kSeasonNumber, type: 'number', related: true },
        { name: 'contentProfileList', subTable: new ContentProfileEx(), joinFK: 'ContentProfile.FeatureID', joinPK: 'Features.FeatureId' }
    ].concat(new Features().fields);

    // related fields
    get ProdCompany(): string { return this.get('ProdCompany'); }
    set ProdCompany(v: string) { this.set('ProdCompany', v); }

    get SeriesName(): string { return this.get('SeriesName'); }
    set SeriesName(v: string) { this.set('SeriesName', v); }

    get SeasonName(): string { return this.get('SeasonName'); }
    set SeasonName(v: string) { this.set('SeasonName', v); }

    get SeasonNumber(): number { return this.get('SeasonNumber'); }
    set SeasonNumber(v: number) { this.set('SeasonNumber', v); }

    // children records
    get contentProfileList(): Array<ContentProfileEx> {
        return this.get('contentProfileList');
    }
    set contentProfileList(v: Array<ContentProfileEx>) { this.set('contentProfileList', v); }

}

