interface HttpHandler {
    get(url: string): any
  }
  
  class HttpClientHandler implements HttpHandler {
    constructor(private http: any) {}
  
    get(url: string) {
      return this.http.get(url);
    }
}

class ApiService {
    constructor(private http: HttpHandler) {}
  
    getData() {
      return this.http.get('/api/data');
    }
  }