abstract class TaskManager {
  protected tasks: Set<string>;

  constructor() {
    this.tasks = new Set<string>();
  }

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

class Project extends TaskManager {
  addTask(task: string): void {
    if (!this.tasks.has(task)) {
      this.tasks.add(task);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

class DailyTasks extends TaskManager {
  addTask(task: string): void {
    if (!this.tasks.has(task)) {
      this.tasks.add(task);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

abstract class Inventory {
  protected inventory: Map<string, number>;

  constructor() {
    this.inventory = new Map<string, number>();
  }

  abstract addItem(item: string, quantity: number): void;

  removeItem(item: string): void {
    this.inventory.delete(item);
  }

  getInventory(): Record<string, number> {
    return Object.fromEntries(this.inventory);
  }
}

class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    const currentQuantity = this.inventory.get(item) || 0;
    this.inventory.set(item, currentQuantity + quantity);
  }
}

class StoreInventory extends Inventory {
  private readonly MAX_QUANTITY_PER_ITEM = 10;

  addItem(item: string, quantity: number): void {
    const currentQuantity = this.inventory.get(item) || 0;
    const newQuantity = currentQuantity + quantity;

    if (newQuantity > this.MAX_QUANTITY_PER_ITEM) {
      this.inventory.set(item, this.MAX_QUANTITY_PER_ITEM);
    } else {
      this.inventory.set(item, newQuantity);
    }
  }
}

abstract class FavoriteManager {
  protected favorites: string[];

  constructor() {
    this.favorites = [];
  }

  abstract addFavorite(item: string): void;

  getFavorites(): string[] {
    return [...this.favorites];
  }
}

class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
    }
  }

  getFavorites(): string[] {
    return [...this.favorites].sort();
  }
}

class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    this.favorites.unshift(item);
  }
}

abstract class VoteSystem {
  protected votes: Map<string, number>;

  constructor() {
    this.votes = new Map<string, number>();
  }

  voteFor(candidate: string): void {
    const currentVotes = this.votes.get(candidate) || 0;
    this.votes.set(candidate, currentVotes + 1);
  }

  abstract getResults(): object;
}

class Election extends VoteSystem {
  getResults(): Record<string, number> {
    return Object.fromEntries(this.votes);
  }
}

class Poll extends VoteSystem {
  getResults(): string[] {
    const entries = Array.from(this.votes.entries());
    entries.sort((a, b) => b[1] - a[1]);
    return entries.map((entry) => entry[0]);
  }
}