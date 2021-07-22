// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

var search = (nums, target) => {
    let n = nums.length;
    if (n == 0) {
        return -1;
    }
    if (n == 1) {
        return nums[0] == target ? 0 : -1;
    }
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[0] <= nums[mid]) { // 左边有序
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else { // 右边有序
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}
