import { FourDModel } from 'js44d';

export class Location extends FourDModel {

	public static kTABLE:string = 'Location';
	public static kRecordID:string = 'Location.RecordID';
	public static kCreationDate:string = 'Location.CreationDate';
	public static kLastUpdateDate:string = 'Location.LastUpdateDate';
	public static kTimeStamp:string = 'Location.TimeStamp';
	public static kLocationName:string = 'Location.LocationName';
	public static kCity:string = 'Location.City';
	public static kCountry:string = 'Location.Country';
	public static kGeoLocation:string = 'Location.GeoLocation';
	public static kLocale:string = 'Location.Locale';

	tableName:string = 'Location';
	tableNumber:number = 2;
	primaryKey_:string = 'RecordID';
	fields:Array<any> = [
		{name:'RecordID', longname:'Location.RecordID', type:'number', required:true, readonly:true, indexed:true, unique:true},
		{name:'CreationDate', longname:'Location.CreationDate', type:'Date'},
		{name:'LastUpdateDate', longname:'Location.LastUpdateDate', type:'Date'},
		{name:'TimeStamp', longname:'Location.TimeStamp', type:'string', length:255},
		{name:'LocationName', longname:'Location.LocationName', type:'string', length:255, indexed:true},
		{name:'City', longname:'Location.City', type:'string', length:255},
		{name:'Country', longname:'Location.Country', type:'string', length:255},
		{name:'GeoLocation', longname:'Location.GeoLocation', type:'string', length:255},
		{name:'Locale', longname:'Location.Locale', type:'string', length:5}
	];

	get RecordID():number {return this.get('RecordID');}
	set RecordID(v:number) {this.set('RecordID',v);}

	get CreationDate():Date {return this.get('CreationDate');}
	set CreationDate(v:Date) {this.set('CreationDate',v);}

	get LastUpdateDate():Date {return this.get('LastUpdateDate');}
	set LastUpdateDate(v:Date) {this.set('LastUpdateDate',v);}

	get TimeStamp():string {return this.get('TimeStamp');}
	set TimeStamp(v:string) {this.set('TimeStamp',v);}

	get LocationName():string {return this.get('LocationName');}
	set LocationName(v:string) {this.set('LocationName',v);}

	get City():string {return this.get('City');}
	set City(v:string) {this.set('City',v);}

	get Country():string {return this.get('Country');}
	set Country(v:string) {this.set('Country',v);}

	get GeoLocation():string {return this.get('GeoLocation');}
	set GeoLocation(v:string) {this.set('GeoLocation',v);}

	get Locale():string {return this.get('Locale');}
	set Locale(v:string) {this.set('Locale',v);}


}
