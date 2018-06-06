import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { CheckifcComponent } from './checkifc/checkifc.component';
import { CheckmaterialComponent } from './checkmaterial/checkmaterial.component';
import { CheckcostsComponent } from './checkcosts/checkcosts.component';
import { IfccompleteComponent } from './ifcdataquality/ifccomplete.component';
import { IfcincompleteComponent } from './ifcdataquality/ifcincomplete.component';
import { IfcvalidComponent } from './ifcdataquality/ifcvalid.component';
import { IfcinvalidComponent } from './ifcdataquality/Ifcinvalid.Component';
import { IfcappropriateComponent } from './ifcdataquality/ifcappropriate.component';
import { IfcinappropriateComponent } from './ifcdataquality/ifcinappropriate.component';
import { MaterialcompleteComponent } from './materialdataquality/materialcomplete.component';
import { MaterialIncompleteComponent } from './materialdataquality/MaterialIncomplete.component';
import { MaterialvalidComponent } from './materialdataquality/materialvalid.component'
import { MaterialInvalidComponent } from './materialdataquality/materialInvalid.component';
import {MaterialappropriateComponent } from './materialdataquality/materialappropriate.component';
import { MaterialInappropriateComponent } from './materialdataquality/materialinappropriate.component';
import { costscompleteComponent } from './costsdataquality/costscomplete.component';
import { costsIncompleteComponent } from './costsdataquality/costsincomplete.component';
import { costsvalidComponent } from './costsdataquality/costsvalid.component';
import { costsInvalidComponent } from './costsdataquality/costsinvalid.component';
import { costsappropriateComponent } from './costsdataquality/costsappropriate.component';
import { costsInappropriateComponent } from './costsdataquality/costsinappropriate.component';

export const routes: Routes = [
    { path: 'homepage', component: HomePageComponent },
    { path: 'checkifc', component: CheckifcComponent },    
    { path: 'checkmaterial', component: CheckmaterialComponent },
    { path: 'checkcosts', component: CheckcostsComponent }, 
    { path: 'checkifc/ifccomplete', component: IfccompleteComponent },
    { path: 'checkifc/ifcincomplete', component: IfcincompleteComponent },
    { path: 'checkifc/ifcvalid', component: IfcvalidComponent },
    { path: 'checkifc/ifcinvalid', component: IfcinvalidComponent },
    { path: 'checkifc/ifcappropriate', component: IfcappropriateComponent },
    { path: 'checkifc/ifcinappropriate', component: IfcinappropriateComponent },
    { path: 'checkmaterial/materialcomplete', component: MaterialcompleteComponent },
    { path: 'checkmaterial/materialincomplete', component: MaterialIncompleteComponent },
    { path: 'checkmaterial/materialvalid', component: MaterialvalidComponent },
    { path: 'checkmaterial/materialinvalid', component: MaterialInvalidComponent },
    { path: 'checkmaterial/materialappropriate', component: MaterialappropriateComponent },
    { path: 'checkmaterial/materialinappropriate', component: MaterialInappropriateComponent },
    { path: 'checkcosts/costscomplete', component: costscompleteComponent }, 
    { path: 'checkcosts/costsincomplete', component: costsIncompleteComponent }, 
    { path: 'checkcosts/costsvalid', component: costsvalidComponent },
    { path: 'checkcosts/costsinvalid', component: costsInvalidComponent }, 
    { path: 'checkcosts/costsappropriate', component: costsappropriateComponent }, 
    { path: 'checkcosts/costsinappropriate', component: costsInappropriateComponent }, 
    { path: '', redirectTo: '/checkifc', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(routes);