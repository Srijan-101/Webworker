import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent {
  Inputnumber: number = 0;
  PrimeNumber: number = 0;

  TimeStarted!:Date;
  TimeFinished!:Date;

  Duration!: string;

 isPrime(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

nthPrime(n: number): number {
  this.TimeStarted = new Date();
  let count = 0;
  let number = 1;

  while (count < n) {
      number++;
      if (this.isPrime(number)) {
          count++;
      }
  }
  this.TimeFinished = new Date(Date.now());
  return number;
}

calculateDuration(start: Date, end: Date): string {
  const diffInMilliseconds = end.getTime() - start.getTime();
  const totalSeconds = Math.floor(diffInMilliseconds / 1000);
  const milliseconds = diffInMilliseconds % 1000; // Get the remaining milliseconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s ${Math.floor(milliseconds)}ms`;
}
  
  onSubmit() {
     this.PrimeNumber = this.nthPrime(this.Inputnumber);
     this.Duration = this.calculateDuration(this.TimeStarted,this.TimeFinished);
  }

     Time:number = 0;
     
     hours:any;
     minutes:any;
     seconds:any;
     now!:Date;
     count:number = 0;

     timers:any[] = [];

     ngOnInit(){
       
        setInterval(() => {
          this.now = new Date()
          this.hours = this.formatTime(this.now.getHours());
          this.minutes = this.formatTime(this.now.getMinutes());
          this.seconds = this.formatTime(this.now.getSeconds());
          this.count = this.count + 1;
          this.timers.push({count : this.count , field : `${this.hours} : ${this.minutes} : ${this.seconds}`});
        },1000)
     }

     private formatTime(value: number): string {
      return value < 10 ? '0' + value : value.toString();
    }
}
