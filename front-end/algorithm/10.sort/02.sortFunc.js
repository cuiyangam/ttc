/**
 * 冒泡排序 n^2 稳定排序
 */
function bubbleSort(a) {
  for (let i = 0; i < a.length - 1; ++i) {  // n个元素需要n-1趟起泡排序，第i趟起泡会确定第i大元素
    let flag = false;  // 提前退出冒泡循环的标志位
    for (let j = 0; j < a.length - 1 - i; ++j) {  // 每趟起泡排序都需要比较到 最后一个未排序的元素
      if (a[j] > a[j + 1]) { // 交换
        let tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
        flag = true;  // 表示有数据交换      
      }
    }
    if (!flag) break;  // 没有数据交换，提前退出
  }
}

/**
 * 插入排序 n^2 稳定排序
 */
function insertSort(array) {
  if (!check(array)) return;
  let i, j, temp;
  for (i = 1; i < array.length; i++) {  // 第一个元素默认有序，从第二至最后一个元素依次插入前面有序部分
    temp = array[i];  // 保留待插入的元素
    for (j = i - 1; j >= 0; j--) {  // 前i-1个元素是有序的，在其中寻找合适的位置插入i
      if (array[j] > temp) {  // 从有序部分的最后一个元素起，如果该元素大于待插入元素
        array[j + 1] = array[j];  // 将其后移
      }else{
        break;  // 否则，暂停搬移有序部分
      }
    }
    array[j + 1] = temp;  // 此时的索引 j + 1即为应该插入的位置
  }
  return array;
};

/* 
 *选择排序 n^2 不稳定排序
 */
function selectSort(a) {
  for (let i = 0; i < a.length - 1; ++i) {
    let minIndex = i;  // 查找最小值
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }
    let tmp = a[i];  // 交换
    a[i] = a[minIndex];
    a[minIndex] = tmp;
  }
}

function check(array) {
  if (Array.isArray(array)) return true;
}

module.exports = {
  bubbleSort,
  insertSort,
  selectSort
}