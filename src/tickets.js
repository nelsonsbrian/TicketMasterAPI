
export class Ticket {
    constructor() {
        this.urlbase = "https://app.ticketmaster.com/discovery/v2/";
    }
    getAllEvents() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }

    getEventByZip(zipcode) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${zipcode}&apikey=${process.env.API_KEY}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          };
          request.open("GET", url, true);
          request.send();
        });
      }  
      
      getEventByCity(city) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${process.env.API_KEY}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          };
          request.open("GET", url, true);
          request.send();
        });
      } 
  }