import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchText: string = '';
  
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    if (this.searchText.trim()) {
      this.searchEvent.emit(this.searchText);
    }
  }

}
