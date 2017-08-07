import { AnimalAdoptionAppPage } from './app.po';

describe('animal-adoption-app App', () => {
  let page: AnimalAdoptionAppPage;

  beforeEach(() => {
    page = new AnimalAdoptionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
