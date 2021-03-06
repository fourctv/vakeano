import { FourDModel } from 'js44d';

export class FeatureCast extends FourDModel {

	public static kTABLE:string = 'FeatureCast';
	public static kRecordID:string = 'FeatureCast.RecordID';
	public static kFeatureID:string = 'FeatureCast.FeatureID';
	public static kBillingOrder:string = 'FeatureCast.BillingOrder';
	public static kIndexedFullName:string = 'FeatureCast.IndexedFullName';
	public static kPeopleID:string = 'FeatureCast.PeopleID';
	public static kNormalFullName:string = 'FeatureCast.NormalFullName';
	public static kPersonRole:string = 'FeatureCast.PersonRole';
	public static kCreationDate:string = 'FeatureCast.CreationDate';
	public static kLastUpdateDate:string = 'FeatureCast.LastUpdateDate';
	public static kTimeStamp:string = 'FeatureCast.TimeStamp';
	public static kPlayedCharacter:string = 'FeatureCast.PlayedCharacter';

	tableName:string = 'FeatureCast';
	tableNumber:number = 23;
	primaryKey_:string = 'RecordID';
	fields:Array<any> = [
		{name:'RecordID', longname:'FeatureCast.RecordID', type:'number', required:true, readonly:true, indexed:true, unique:true},
		{name:'FeatureID', longname:'FeatureCast.FeatureID', type:'number', required:true, indexed:true, relatesTo:'Features.FeatureId'},
		{name:'BillingOrder', longname:'FeatureCast.BillingOrder', type:'number'},
		{name:'IndexedFullName', longname:'FeatureCast.IndexedFullName', type:'string', length:100, indexed:true},
		{name:'PeopleID', longname:'FeatureCast.PeopleID', type:'number', required:true, indexed:true, relatesTo:'People.PeopleID'},
		{name:'NormalFullName', longname:'FeatureCast.NormalFullName', type:'string', length:100, indexed:true},
		{name:'PersonRole', longname:'FeatureCast.PersonRole', type:'string', length:1},
		{name:'CreationDate', longname:'FeatureCast.CreationDate', type:'Date'},
		{name:'LastUpdateDate', longname:'FeatureCast.LastUpdateDate', type:'Date'},
		{name:'TimeStamp', longname:'FeatureCast.TimeStamp', type:'string'},
		{name:'PlayedCharacter', longname:'FeatureCast.PlayedCharacter', type:'string', length:100, indexed:true}
	];

	get RecordID():number {return this.get('RecordID');}
	set RecordID(v:number) {this.set('RecordID',v);}

	get FeatureID():number {return this.get('FeatureID');}
	set FeatureID(v:number) {this.set('FeatureID',v);}

	get BillingOrder():number {return this.get('BillingOrder');}
	set BillingOrder(v:number) {this.set('BillingOrder',v);}

	get IndexedFullName():string {return this.get('IndexedFullName');}
	set IndexedFullName(v:string) {this.set('IndexedFullName',v);}

	get PeopleID():number {return this.get('PeopleID');}
	set PeopleID(v:number) {this.set('PeopleID',v);}

	get NormalFullName():string {return this.get('NormalFullName');}
	set NormalFullName(v:string) {this.set('NormalFullName',v);}

	get PersonRole():string {return this.get('PersonRole');}
	set PersonRole(v:string) {this.set('PersonRole',v);}

	get CreationDate():Date {return this.get('CreationDate');}
	set CreationDate(v:Date) {this.set('CreationDate',v);}

	get LastUpdateDate():Date {return this.get('LastUpdateDate');}
	set LastUpdateDate(v:Date) {this.set('LastUpdateDate',v);}

	get TimeStamp():string {return this.get('TimeStamp');}
	set TimeStamp(v:string) {this.set('TimeStamp',v);}

	get PlayedCharacter():string {return this.get('PlayedCharacter');}
	set PlayedCharacter(v:string) {this.set('PlayedCharacter',v);}


}
