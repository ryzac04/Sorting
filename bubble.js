
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let swapped = false;
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; 
    }
    return arr;
 }

module.exports = bubbleSort;