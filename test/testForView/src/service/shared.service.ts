import {Injectable} from "@angular/core";

@Injectable()
export class SharedService {
  public lists: string[] = [];

  add(list: string) {
    this.lists.push(list)
  }

}
