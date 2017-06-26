import { Component, AfterContentInit, ViewContainerRef} from '@angular/core';
import { Routes, Router } from '@angular/router';
import { Http } from '@angular/http';

import { Config } from '../common/index';

import { LoginComponent } from '../login/login.component';
import { Modal } from '../js44D/angular2-modal/providers/Modal';
import { FourDInterface } from '../js44D/js44D/JSFourDInterface';

import { BlankPage } from './blankPage';

export const routes: Routes = [
    {path: 'login', component: BlankPage},
    {path: 'featureList', loadChildren:'app/featureList/featureListModule#FeatureListModule'},
    {path: 'userProfileList', loadChildren:'app/userProfileList/userProfileListModule#UserProfileListModule'},
    {path: 'genomeMapList', loadChildren:'app/genomeMapList/genomeMapListModule#GenomeMapListModule'},
    {path: 'userRating', loadChildren:'app/userRating/userRatingModule#UserRatingModule'},
    {path: 'userRecommendations', loadChildren:'app/userRecommendations/userRecommendationsModule#UserRecommendationsModule'},
    {path: '**',  component: BlankPage}
];


@Component({
    moduleId: module.id,
    selector: 'vakeano-app',
    providers: [ Modal, FourDInterface ],
    templateUrl: 'vakeanoApp.component.html',
    styleUrls: ['vakeanoApp.component.css']
})


export class VakeanoAppComponent implements AfterContentInit {
    public menuList = [
        {
            routePath: '/userRating',
            roles: ['Viewer', 'Admin'],
            hideMenu: false,
            title: 'User Rating'
        },
        {
            routePath: '/userRecommendations',
            roles: ['Viewer', 'Admin'],
            hideMenu: false,
            title: 'User Recommendations'
        },
        {
            routePath: '/featureList',
            roles: ['Curator', 'Admin'],
            hideMenu: false,
            title: 'Features'
        },
        {
            routePath: '/userProfileList',
            roles: ['Admin'],
            hideMenu: false,
            title: 'Taste Profiles'
        },
        {
            routePath: '/genomeMapList',
            roles: ['Admin'],
            hideMenu: false,
            title: 'Genome Map'
        }
    ];

    public get currentUser(): string {
        return (FourDInterface.authentication) ? FourDInterface.currentUser : '?';
    }

    constructor (public router:Router, private http:Http, private modal: Modal, private hostViewRef: ViewContainerRef) {
        FourDInterface.http = http;
//        FourDInterface.fourDUrl = 'http://localhost:8080';
        FourDInterface.fourDUrl = 'http://54.191.46.243:8080';
        Modal.hostViewRef = this.hostViewRef;
    }

    ngAfterContentInit() {
             // no predefined user, login...
        if (Config.PLATFORM_TARGET === Config.PLATFORMS.WEB) this.showLoginDialog();
    }
    
    userHasLoggedIn() {
        // load current profile user functions
        if (this.userIsLoggedIn) {
            FourDInterface.runningInsideWorkspace = true; // we are indeed running inside the workspace
 
            // now we need to check user Roles and enable/disable menus accordingly
            if (FourDInterface.authentication.options.isAdmin !== 'true') {
                this.menuList.forEach(element => {
                    element.hideMenu = !this.userHasAccess(element.roles);
                });
                this.router.navigate(['/userRecommendations'], { skipLocationChange: true });
            } else {
                 this.menuList.forEach(element => {
                    element.hideMenu = false;
                });               
            }
       }

    }


    get userIsLoggedIn(): boolean { return FourDInterface.authentication !== undefined && FourDInterface.authentication !== null; }

    doLogin() {
        FourDInterface.authentication = null;
        this.router.navigate(['/login'], { skipLocationChange: true });
        if (Config.PLATFORM_TARGET === Config.PLATFORMS.WEB) this.showLoginDialog();
    }

    showLoginDialog() {
        this.modal.openInside(<any>LoginComponent, this.hostViewRef, null, LoginComponent['dialogConfig'])
            .then((result) => {
                    this.userHasLoggedIn();
            });        
    }

    userHasAccess(roles: Array<string>): boolean {

        let found: boolean = false;
        roles.forEach((role) => {
            if (FourDInterface.authentication.groups.findIndex((value) => { return value === role; }) >= 0) found = true;
        });
        return found;
    }

    openApp(menu) {
       if (FourDInterface.authentication) {
           this.router.navigate([menu.routePath], { skipLocationChange: true });
       }
    }
}