const args = process.argv.slice(2);
let filteredArray = args.filter((num) => {return Number(num) > 0});

if (filteredArray != null) {
  for (let element of filteredArray){
    if (element < 0) continue;
    setTimeout(() => {
        //process.stdout.write('\x07');
      console.log('beep');
    }, element * 1000);
    }
  }

