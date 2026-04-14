/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    removeNthFromEnd(head, n) {
        let current = head;
        let prev = null;
        let counter = 1;
        
        while (current) {
            // Сохраняем предыдущий узел для удаления
            if (counter === n + 1) {
                prev = head;
            } else if (counter > n + 1) {
                prev = prev.next;
            }
            
            counter++;
            current = current.next;
        }
        
        // Если targetPrev === null, значит удаляем голову
        if (!prev) {
            return head.next;
        }

        // Удаляем узел
        prev.next = prev.next.next;
        
        return head;
    }
}


// [1,2,3,4],2
// 1 итерация
//  isDeleted = 1;
//  prev = null;
//  counter = 1;
//  current = 1;
// 2 итерация
//  isDeleted = 1;
//  prev = 1;
//  counter = 2;
//  current = 2;
// 3 итерация
//  current = 3;
//  isDeleted = 2;
//  prev = 2;
//  counter = 3;
// 4 итерация
//  isDeleted = 2;
//  prev = 3;
//  counter = 4;
