function bubblesort(arr){

    let n = arr.length;

    for(let i=0; i < n-1; i++){

        for(let j=0; j< n-i-1; j++){

            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];

                arr[j+1] = temp;
            }
        }
    }

    return arr;

}

var arr = [12,15,10,34,25,56,45,78,66];
console.log('Bubble Sort = '+bubblesort(arr));


function bubbleSortWords(cars) {
    let n = cars.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Use localeCompare to compare strings
            if (cars[j].localeCompare(cars[j + 1]) > 0) {
                // Swap elements if they are in the wrong order
                let temp = cars[j];
                cars[j] = cars[j + 1];
                cars[j + 1] = temp;
            }
        }
    }
    return cars;
}

var cars = ["Maruti", "BMW", "Audi", "Skoda", "Hyundai", "Honda", "Volkswagen", "Mahindra"];

console.log('Cars bubble sorted: ', bubbleSortWords(cars));
