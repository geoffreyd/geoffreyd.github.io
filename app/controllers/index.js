import Controller from '@ember/controller';
import opacity from 'ember-animated/motions/opacity';

export default class IndexController extends Controller {

  links = [
    { svg: 'globe-asia', name: 'Brisbane', path: 'location' },
    { svg: 'code', name: 'Code', path: 'code' },
  ]

  transition = function * ({ insertedSprites, receivedSprites, removedSprites }) {
    yield insertedSprites.forEach(sprite => {
      opacity(sprite, { from: 0, to: 1 });
    });

    receivedSprites.forEach(sprite => {
      opacity(sprite, { to: 1 });
    });

    removedSprites.forEach(sprite => {
      opacity(sprite, { to: 0 });
    });
  }
}
