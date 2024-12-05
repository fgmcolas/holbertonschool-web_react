import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$('body').append('<button id="btn">Click me</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$('#btn').on('click', _.debounce(updateCounter, 500));
