/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// Time Complexity: O(n)
// Space Complexity: O(1)

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivotValue = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){
        if (pivotValue > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

// Time Complexity: O(n log n)
// Space Complexity: O(log n)

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

module.exports = { pivot, quickSort };