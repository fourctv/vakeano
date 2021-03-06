import { FourDModel } from 'js44d';

export class Theater extends FourDModel {

	public static kTABLE:string = 'Theater';
	public static kRecordID:string = 'Theater.RecordID';
	public static kCreationDate:string = 'Theater.CreationDate';
	public static kLastUpdateDate:string = 'Theater.LastUpdateDate';
	public static kTimeStamp:string = 'Theater.TimeStamp';
	public static kLocationID:string = 'Theater.LocationID';
	public static kTheaterName:string = 'Theater.TheaterName';
	public static kDescription:string = 'Theater.Description';
	public static kAddress:string = 'Theater.Address';
	public static kPhones:string = 'Theater.Phones';
	public static kWebSite:string = 'Theater.WebSite';
	public static kScheduleURL:string = 'Theater.ScheduleURL';
	public static kNotes:string = 'Theater.Notes';

	tableName:string = 'Theater';
	tableNumber:number = 10;
	primaryKey_:string = 'RecordID';
	fields:Array<any> = [
		{name:'RecordID', longname:'Theater.RecordID', type:'number', required:true, readonly:true, indexed:true, unique:true},
		{name:'CreationDate', longname:'Theater.CreationDate', type:'Date'},
		{name:'LastUpdateDate', longname:'Theater.LastUpdateDate', type:'Date'},
		{name:'TimeStamp', longname:'Theater.TimeStamp', type:'string', length:255},
		{name:'LocationID', longname:'Theater.LocationID', type:'number', indexed:true, relatesTo:'Location.RecordID'},
		{name:'TheaterName', longname:'Theater.TheaterName', type:'string', length:255, indexed:true},
		{name:'Description', longname:'Theater.Description', type:'string'},
		{name:'Address', longname:'Theater.Address', type:'string'},
		{name:'Phones', longname:'Theater.Phones', type:'string', length:255},
		{name:'WebSite', longname:'Theater.WebSite', type:'string'},
		{name:'ScheduleURL', longname:'Theater.ScheduleURL', type:'string'},
		{name:'Notes', longname:'Theater.Notes', type:'string'}
	];

	get RecordID():number {return this.get('RecordID');}
	set RecordID(v:number) {this.set('RecordID',v);}

	get CreationDate():Date {return this.get('CreationDate');}
	set CreationDate(v:Date) {this.set('CreationDate',v);}

	get LastUpdateDate():Date {return this.get('LastUpdateDate');}
	set LastUpdateDate(v:Date) {this.set('LastUpdateDate',v);}

	get TimeStamp():string {return this.get('TimeStamp');}
	set TimeStamp(v:string) {this.set('TimeStamp',v);}

	get LocationID():number {return this.get('LocationID');}
	set LocationID(v:number) {this.set('LocationID',v);}

	get TheaterName():string {return this.get('TheaterName');}
	set TheaterName(v:string) {this.set('TheaterName',v);}

	get Description():string {return this.get('Description');}
	set Description(v:string) {this.set('Description',v);}

	get Address():string {return this.get('Address');}
	set Address(v:string) {this.set('Address',v);}

	get Phones():string {return this.get('Phones');}
	set Phones(v:string) {this.set('Phones',v);}

	get WebSite():string {return this.get('WebSite');}
	set WebSite(v:string) {this.set('WebSite',v);}

	get ScheduleURL():string {return this.get('ScheduleURL');}
	set ScheduleURL(v:string) {this.set('ScheduleURL',v);}

	get Notes():string {return this.get('Notes');}
	set Notes(v:string) {this.set('Notes',v);}


}
