/**
 * 33. 搜索旋转排序数组
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 */

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
