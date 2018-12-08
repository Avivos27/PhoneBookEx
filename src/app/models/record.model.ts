export class Record {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;

  constructor(json = null) {
    if (json != null) {
      this.id = json.id;
      this.postId = json.postId;
      this.name = json.name;
      this.email = json.email;
      this.body = json.body;
    }
  }
}
