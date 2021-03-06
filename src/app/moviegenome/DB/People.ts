import { FourDModel } from 'js44d';

export class People extends FourDModel {

	public static kTABLE:string = 'People';
	public static kPeopleID:string = 'People.PeopleID';
	public static kCreationDate:string = 'People.CreationDate';
	public static kLastUpdateDate:string = 'People.LastUpdateDate';
	public static kTimeStamp:string = 'People.TimeStamp';
	public static kIMDBID:string = 'People.IMDBID';
	public static kFirstName:string = 'People.FirstName';
	public static kLastName:string = 'People.LastName';
	public static kDOB:string = 'People.DOB';
	public static kDOD:string = 'People.DOD';
	public static kAwards:string = 'People.Awards';
	public static kBiography:string = 'People.Biography';

	tableName:string = 'People';
	tableNumber:number = 26;
	primaryKey_:string = 'PeopleID';
	fields:Array<any> = [
		{name:'PeopleID', longname:'People.PeopleID', type:'number', required:true, readonly:true, indexed:true, unique:true},
		{name:'CreationDate', longname:'People.CreationDate', type:'Date'},
		{name:'LastUpdateDate', longname:'People.LastUpdateDate', type:'Date'},
		{name:'TimeStamp', longname:'People.TimeStamp', type:'string'},
		{name:'IMDBID', longname:'People.IMDBID', type:'string', required:true, length:32, indexed:true},
		{name:'FirstName', longname:'People.FirstName', type:'string', length:255, indexed:true},
		{name:'LastName', longname:'People.LastName', type:'string', length:255, indexed:true},
		{name:'DOB', longname:'People.DOB', type:'Date', indexed:true},
		{name:'DOD', longname:'People.DOD', type:'Date'},
		{name:'Awards', longname:'People.Awards', type:'string', length:255, indexed:true},
		{name:'Biography', longname:'People.Biography', type:'string', length:255}
	];

	get PeopleID():number {return this.get('PeopleID');}
	set PeopleID(v:number) {this.set('PeopleID',v);}

	get CreationDate():Date {return this.get('CreationDate');}
	set CreationDate(v:Date) {this.set('CreationDate',v);}

	get LastUpdateDate():Date {return this.get('LastUpdateDate');}
	set LastUpdateDate(v:Date) {this.set('LastUpdateDate',v);}

	get TimeStamp():string {return this.get('TimeStamp');}
	set TimeStamp(v:string) {this.set('TimeStamp',v);}

	get IMDBID():string {return this.get('IMDBID');}
	set IMDBID(v:string) {this.set('IMDBID',v);}

	get FirstName():string {return this.get('FirstName');}
	set FirstName(v:string) {this.set('FirstName',v);}

	get LastName():string {return this.get('LastName');}
	set LastName(v:string) {this.set('LastName',v);}

	get DOB():Date {return this.get('DOB');}
	set DOB(v:Date) {this.set('DOB',v);}

	get DOD():Date {return this.get('DOD');}
	set DOD(v:Date) {this.set('DOD',v);}

	get Awards():string {return this.get('Awards');}
	set Awards(v:string) {this.set('Awards',v);}

	get Biography():string {return this.get('Biography');}
	set Biography(v:string) {this.set('Biography',v);}


}
