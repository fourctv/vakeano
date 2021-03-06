import { FourDModel } from 'js44d';

export class TasteProfiles extends FourDModel {

	public static kTABLE:string = 'TasteProfiles';
	public static kProfileID:string = 'TasteProfiles.ProfileID';
	public static kUserID:string = 'TasteProfiles.UserID';
	public static kStyleVector:string = 'TasteProfiles.StyleVector';
	public static kDescription:string = 'TasteProfiles.Description';
	public static kOrigin:string = 'TasteProfiles.Origin';
	public static kGenomeEnabled:string = 'TasteProfiles.GenomeEnabled';
	public static kPriority:string = 'TasteProfiles.Priority';
	public static kCreationDate:string = 'TasteProfiles.CreationDate';
	public static kLastUpdateDate:string = 'TasteProfiles.LastUpdateDate';
	public static kTimeStamp:string = 'TasteProfiles.TimeStamp';
	public static kUsageFrequency:string = 'TasteProfiles.UsageFrequency';
	public static kName:string = 'TasteProfiles.Name';
	public static kThemeVector:string = 'TasteProfiles.ThemeVector';
	public static kNarrativeVector:string = 'TasteProfiles.NarrativeVector';
	public static kContentVector:string = 'TasteProfiles.ContentVector';
	public static kExecutionVector:string = 'TasteProfiles.ExecutionVector';

	tableName:string = 'TasteProfiles';
	tableNumber:number = 28;
	primaryKey_:string = 'ProfileID';
	fields:Array<any> = [
		{name:'ProfileID', longname:'TasteProfiles.ProfileID', type:'number', required:true, readonly:true, indexed:true, unique:true},
		{name:'UserID', longname:'TasteProfiles.UserID', type:'number', required:true, indexed:true, relatesTo:'_ShellUsers.ID'},
		{name:'StyleVector', longname:'TasteProfiles.StyleVector', type:'string', length:255, indexed:true},
		{name:'Description', longname:'TasteProfiles.Description', type:'string', length:250},
		{name:'Origin', longname:'TasteProfiles.Origin', type:'string', required:true, length:20},
		{name:'GenomeEnabled', longname:'TasteProfiles.GenomeEnabled', type:'boolean'},
		{name:'Priority', longname:'TasteProfiles.Priority', type:'number'},
		{name:'CreationDate', longname:'TasteProfiles.CreationDate', type:'Date'},
		{name:'LastUpdateDate', longname:'TasteProfiles.LastUpdateDate', type:'Date'},
		{name:'TimeStamp', longname:'TasteProfiles.TimeStamp', type:'string'},
		{name:'UsageFrequency', longname:'TasteProfiles.UsageFrequency', type:'string', length:100},
		{name:'Name', longname:'TasteProfiles.Name', type:'string', length:50},
		{name:'ThemeVector', longname:'TasteProfiles.ThemeVector', type:'string', length:255, indexed:true},
		{name:'NarrativeVector', longname:'TasteProfiles.NarrativeVector', type:'string', length:255, indexed:true},
		{name:'ContentVector', longname:'TasteProfiles.ContentVector', type:'string', length:255, indexed:true},
		{name:'ExecutionVector', longname:'TasteProfiles.ExecutionVector', type:'string', length:255, indexed:true}
	];

	get ProfileID():number {return this.get('ProfileID');}
	set ProfileID(v:number) {this.set('ProfileID',v);}

	get UserID():number {return this.get('UserID');}
	set UserID(v:number) {this.set('UserID',v);}

	get StyleVector():string {return this.get('StyleVector');}
	set StyleVector(v:string) {this.set('StyleVector',v);}

	get Description():string {return this.get('Description');}
	set Description(v:string) {this.set('Description',v);}

	get Origin():string {return this.get('Origin');}
	set Origin(v:string) {this.set('Origin',v);}

	get GenomeEnabled():boolean {return this.get('GenomeEnabled');}
	set GenomeEnabled(v:boolean) {this.set('GenomeEnabled',v);}

	get Priority():number {return this.get('Priority');}
	set Priority(v:number) {this.set('Priority',v);}

	get CreationDate():Date {return this.get('CreationDate');}
	set CreationDate(v:Date) {this.set('CreationDate',v);}

	get LastUpdateDate():Date {return this.get('LastUpdateDate');}
	set LastUpdateDate(v:Date) {this.set('LastUpdateDate',v);}

	get TimeStamp():string {return this.get('TimeStamp');}
	set TimeStamp(v:string) {this.set('TimeStamp',v);}

	get UsageFrequency():string {return this.get('UsageFrequency');}
	set UsageFrequency(v:string) {this.set('UsageFrequency',v);}

	get Name():string {return this.get('Name');}
	set Name(v:string) {this.set('Name',v);}

	get ThemeVector():string {return this.get('ThemeVector');}
	set ThemeVector(v:string) {this.set('ThemeVector',v);}

	get NarrativeVector():string {return this.get('NarrativeVector');}
	set NarrativeVector(v:string) {this.set('NarrativeVector',v);}

	get ContentVector():string {return this.get('ContentVector');}
	set ContentVector(v:string) {this.set('ContentVector',v);}

	get ExecutionVector():string {return this.get('ExecutionVector');}
	set ExecutionVector(v:string) {this.set('ExecutionVector',v);}


}
