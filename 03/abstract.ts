abstract class Takephotos {
  constructor(public Mode: string, public filter: string) {}
  abstract ReelTime(): void;
  abstract TimeCalculate(): number;
}

class Instagram extends Takephotos {
  constructor(
    public mode: string,
    public filter: string,
    public followers: number
  ) {
    super(mode, filter);
  }
  ReelTime(): void {}
  TimeCalculate(): number {
    return 8;
  }
}

const hc = new Instagram("mode", "filter", 400);
hc.TimeCalculate();
hc.ReelTime();
