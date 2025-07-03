type LeakyBucketOptions = {
    capacity: number;
    leakRate: number; 
  };
  
  export class LeakyBucket {
    private capacity: number;
    private leakRate: number;
    private waterLevel: number;
    private lastTickTime: number;
  
    constructor({ capacity, leakRate }: LeakyBucketOptions) {
      if (capacity < 0 || leakRate < 0) {
        throw new Error('Capacity and leakRate must be non-negative.');
      }
  
      this.capacity = capacity;
      this.leakRate = leakRate;
      this.waterLevel = 0;
      this.lastTickTime = 0;
    }
  
    tick(seconds: number): void {
      if (seconds < 0) {
        throw new Error('Tick time must be non-negative.');
      }
  
      const leaked = this.leakRate * seconds;
      this.waterLevel = Math.max(0, this.waterLevel - leaked);
      this.lastTickTime += seconds;
    }
  
    canPass(): boolean {
      if (this.waterLevel < this.capacity) {
        this.waterLevel += 1;
        return true;
      }
      return false;
    }
  
    getState() {
      return {
        capacity: this.capacity,
        leakRate: this.leakRate,
        waterLevel: this.waterLevel,
        timeElapsed: this.lastTickTime,
      };
    }
  }
  