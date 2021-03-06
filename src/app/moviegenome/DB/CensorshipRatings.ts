import { FourDModel } from 'js44d';

export class CensorshipRatings extends FourDModel {

	public static kTABLE:string = 'CensorshipRatings';
	public static kRecordId:string = 'CensorshipRatings.RecordId';
	public static kFeatureID:string = 'CensorshipRatings.FeatureID';
	public static kSeasonID:string = 'CensorshipRatings.SeasonID';
	public static kSeriesID:string = 'CensorshipRatings.SeriesID';
	public static kRegion:string = 'CensorshipRatings.Region';
	public static kRating:string = 'CensorshipRatings.Rating';
	public static kContentDescriptors:string = 'CensorshipRatings.ContentDescriptors';
	public static kCreationDate:string = 'CensorshipRatings.CreationDate';
	public static kLastUpdateDate:string = 'CensorshipRatings.LastUpdateDate';
	public static kTimeStamp:string = 'CensorshipRatings.TimeStamp';

	tableName:string = 'CensorshipRatings';
	tableNumber:number = 22;
	primaryKey_:string = 'RecordId';
	fields:Array<any> = [
		{name:'RecordId', longname:'CensorshipRatings.RecordId', type:'number', required:true, readonly:true, indexed:true, unique:true},
		{name:'FeatureID', longname:'CensorshipRatings.FeatureID', type:'number', indexed:true, relatesTo:'Features.FeatureId'},
		{name:'SeasonID', longname:'CensorshipRatings.SeasonID', type:'number', indexed:true, relatesTo:'Seasons.SeasonId'},
		{name:'SeriesID', longname:'CensorshipRatings.SeriesID', type:'number', indexed:true, relatesTo:'Series.SeriesId'},
		{name:'Region', longname:'CensorshipRatings.Region', type:'string', required:true, length:20, indexed:true},
		{name:'Rating', longname:'CensorshipRatings.Rating', type:'string', required:true, length:3},
		{name:'ContentDescriptors', longname:'CensorshipRatings.ContentDescriptors', type:'string', length:100, indexed:true},
		{name:'CreationDate', longname:'CensorshipRatings.CreationDate', type:'Date'},
		{name:'LastUpdateDate', longname:'CensorshipRatings.LastUpdateDate', type:'Date'},
		{name:'TimeStamp', longname:'CensorshipRatings.TimeStamp', type:'string'}
	];

	get RecordId():number {return this.get('RecordId');}
	set RecordId(v:number) {this.set('RecordId',v);}

	get FeatureID():number {return this.get('FeatureID');}
	set FeatureID(v:number) {this.set('FeatureID',v);}

	get SeasonID():number {return this.get('SeasonID');}
	set SeasonID(v:number) {this.set('SeasonID',v);}

	get SeriesID():number {return this.get('SeriesID');}
	set SeriesID(v:number) {this.set('SeriesID',v);}

	get Region():string {return this.get('Region');}
	set Region(v:string) {this.set('Region',v);}

	get Rating():string {return this.get('Rating');}
	set Rating(v:string) {this.set('Rating',v);}

	get ContentDescriptors():string {return this.get('ContentDescriptors');}
	set ContentDescriptors(v:string) {this.set('ContentDescriptors',v);}

	get CreationDate():Date {return this.get('CreationDate');}
	set CreationDate(v:Date) {this.set('CreationDate',v);}

	get LastUpdateDate():Date {return this.get('LastUpdateDate');}
	set LastUpdateDate(v:Date) {this.set('LastUpdateDate',v);}

	get TimeStamp():string {return this.get('TimeStamp');}
	set TimeStamp(v:string) {this.set('TimeStamp',v);}


}
