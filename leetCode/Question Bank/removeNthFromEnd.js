function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @param {*} head 
 * @param {*} val 
 * @returns 
 */
var removeNthFromEnd = function (head, val) {
  let result = new ListNode(-1)
  result.next = head

  let fast = result
  let slow = result
  for (let i = 0; i <= val; i++) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return result.next
};