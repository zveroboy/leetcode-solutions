/// @number 50
/// @title Pow(x, n)
/// @url https://leetcode.com/problems/powx-n/
/// @difficulty medium

struct Solution;

impl Solution {
    pub fn my_pow(x: f64, n: i32) -> f64 {
        fn hepler(x: f64, n: i32) -> f64 {
            match n {
                0 => 1.0,
                1 => x,
                _ => {
                    let half_n = n / 2;
                    let half = hepler(x, half_n);
                    let remainder = n % 2;
                    half * half * if remainder == 0 { 1.0 } else { x }
                }
            }
        }

        match n {
            n if n > 0 => hepler(x, n),
            n if n < 0 => 1.0 / hepler(x, n),
            _ => 1.0,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn my_pow_works() {
        assert_relative_eq!(Solution::my_pow(2.00000, 10), 1024.0);
        assert_relative_eq!(Solution::my_pow(2.1, 3), 9.261);
        assert_relative_eq!(Solution::my_pow(2.0, -2), 0.25);
        assert_relative_eq!(Solution::my_pow(42.38803, 1), 42.38803);
        assert_relative_eq!(Solution::my_pow(0.00001, 2147483647), 0.0);
    }
}
