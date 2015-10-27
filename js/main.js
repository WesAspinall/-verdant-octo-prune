import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = '76sLDH5E9FdVz5ZJz9E7OXJaK9MLh45hsis7GhZR';
const API_KEY = 'U5koWqFo25AlBRDxSdFezjfuDqCwAJcm9DT0WqKY';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import PlayerCollection from './player_collection';
import PlayerTemplate from './player_template';

let player = new PlayerCollection();


function renderPlayer() {
  // Creating an empty dom node
  let $ul = $('<ul></ul>');
  
  // iterate each of the models
  player.each(function(player) {
    
    // person is an instance of PersonModel

    // grab raw data from person model
    let data = player.toJSON();
    console.log('data', data);
    
    // pass the data to our template
    let templateString = PlayerTemplate(data);
    console.log('templateString', templateString);

    // use templateString to create an li dom node
    let $li = $(templateString);

    // append li to the ul
    $ul.append($li);
  });

  // set ul to the body
  $('body').append($ul);
}

player.fetch().then(renderPlayer);

console.log('Hello, World');