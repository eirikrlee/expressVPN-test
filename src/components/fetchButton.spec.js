import { noCallThru } from 'proxyquire';

const proxyquire = noCallThru();
const sandbox = sinon.sandbox.create();
let successSpy;
let failureSpy;
const fetchStub = sandbox.stub();

const fetchButton = proxyquire('./fetchButton', { 
  '../services/fetchRepos': fetchStub
}).default;

describe('fetchButton', () => {
  beforeEach(() => {
    successSpy = sandbox.spy();
    failureSpy = sandbox.spy();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return error object with correct status when 404 is encountered', async () => {
    fetchStub.rejects(new Error('beep beep'));
    const button = fetchButton(successSpy, failureSpy);
    await button.onclick();
    expect(failureSpy.calledWith('beep beep')).to.be.true;
  });

});

