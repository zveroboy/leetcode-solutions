/// @number 1
/// @title Two Sum
/// @url https://leetcode.com/problems/two-sum
/// @difficulty easy

use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn two_sum (input: Vec<i32>, target: i32) -> [i32; 2] {
        let mut map: HashMap<i32, usize> = HashMap::new();

        for (i, &v) in input.iter().enumerate() {
            let pair = &(target - v);
            if map.contains_key(pair) {
                let &result = map.get(pair).unwrap();
                return [result as i32, i as i32];
            }
            map.insert(v, i);
        }

        panic!("out of task conditions");
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn two_sum_works() {
        assert_eq!(Solution::two_sum(vec![2, 7, 11, 15], 9), [0, 1]);
        assert_eq!(Solution::two_sum(vec![3, 2, 4], 6), [1, 2]);
        assert_eq!(Solution::two_sum(vec![3, 3], 6), [0, 1]);
    }
}