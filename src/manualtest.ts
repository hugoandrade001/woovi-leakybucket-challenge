import { LeakyBucket } from './LeakyBucket';

const bucket = new LeakyBucket({ capacity: 5, leakRate: 1 });

console.log(bucket.canPass());
console.log(bucket.canPass()); 
console.log(bucket.canPass()); 

bucket.tick(2);

console.log(bucket.canPass()); 
console.log(bucket.canPass()); 
console.log(bucket.canPass()); 
console.log(bucket.canPass()); 
console.log(bucket.canPass()); 
