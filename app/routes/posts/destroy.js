import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        delete (model) {
            model.destroyRecord(); //o deleteRecord precisa chamar o post save para poder fazer a persistencia, o destroyRecord ja faz a remoção de uma vez
            this.transitionTo('posts');
        },
        goBack () {
            this.transitionTo('posts');
        }
    },
    model: function (params) {
        return this.store.findRecord('post', params.id);
    }
});
