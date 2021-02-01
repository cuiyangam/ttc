
import { createElement, PureComponent } from 'react';

const defaultItemKey = (index, data) => index;

export default function createListComponent({
  getItemOffset,
  getEstimatedTotalSize,
  getItemSize,
  getStartIndexForOffset,
  getStopIndexForStartIndex,
  initInstanceProps,
}) {
  return class List extends PureComponent {
    _instanceProps = initInstanceProps(this.props, this);

    static defaultProps = {
      itemData: undefined,
      overscanCount: 2,
    };

    state = {
      isScrolling: false,
      scrollDirection: 'forward',
      scrollOffset:0,
    };

    render() {
      const {
        children,
        className,
        height,
        itemCount,
        itemData,
        itemKey = defaultItemKey,
        style,
        width,
      } = this.props;
      const { isScrolling } = this.state;

      const onScroll = this._onScrollVertical;

      const [startIndex, stopIndex] = this._getRangeToRender();

      const items = [];
      if (itemCount > 0) {
        for (let index = startIndex; index <= stopIndex; index++) {
          items.push(
            createElement(children, {
              data: itemData,
              key: itemKey(index, itemData),
              index,
              style: this._getItemStyle(index),
            })
          );
        }
      }

      // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.
      const estimatedTotalSize = getEstimatedTotalSize(
        this.props,
        this._instanceProps
      );

      return createElement(
        'div',
        {
          className,
          onScroll,
          style: {
            position: 'relative',
            height,
            width,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform',
            ...style,
          },
        },
        createElement('div', {
          children: items,
          style: {
            height: estimatedTotalSize,
            pointerEvents: isScrolling ? 'none' : undefined,
          },
        })
      );
    }

    // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    _getItemStyle = (index) => {
      let style;
      const offset = getItemOffset(this.props, index, this._instanceProps);
      const size = getItemSize(this.props, index, this._instanceProps);

      style = {
        position: 'absolute',
        top: offset,
        height: size,
        width: '100%',
      };

      return style;
    };

    _getRangeToRender() {
      const { itemCount, overscanCount } = this.props;
      const { isScrolling, scrollDirection, scrollOffset } = this.state;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      const startIndex = getStartIndexForOffset(
        this.props,
        scrollOffset,
        this._instanceProps
      );
      const stopIndex = getStopIndexForStartIndex(
        this.props,
        startIndex,
        scrollOffset,
        this._instanceProps
      );

      // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.
      const overscanBackward =
        !isScrolling || scrollDirection === 'backward'
          ? Math.max(1, overscanCount)
          : 1;
      const overscanForward =
        !isScrolling || scrollDirection === 'forward'
          ? Math.max(1, overscanCount)
          : 1;

      return [
        Math.max(0, startIndex - overscanBackward),
        Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)),
        startIndex,
        stopIndex,
      ];
    }

    _onScrollVertical = (event) => {
      const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
      this.setState(prevState => {
        if (prevState.scrollOffset === scrollTop) {
          // Scroll position may have been updated by cDM/cDU,
          // In which case we don't need to trigger another render,
          // And we don't want to update state.isScrolling.
          return null;
        }

        // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
        const scrollOffset = Math.max(
          0,
          Math.min(scrollTop, scrollHeight - clientHeight)
        );

        return {
          isScrolling: true,
          scrollDirection:
            prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset,
        };
      }, this._resetIsScrollingDebounced);
    };
  };
}
