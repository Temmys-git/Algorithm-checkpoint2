
// Implementation of Insertion Sort using JavaScript:

// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand.


// Instructions

// Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.


function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Element to be inserted into the sorted sequence
        let j = i - 1; // Start from the previous element
        
        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = current; // Insert current into the sorted sequence
    }
    
    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));