import { TasteProfiles } from '../DB/TasteProfiles';
import { ShellUsers } from '../DB/ShellUsers';
import { ProfileGenes } from '../DB/ProfileGenes';
import { ProfileGenesEx } from './ProfileGenesEx';
import { ViewerContent } from '../DB/ViewerContent';
import { ViewerContentEx } from './ViewerContentEx';

export class TasteProfilesEx extends TasteProfiles {
    fields: Array<any> = [
        { name: 'UserName', longname: ShellUsers.kUserName, type: 'text', related: true },
        { name: 'profileGenesList', subTable: new ProfileGenesEx(), joinFK: ProfileGenes.kProfileID, joinPK: TasteProfiles.kProfileID },
        { name: 'viewerContentList', subTable: new ViewerContentEx(), joinFK: ViewerContent.kProfileID, joinPK: TasteProfiles.kProfileID }
   ].concat(new TasteProfiles().fields);

    // related fields

    get UserName(): string { return this.get('UserName'); }
    set UserName(v: string) { this.set('UserName', v); }

    // children records
    get profileGenesList(): Array<ProfileGenesEx> {
        return this.get('profileGenesList');
    }
    set profileGenesList(v: Array<ProfileGenesEx>) { this.set('profileGenesList', v); }

    get viewerContentList(): Array<ViewerContentEx> {
        return this.get('viewerContentList');
    }
    set viewerContentList(v: Array<ViewerContentEx>) { this.set('viewerContentList', v); }

}

