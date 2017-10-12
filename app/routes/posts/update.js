import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        save (model) {
            model.save(); //persistindo os dados
            this.transitionTo('posts');
        }
    },
    model: function () {
        let posts = this.store.findAll('post');
        return posts.then((results) => {
            return results.get('firstObject');
        });
    }
});
