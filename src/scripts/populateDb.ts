/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import users from './users';
import products from './products';
import User from '../modules/users/schemas';
import Game from '../modules/games/schemas';

const populateDb = async (): Promise<void> => {
  try {
    let newUsers = 0;
    for (const user of users) {
      const existe = await User
        .find({ 'auth.email': user.auth.email })
        .limit(1)
        .count();
      if (!existe) {
        await User.create(user);
        newUsers += 1;
      }
    }
    if (newUsers) console.log(`Inseriu ${newUsers} novos usuários`);
    let newGames = 0;
    for (const product of products) {
      const existe = await Game
        .find({ name: product.name })
        .limit(1)
        .count();
      if (!existe) {
        await Game.create(product);
        newGames++;
      }
    }
    if (newGames) console.log(`Inseriu ${newGames} novas usinas`);
  } catch (e) {
    console.error(e);
  }
};

export default populateDb;
