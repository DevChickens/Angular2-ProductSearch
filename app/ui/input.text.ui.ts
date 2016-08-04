import { Component, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'inputText',
template:
    //`<input type="text" [ngModel]="search" placeholder="search..." (ngModelChange)="onSearchBoxChange($event)"/><br />`
    `<input type="text" placeholder="search..." (input)="onSearchBoxChange($event)"/><br />`
    ,
outputs:["getSearchValue"]
})
export class InputText {
    search:string;
    //@output()
    getSearchValue = new EventEmitter();

    onSearchBoxChange(e: any){
        this.getSearchValue.emit(e.target.value);
    }
}
