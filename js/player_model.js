import Backbone from 'backbone';

let PlayerModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/players',

  idAttribute: 'objectId'

});


export default PlayerModel;