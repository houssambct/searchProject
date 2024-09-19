import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results: any[] = [];
  totalResults: number = 0;
  executionTime: number = 0;
  loading: boolean = false;

  constructor(private apiService: ApiService) {
    // Authentification lors du démarrage de l'application
    this.apiService.authenticate().subscribe();
  }

  handleSearch(query: string) {
    this.loading = true;
    const startTime = performance.now();

    this.apiService.search(query).subscribe(response => {
      console.log('response',response)

      this.results = response.results;
      this.totalResults = response.total;
      this.executionTime = response.time;
      this.loading = false;
    },err =>{
      console.log('err',err)

    });
  }
}