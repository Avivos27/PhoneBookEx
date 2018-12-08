import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { Record } from "src/app/models/record.model";

@Component({
  selector: "app-contacts-table",
  templateUrl: "./contacts-table.component.html",
  styleUrls: ["./contacts-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTableComponent implements OnInit, OnChanges {
  @Input()
  records: Record[] = null;
  @Input()
  loading: boolean = false;
  sortUp: boolean = true;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.records) this.sortUp = true;
  }

  sortByPostId() {
    this.sortUp = !this.sortUp;
    this.records = this.records.reverse();
  }
}
