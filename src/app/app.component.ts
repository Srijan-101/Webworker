import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Inputnumber: number = 0;
  PrimeNumber: number = 0;

  Duration!: string;
  
  onSubmit() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./prime-worker.worker', import.meta.url));
      worker.postMessage(this.Inputnumber);

      worker.onmessage = (event) => {
        console.log(event);// Access the data correctly
        this.PrimeNumber = event.data.value;
        this.Duration = event.data.Duration; // If needed, otherwise you can omit this
      };
    };
  }
}
