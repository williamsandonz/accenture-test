import { ITodoItem, ITodoList } from '@vodafone/api-interfaces';
import * as fs from 'fs';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { exceptionService } from './exception.service';

class TodoDataService {

  data: ITodoList;
  saveToDiskAttempted = new Subject<void>();
  saveToDiskAttempted$ = this.saveToDiskAttempted
    .asObservable()
    .pipe(delay(1000));

  // NX uses uses /assets dir copied to dist at runtime so this path will cause bundling issues
  // if app ever productionised but sufficicent for purposes of test
  private filePath = `${__dirname}/../../../apps/api/data.json`;

  onAppInit() {
    this.loadFromFile();
    this.saveToDiskAttempted$
      .subscribe(() => this.writeFile());
    this.saveToDiskAttempted.next();
  }

  private async writeFile(): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, JSON.stringify(this.data, null, 2), (error) => {
        this.saveToDiskAttempted.next();
        if (error) {
          exceptionService.handle(error);
          return reject(error);
        }
        resolve();
      });
    });
  }


  private loadFromFile() {
    this.data = JSON.parse(fs.readFileSync(
      this.filePath,
      {
        encoding:'utf8',
        flag:'r'
      }
    ));
  }

  upsertItem(item: ITodoItem) {
    this.data = {
      ...this.data,
      [item.id]: item
    };
  }

  removeItem(id: string): ITodoItem {
    const copy = { ...this.data[id] };
    delete this.data[id];
    return copy;
  }

}

export const todoDataService = new TodoDataService();
