import { Component, OnInit } from "@angular/core";
import { Record } from "src/app/models/record.model";
import { CommentsService } from "src/app/services/comments.service";

@Component({
  selector: "app-phonebook",
  templateUrl: "./phonebook.component.html",
  styleUrls: ["./phonebook.component.scss"]
})
export class PhonebookComponent implements OnInit {
  records: Record[] = null;
  loading: boolean = false;

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.sendQuery("");
  }

  sendQuery(text) {
    this.loading = true;
    this.records = null;
    this.commentsService.queryByPostId(text).subscribe(
      updatedRecords => {
        this.records = updatedRecords;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.records = [];
        this.loading = false;
      }
    );
  }
}
