

addEventListener('message', (data:any) => {
  
  let TimeStarted!:Date;
  let TimeFinished!:Date;

  function isPrime(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

 function nthPrime(n: number): number {
    TimeStarted = new Date();
    let count = 0;
    let number = 1;

    while (count < n) {
        number++;
        if (isPrime(number)) {
            count++;
        }
    }
    TimeFinished = new Date(Date.now());
    return number;
}

function calculateDuration(start: Date, end: Date): string {
  const diffInMilliseconds = end.getTime() - start.getTime();
  const totalSeconds = Math.floor(diffInMilliseconds / 1000);
  const milliseconds = diffInMilliseconds % 1000; // Get the remaining milliseconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s ${Math.floor(milliseconds)}ms`;
}
  let value = nthPrime(data.data);
  let Duration = calculateDuration(TimeStarted, TimeFinished);
  postMessage({value,Duration});
});
