import nock from 'nock';
import fetchRepos from './fetchRepos';

describe('fetchRepos service', () => {
  it('should return error object with correct status when 404 is encountered', async () => {
    nock('https://api.github.com')
      .get('/search/repositories')
      .query({
        q: 'expressvpn'
      })
      .reply(404); 

    try {
      await fetchRepos();
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error).with.property('status', 404);
    }
  });

  it('should response with correct payload if 200 is encountered', async () => {
    nock('https://api.github.com')
      .get('/search/repositories')
      .query({
        q: 'expressvpn'
      })
      .reply(200, {
        expressvpn: 'rox'
       });
      
    const result = await fetchRepos();

    expect(result).to.be.eql({ expressvpn: 'rox'});
  });
});

