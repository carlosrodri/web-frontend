import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointsService {

  ARTICLES_URL = 'https://carlosrodr.herokuapp.com/web/articles/'
  VISITS_URL = 'https://carlosrodr.herokuapp.com/web/visits/'
  COMMENTS_URL = 'https://carlosrodr.herokuapp.com/web/comments/'
  SUBSCRIBERS_URL = 'https://carlosrodr.herokuapp.com/web/suscribers/'

  constructor() {
    this.proofEndPoints()
  }

  productionEnpoints() {
    this.ARTICLES_URL = 'https://carlosrodr.herokuapp.com/web/articles/'
    this.VISITS_URL = 'https://carlosrodr.herokuapp.com/web/visits/'
    this.COMMENTS_URL = 'https://carlosrodr.herokuapp.com/web/comments/'
    this.SUBSCRIBERS_URL = 'https://carlosrodr.herokuapp.com/web/suscribers/'
  }

  proofEndPoints() {
    this.ARTICLES_URL = 'http://localhost:3000/web/articles/'
    this.VISITS_URL = 'http://localhost:3000/web/visits/'
    this.COMMENTS_URL = 'http://localhost:3000/web/comments/'
    this.SUBSCRIBERS_URL = 'http://localhost:3000/web/suscribers/'
  }
}
