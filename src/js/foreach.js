function foreach(arr, fn) {
    for(let i = 0, len = arr.length;  i < len; i++) {
        fn(arr[i]);
    }
}

module.exports = foreach;