import { NavpartsExampleModule } from './navparts-example.module';

describe('NavpartsExampleModule', () => {
  let navpartsExampleModule: NavpartsExampleModule;

  beforeEach(() => {
    navpartsExampleModule = new NavpartsExampleModule();
  });

  it('should create an instance', () => {
    expect(navpartsExampleModule).toBeTruthy();
  });
});
