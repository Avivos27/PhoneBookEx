import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-input-search",
  templateUrl: "./input-search.component.html",
  styleUrls: ["./input-search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent implements OnInit {
  searchControl = new FormControl();
  @Output()
  searchRequest: EventEmitter<string> = new EventEmitter<string>();
  lastQuery: string = "";

  constructor() {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(text => {
      if (this.lastQuery !== text) {
        this.lastQuery = text;
        this.searchRequest.emit(text);
      }
    });
  }
}
