
/**
 * 归并排序算法, a是数组，n表示数组大小.稳定的排序算法
 * @param {*} a 
 */
function mergeSort(a) {
  mergeSortInternally(a, 0, a.length -1);
}

// 递归调用函数
function mergeSortInternally(a, p, r) {
  if (p >= r) return;  // 递归终止条件
  let q = Math.floor(p + (r - p) / 2);  // 取p到r之间的中间位置q,防止（p+r）的和超过int类型最大值
  // 分治递归
  mergeSortInternally(a, p, q);
  mergeSortInternally(a, q + 1, r);

  // 将A[p...q]和A[q+1...r]合并为A[p...r]
  merge(a, p, q, r);
}

function merge(a, p, q, r) {  // 归并两个有序数组
  let i = p;
  let j = q + 1;
  let k = 0; // 初始化变量i, j, k
  let tmp = new Array(r - p + 1); // 申请一个大小跟a[p...r]一样的临时数组
  while (i <= q && j <= r) {  // 两个数组都没有归并完
    if (a[i] <= a[j]) {
      tmp[k++] = a[i++]; 
    } else {
      tmp[k++] = a[j++];
    }
  }
  let start = i;  // 判断哪个子数组中有剩余的数据
  let end = q;
  if (j <= r) {
    start = j;
    end = r;
  }

  while (start <= end) {  // 将剩余的数据拷贝到临时数组tmp
    tmp[k++] = a[start++];
  }

  for (i = 0; i <= r - p; ++i) {  // 将tmp中的数组拷贝回a[p...r]
    a[p + i] = tmp[i];
  }
}

/**
 * 快速排序
 */
function quickSort(a) {
  quickSortInternally(a, 0, a.length-1);
}
function quickSortInternally(a, p, r) {  // 快速排序递归函数，p,r为下标
  if (p >= r) return;
  let q = partition(a, p, r); // 获取分区点
  quickSortInternally(a, p, q-1);
  quickSortInternally(a, q+1, r);
}

function partition(a, p, r) {  // 快排的关键
  let pivot = a[r];
  let i = p;
  for(let j = p; j < r; ++j) {
    if (a[j] < pivot) {  // j 与分区点比较，交换的却是i 与 j,保证了迭代完后i左边的序列都比分区点小
      swap(a, i, j);
      ++i;
    }
  }
  swap(a, i, r);
  return i;
}
function findKth(a, k){  // 查找第k小的元素
  return find(a, 0, a.length - 1, k);
}
function find(a, p, r, k){  // 除 k 外，均为下标值
  let q = 0;
  q = partition(a, p, r);
  if(q > k - 1){
    return find(a, p, q - 1, k);
  }else if(q < k - 1){
    return find(a, q + 1, r, k);
  }
  return a[q];  
}

/**
 * 堆排序
 */
function heapSort(array) {
  // 将最大值交换到首位
  for (let i = 0; i < array.length; i++) {
    heapInsert(array, i);
  }
  let size = array.length;
  // 交换首位和末尾
  swap(array, 0, --size);
  while (size > 0) {
    heapify(array, 0, size);
    swap(array, 0, --size);
  }
  return array;
}

function heapInsert(array, index) {
  // 如果当前节点比父节点大，就交换
  while (array[index] > array[parseInt((index - 1) / 2)]) {
    swap(array, index, parseInt((index - 1) / 2));
    // 将索引变成父节点
    index = parseInt((index - 1) / 2);
  }
}
function heapify(array, index, size) {
  let left = index * 2 + 1;
  while (left < size) {
    // 判断左右节点大小
    let largest = left + 1 < size && array[left] < array[left + 1] ? left + 1 : left;
    // 判断子节点和父节点大小
    largest = array[index] < array[largest] ? largest : index;
    if (largest === index) break;
    swap(array, index, largest);
    
    index = largest;
    left = index * 2 + 1;
  }
}
function swap(array, left, right) {
  let rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}

module.exports = {
  mergeSort,
  quickSort,
  findKth,
  heapSort
}