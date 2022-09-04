/// @number 1480
/// @title Running Sum of 1d Array
/// @url https://leetcode.com/problems/running-sum-of-1d-array/
/// @difficulty easy
struct Solution;

#[allow(dead_code)]
impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        // let mut result = vec![0; nums.len()];
        // for (i, b) in nums.iter().enumerate() {
        //     let &a = result.get(i.wrapping_sub(1)).unwrap_or(&0);
        //     result[i] = a + b;
        // }
        let mut acc = 0;
        let mut result = Vec::new();
        for b in nums.iter() {
            acc += b;
            result.push(acc);
        }
        result
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn running_sum_works() {
        assert_eq!(Solution::running_sum(vec![1, 2, 3, 4]), [1, 3, 6, 10]);
        assert_eq!(Solution::running_sum(vec![1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
        assert_eq!(
            Solution::running_sum(vec![3, 1, 2, 10, 1]),
            [3, 4, 6, 16, 17]
        );
    }
}
