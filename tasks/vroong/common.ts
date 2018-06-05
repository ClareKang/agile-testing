import * as request from "superagent";

const hostname = "http://localhost:8080";

export default class Api {
  public login(account: any) {
    return request
      .post(`${hostname}/login`)
      .send(account)
      .then((res: any) => res.body);
  }
}
