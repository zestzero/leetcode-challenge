/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addNum(l1: ListNode | null, l2: ListNode | null, result: ListNode | null) {
    if (l1 === null && l2 === null || result === null) {
        return result;
    }

    const sum = (l1?.val || 0) + (l2?.val || 0);
    if (sum >= 10) {
        if (l1 && l1.next) {
            l1.next.val = l1.next.val + 1;
        } else if (l2 && l2.next) {
            l2.next.val = l2.next.val + 1;
        } else {
            if (l1) {
                l1.next = new ListNode(1);
            }
            if (l2) {
                l2.next = new ListNode(1);
            }
        }

        result.val = sum % 10;
    } else if (sum > 0) {
        result.val = sum;
    }

    if (l1?.next || l2?.next) {
        result.next = new ListNode();
    }

    return addNum(l1?.next || null, l2?.next || null, result?.next || null);
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = new ListNode();
    addNum(l1, l2, result);
    return result;
};