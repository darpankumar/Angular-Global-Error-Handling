
export class Country {

  private name: string;
  private population: number;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPopulation(): number {
    return this.population;
  }

  public setPopulation(population: number): void {
    this.population = population;
  }
}