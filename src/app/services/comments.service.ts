import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Record } from "../models/record.model";

const apiEndPoint = `https://jsonplaceholder.typicode.com/comments`;

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  queryByPostId(postId) {
    let url;
    if (!postId || postId.length === 0) url = apiEndPoint;
    else url = `${apiEndPoint}?postId=${postId}`;

    return this.http.get<Record[]>(url).pipe(
      map(json => {
        if (json !== null && json !== undefined) {
          return json.map(record => {
            return new Record(record);
          });
        } else return [];
      })
    );
  }
}
