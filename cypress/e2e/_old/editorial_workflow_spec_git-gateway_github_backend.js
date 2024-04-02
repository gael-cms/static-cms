import fixture from '../common/editorial_workflow';
import * as specUtils from '../common/spec_utils';
import { entry1, entry2, entry3 } from '../common/entries';

const backend = 'git-gateway';
const provider = 'github';

describe('Git Gateway (GitHub) Backend Editorial Workflow', () => {
  let taskResult = { data: {} };

  before(() => {
    specUtils.before(taskResult, { publish_mode: 'editorial_workflow', provider }, backend);
  });

  after(() => {
    specUtils.after(taskResult, backend);
  });

  beforeEach(() => {
    specUtils.beforeEach(taskResult, backend);
  });

  afterEach(() => {
    specUtils.afterEach(taskResult, backend);
  });

  fixture({
    entries: [entry1, entry2, entry3],
    getUser: () => taskResult.data.user,
  });
});