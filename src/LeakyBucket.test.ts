import { LeakyBucket } from './LeakyBucket';

describe('LeakyBucket', () => {
  it('allows requests when not full', () => {
    const bucket = new LeakyBucket({ capacity: 3, leakRate: 1 });
    expect(bucket.canPass()).toBe(true);
    expect(bucket.canPass()).toBe(true);
    expect(bucket.canPass()).toBe(true);
  });

  it('blocks requests when full', () => {
    const bucket = new LeakyBucket({ capacity: 2, leakRate: 1 });
    bucket.canPass();
    bucket.canPass();
    expect(bucket.canPass()).toBe(false);
  });

  it('leaks properly over time', () => {
    const bucket = new LeakyBucket({ capacity: 3, leakRate: 1 });
    bucket.canPass(); // 1
    bucket.canPass(); // 2
    bucket.canPass(); // 3
    bucket.tick(2);   
    expect(bucket.canPass()).toBe(true); 
  });

  it('throws on negative tick time', () => {
    const bucket = new LeakyBucket({ capacity: 3, leakRate: 1 });
    expect(() => bucket.tick(-1)).toThrow();
  });

  it('throws on negative config values', () => {
    expect(() => new LeakyBucket({ capacity: -1, leakRate: 1 })).toThrow();
    expect(() => new LeakyBucket({ capacity: 1, leakRate: -1 })).toThrow();
  });
});
