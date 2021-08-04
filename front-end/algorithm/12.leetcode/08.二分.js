// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

var search = (nums, target) => {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) { // 左边有序
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else { // 右边有序
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

// https://leetcode-cn.com/problems/binary-search/
var search = function(nums, target) {
    let [l, r] = [0, nums.length - 1];
    while(l <= r) {
        const mid = Math.floor((l + r) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
};
console.log(search([-1,0,3,5,9,12], 8))

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
        return false;
    }
    let [row, rowl, rowr] = [0, 0, matrix.length - 1];
    while(rowl <= rowr) {
        let mid = Math.floor((rowl + rowr) / 2);
        if(matrix[mid][0] <= target && target <= matrix[mid][matrix[0].length - 1]) {
            row = mid;
            break;
        }
        if(target < matrix[mid][0]) {
            rowr = mid - 1;
        } else {
            rowl = mid + 1;
        }
    }

    let [columnl, columnr] = [0, 0, matrix[0].length];
    while(columnl <= columnr) {
        let mid = Math.floor((columnl + columnr) / 2);
        if(target === matrix[row][mid]) {
            return true;
        }
        if(target < matrix[row][mid]) {
            columnr = mid - 1;
        } else {
            columnl = mid + 1;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 11));