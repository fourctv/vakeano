import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

import { openUrl } from "tns-core-modules/utils/utils";
import { SwipeGestureEventData, SwipeDirection } from "tns-core-modules/ui/gestures";

import { FourDInterface } from 'js44d';
import { FourDCollection } from 'js44d';

import { Features } from '../moviegenome/index';
import { JustWatchItem } from '../moviegenome/index';

@Component({
    moduleId: module.id,
    selector: 'profilebuilding',
   templateUrl: 'profileBuildingPage.html' ,
    changeDetection: ChangeDetectionStrategy.Default
})

export class ProfileBuildingPage implements OnInit {
           
    @Input() currentUser:number = FourDInterface.currentUserID;
     
    @Input() controlList:FourDCollection = new FourDCollection();
    @Input() currentFeature:Features = new Features();
    @Input() frontPageisUp = true;
    @Input() isLoading = false;
    @Input() rateCount:string = 'none';

    // fontawesome icons
    @Input() thumbsUp:string = "\uf164";
    @Input() arrow:string = '\uf137';
    @Input() loveIt:string = '\uf004';
    @Input() thumbsDown:string = '\uf165';

    private currentFeatureIndex:number = 0;
    private ratedFeatures:number = 0;

    constructor(private fourD:FourDInterface, private justWatch:JustWatchItem, private router:RouterExtensions) {
       
    }

    /**
     * Starting up... load all Recommendations for the current User or Profile
     */
    ngOnInit() {
        this.isLoading = true;
        this.controlList.model = Features;
        this.ratingList();
    }


    /**
     * Rate a feature, called from the stars under a movie poster
     */
    rateThis(stars:number) {
        let body = {type: 'Feature', 
                    contentID: this.currentFeature.FeatureId, 
                    rating: stars, 
                    viewer: this.currentUser};
        this.fourD.call4DRESTMethod('MGLErestUpdateViewerProfile', body)
        .subscribe(response => {
            if (response.result === 'OK') {
                this.nextFeature();
            } else alert('Error:'+response.message);
        }, error => {console.log(error);alert('Error:'+error);});
           
        this.ratedFeatures++;
        this.rateCount = (this.ratedFeatures > 0)?this.ratedFeatures.toString():'none';
    }

 
    ratingList() {
        this.controlList.getRecords(<any>{custom:"MGSEFilterViewerContent", tableName:"Features", filter:"control", userID:this.currentUser},
            [Features.kIMDBID, Features.kIMDBTitle,Features.kPosterURL, Features.kFeatureId, Features.kJustWatchID,
            Features.kProdYear, Features.kFeatureCast, Features.kDirectorsList])
            .then(recs => {
                //this.log.debug('length:'+recs.length);
                if (recs.length > 0) {
                    this.currentFeature = <Features>recs[0];
                    this.isLoading = false;
                 }
             });
    }



    public gotoJustWatch() {
        //openUrl("http://www.imdb.com/title/"+this.currentFeature.IMDBID);
        if (this.currentFeature.JustWatchID && this.currentFeature.JustWatchID != '') {
            this.justWatch.getJustWatchItem(this.currentFeature.JustWatchID)
            .then (jw => {
                if (this.justWatch.movieURL != '') openUrl(this.justWatch.movieURL);
            });
        }
    }

    //
    // handle user swipe on a row
    //
    onSwipe(event:SwipeGestureEventData) {
        switch (event.direction) {
            case SwipeDirection.left:
                this.nextFeature();
                break;
        
            case SwipeDirection.right:
                this.rateThis(5);
                break;

            case SwipeDirection.down:
                this.rateThis(1);
                break;

            case SwipeDirection.up:
                this.rateThis(4);
                break;

       }
     }

    nextFeature() {
        if (++this.currentFeatureIndex < this.controlList.models.length) {
            this.currentFeature = this.controlList.models[this.currentFeatureIndex];
        } else {
            // done with the Rating list, now show our recommendations
            this.router.navigate(['/userRecommendationPage'], { skipLocationChange: true, clearHistory:true, transition:{name:'fade' } });
        }
     }

   fullResPosterURL(): string {
        let poster:string = this.currentFeature.PosterURL;
        if (poster) {
            let marker = poster.indexOf("._");
            return (marker>0)?poster.substr(0,marker)+ '._V1_UX512_.jpg':poster;
        } else return poster;
    }

}
