import { ShortDescriptionPipe } from './short-description.pipe';

fdescribe('ShortDescriptionPipe', () => {
  let pipe: ShortDescriptionPipe;

  beforeEach(()=>{
    pipe = new ShortDescriptionPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not transform a short description', () => {
    expect(pipe.transform('short description')).toEqual('short description');
  });

  it('should not transform a description with length equal to 200', () => {
    let desc = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a`;
    expect(pipe.transform(desc)).toEqual(desc);
  });

  it('should transform a description with length greater than 200', () => {
    let descOriginal = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`;
    let shortdesc = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a`;
    expect(pipe.transform(descOriginal)).toEqual(`${shortdesc}...`);
  });

});
