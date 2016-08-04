import { Component, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'inputText',
template:
    `<input type="text" [(ngModel)]="search" placeholder="search..." (ngModelChange)="onSearchBoxChange($event)"/><br />`
})
export class InputText {
    search:string;
    @Output() getSearchValue = new EventEmitter();

    onSearchBoxChange(e: any){
        this.getSearchValue.emit(e);
    }
}
