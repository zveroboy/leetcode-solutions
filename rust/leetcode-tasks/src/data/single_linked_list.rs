use std::mem;

#[derive(Debug)]
struct Node {
    val: i32,
    next: Option<Box<Node>>,
}

#[derive(Debug)]
struct MyLinkedList {
    head: Option<Box<Node>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyLinkedList {
    fn new() -> Self {
        MyLinkedList { head: None }
    }

    fn get_at_index(&self, index: i32) -> Option<&Box<Node>> {
        let mut opt_node = self.head.as_ref();
        for _ in 0..index {
            let node = opt_node.map(|f| f.next.as_ref()).flatten();
            opt_node = node;
        }
        opt_node
    }

    fn get_mut_at_index(&mut self, index: i32) -> Option<&mut Option<Box<Node>>> {
        let mut opt_node: Option<&mut Option<Box<Node>>> = Some(&mut self.head);
        for _ in 0..index {
            // opt_node = &mut opt_node.as_mut().unwrap().next;
            // if(opt_node.is_none())
            let map = opt_node
                .map(|f| f.as_mut().map(|ff| &mut ff.next))
                .flatten();
            opt_node = map;
            // opt_node = opt_node.as_mut().map(|f| &mut f.next).unwrap();
        }
        opt_node
    }

    fn get(&self, index: i32) -> i32 {
        let opt_node = self.get_at_index(index);
        opt_node.map(|o| o.val).unwrap_or(-1)
    }

    fn add_at_head(&mut self, val: i32) {
        let head = Some(Box::new(Node {
            val,
            next: self.head.take(),
        }));

        self.head = head;
    }

    fn add_at_tail(&mut self, val: i32) {
        let tail = Some(Box::new(Node { val, next: None }));

        if let Some(ref mut head) = self.head {
            let mut node = head;
            while let Some(ref mut next) = node.next {
                node = next;
            }
            node.next = tail;
            return;
        }

        self.head = tail;
    }

    fn add_at_index(&mut self, index: i32, val: i32) {
        if index == 0 {
            self.add_at_head(val);
            return;
        }

        if let Some(Some(current)) = self.get_mut_at_index(index - 1) {
            let node = Some(Box::new(Node {
                val,
                next: current.next.take(),
            }));

            current.next = node;
        }
    }

    fn delete_at_index(&mut self, index: i32) {
        // let current = self.get_mut_at_index(index);
        if let Some(current) = self.get_mut_at_index(index) {
            let next = &mut current.as_mut().map(|f| f.next.take()).flatten();
            std::mem::swap(current, next);
        }
    }
}

#[test]
fn linked_list_1() {
    let mut list = MyLinkedList::new();
    list.add_at_head(1);
    list.add_at_tail(3);
    list.add_at_index(1, 2); // linked list becomes 1->2->3
    assert_eq!(list.get(0), 1);
    assert_eq!(list.get(1), 2);
    assert_eq!(list.get(2), 3);
    list.delete_at_index(1); // now the linked list is 1->3
    assert_eq!(list.get(1), 3);
}

#[test]
fn linked_list_2() {
    let mut list = MyLinkedList::new();
    list.add_at_head(1);
    list.add_at_tail(3);
    list.add_at_index(1, 2); // linked list becomes 1->2->3
    assert_eq!(list.get(1), 2);
    list.delete_at_index(0); // now the linked list is 2->3
    assert_eq!(list.get(0), 2);
}

#[test]
fn linked_list_3() {
    let mut list = MyLinkedList::new();
    list.add_at_head(4);
    assert_eq!(list.get(1), -1);
    list.add_at_head(1);
    list.add_at_head(5);
    list.delete_at_index(3);
    list.add_at_head(7);

    assert_eq!(list.get(3), 4);
    assert_eq!(list.get(3), 4);
    assert_eq!(list.get(3), 4);
    list.add_at_head(1);
    list.delete_at_index(4);
}

#[test]
fn linked_list_4() {
    let mut list = MyLinkedList::new();
    list.add_at_head(1);
    list.add_at_tail(3);
    list.add_at_index(1, 2);
    assert_eq!(list.get(1), 2);
    list.delete_at_index(1);
    assert_eq!(list.get(1), 3);
    assert_eq!(list.get(3), -1);
    list.delete_at_index(3);
    list.delete_at_index(0);
    assert_eq!(list.get(0), 3);
    list.delete_at_index(0);
    assert_eq!(list.get(0), -1);
}
