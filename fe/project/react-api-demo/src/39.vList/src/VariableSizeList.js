import createListComponent from './createListComponent';

const DEFAULT_ESTIMATED_ITEM_SIZE = 50;

const getItemMetadata = (props, index, instanceProps) => {
  const { itemSize } = props;
  const { itemMetadataMap, lastMeasuredIndex } = instanceProps;

  if (index > lastMeasuredIndex) {
    let offset = 0;
    if (lastMeasuredIndex >= 0) {
      const itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (let i = lastMeasuredIndex + 1; i <= index; i++) {
      let size = itemSize(i);

      itemMetadataMap[i] = {
        offset,
        size,
      };

      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

const findNearestItem = (props, instanceProps, offset) => {
  const { itemMetadataMap, lastMeasuredIndex } = instanceProps;

  const lastMeasuredItemOffset =
    lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(
      props,
      instanceProps,
      lastMeasuredIndex,
      0,
      offset
    );
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(
      props,
      instanceProps,
      Math.max(0, lastMeasuredIndex),
      offset
    );
  }
};

const findNearestItemBinarySearch = (props, instanceProps, high, low, offset) => {
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    const currentOffset = getItemMetadata(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

const findNearestItemExponentialSearch = (props, instanceProps, index, offset) => {
  const { itemCount } = props;
  let interval = 1;

  while (
    index < itemCount &&
    getItemMetadata(props, index, instanceProps).offset < offset
  ) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(
    props,
    instanceProps,
    Math.min(index, itemCount - 1),
    Math.floor(index / 2),
    offset
  );
};

const getEstimatedTotalSize = (
  { itemCount },
  { itemMetadataMap, estimatedItemSize, lastMeasuredIndex }
) => {
  let totalSizeOfMeasuredItems = 0;

  // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138
  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    const itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  const numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  const totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;

  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

const VariableSizeList = createListComponent(
  {
    getItemOffset: (
      props,
      index,
      instanceProps
    ) => getItemMetadata(props, index, instanceProps).offset,

    getItemSize: (
      props,
      index,
      instanceProps
    ) => instanceProps.itemMetadataMap[index].size,

    getEstimatedTotalSize,

    getStartIndexForOffset: (
      props,
      offset,
      instanceProps
    ) => findNearestItem(props, instanceProps, offset),

    getStopIndexForStartIndex: (
      props,
      startIndex,
      scrollOffset,
      instanceProps
    ) => {
      const { height, itemCount } = props;

      const size = height;
      const itemMetadata = getItemMetadata(props, startIndex, instanceProps);
      const maxOffset = scrollOffset + size;

      let offset = itemMetadata.offset + itemMetadata.size;
      let stopIndex = startIndex;

      while (stopIndex < itemCount - 1 && offset < maxOffset) {
        stopIndex++;
        offset += getItemMetadata(props, stopIndex, instanceProps).size;
      }

      return stopIndex;
    },

    initInstanceProps(props, instance) {
      const { estimatedItemSize } = props;

      const instanceProps = {
        itemMetadataMap: {},
        estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE,
        lastMeasuredIndex: -1,
      };

      return instanceProps;
    },
  }
);

export default VariableSizeList;
