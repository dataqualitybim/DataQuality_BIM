import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, Response } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomePageComponent } from './homepage/homepage.component';
import { CheckifcComponent } from './checkifc/checkifc.component';
import { CheckmaterialComponent} from './checkmaterial/checkmaterial.component';
import { CheckcostsComponent } from './checkcosts/checkcosts.component';
import { ifcobjecttypeComponent } from './ifcobjectType.component';
import { dqifcCheckComponent } from './ifcdataquality/dqifccheck.component';
import { dqobjecttypeComponent } from './dqobjectType.component';
import { IfccompleteComponent } from './ifcdataquality/ifccomplete.component';
import { IfcincompleteComponent } from './ifcdataquality/ifcincomplete.component';
import { IfcvalidComponent } from './ifcdataquality/ifcvalid.component';
import { IfcinvalidComponent } from './ifcdataquality/Ifcinvalid.Component';
import { IfcappropriateComponent } from './ifcdataquality/ifcappropriate.component';
import { IfcinappropriateComponent } from './ifcdataquality/ifcinappropriate.component';
import { dqcheckmaterialComponent } from './materialdataquality/dqcheckmaterial.component';
import { MaterialcompleteComponent } from './materialdataquality/materialcomplete.component';
import { MaterialIncompleteComponent } from './materialdataquality/MaterialIncomplete.component';
import { MaterialvalidComponent } from './materialdataquality/materialvalid.component';
import { MaterialInvalidComponent } from './materialdataquality/materialInvalid.component';
import { MaterialappropriateComponent} from './materialdataquality/materialappropriate.component';
import { MaterialInappropriateComponent } from './materialdataquality/materialinappropriate.component';
import { dqcheckcostComponent } from './costsdataquality/dqcheckcost.component';
import { costscompleteComponent } from './costsdataquality/costscomplete.component';
import { costsIncompleteComponent } from './costsdataquality/costsincomplete.component';
import { costsvalidComponent } from './costsdataquality/costsvalid.component';
import { costsInvalidComponent } from './costsdataquality/costsinvalid.component';
import { costsappropriateComponent} from './costsdataquality/costsappropriate.component';
import { costsInappropriateComponent } from './costsdataquality/costsinappropriate.component';


@NgModule({
    imports: [BrowserModule, routing , FormsModule, HttpModule,],
    declarations: [AppComponent, HomePageComponent, CheckifcComponent, CheckmaterialComponent, CheckcostsComponent, ifcobjecttypeComponent,
        dqifcCheckComponent, dqobjecttypeComponent, IfccompleteComponent, IfcincompleteComponent, IfcvalidComponent, IfcinvalidComponent, IfcappropriateComponent,
        IfcinappropriateComponent, dqcheckmaterialComponent, MaterialcompleteComponent, MaterialIncompleteComponent, MaterialvalidComponent,
        MaterialInvalidComponent, MaterialappropriateComponent, MaterialInappropriateComponent, dqcheckcostComponent,
        costscompleteComponent, costsIncompleteComponent, costsvalidComponent, costsInvalidComponent, costsappropriateComponent,
        costsInappropriateComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
    
})

export class AppModule { }
 