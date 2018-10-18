import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Ticket } from './tickets';

$(document).ready(function () {
    

    $('#zipcodeForm').submit(function(event) {
        event.preventDefault();
        let searchCode = $('#zipcode').val();
        let allEvents = new Ticket();
        let promise = allEvents.getEventByZip(searchCode);
    
        promise.then(function (response) {
            let body = JSON.parse(response);
            console.log(body);
            
            $('.eventList').text(`Events in ${searchCode}:`);
            for (let i = 0; i < body._embedded.events.length; i++) {
                $('.eventList').append(`<br>${body._embedded.events[i].name}`);
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    
        });
    });


    let allEvents = new Ticket();
    let promise = allEvents.getAllEvents();

    promise.then(function (response) {
        let body = JSON.parse(response);
        console.log(body);
        
        $('.eventList').text(`Events:`);            
        for (let i = 0; i < body._embedded.events.length; i++) {
            $('.eventList').append(`<br>${body._embedded.events[i].name}`);
        }
    }, function (error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);

    });
});