import Backbone from 'backbone';
import PlayerModel from './player_model';

let PlayerCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/players',

  model: PlayerModel,

  parse: function(data) {
    return data.results;
  }

});

export default PlayerCollection;