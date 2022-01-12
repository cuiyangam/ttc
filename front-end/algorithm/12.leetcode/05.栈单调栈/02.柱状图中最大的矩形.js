/**
 * 84. 柱状图中最大的矩形
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 */

var largestRectangleArea = function (heights) {
    let ans = 0;
    let st = [];
    let hs = [0, ...heights, 0];
    for (let i = 0; i < hs.length; i++) {
        while (st.length !== 0 && hs[st[st.length - 1]] > hs[i]) {
            let cur = st.pop();
            let left = st[st.length - 1] + 1;
            let right = i - 1;
            ans = Math.max(ans, (right - left + 1) * hs[cur]);
        }
        st.push(i);
    }
    return ans;
}
