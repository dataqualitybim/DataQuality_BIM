import { Component } from '@angular/core';
import { Material } from './material';
import { BimService } from './bimmaterial.service';

@Component({
    selector: 'dqcheckmaterial',
    templateUrl: './dqcheckmaterial.html',
    providers: [BimService]
})

export class dqcheckmaterialComponent {
    //materialinappropriate: Material[];
}

