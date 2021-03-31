import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import IUserTokensRepository from '../IUserTokensRepository';

class FakeUserTokensRepository implements IUserTokensRepository {
  private tokens: UserToken[] = [];

  async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      user_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    this.tokens.push(userToken);

    return userToken;
  }

  async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.tokens.find(
      (findToken) => findToken.token === token
    );

    return userToken;
  }

  async setUsedToken(userToken: UserToken): Promise<void> {
    const tokenIndex = this.tokens.findIndex(
      (find) => find.id === userToken.id
    );

    this.tokens[tokenIndex] = { ...userToken, used: true };
  }
}

export default FakeUserTokensRepository;
