/// @number 1
/// @title Two Sum
/// @url https://leetcode.com/problems/two-sum
/// @difficulty easy

struct Solution;

// const

impl Solution {
    pub fn integer_to_roman(num: i32) -> String {
        if 1 > num || num > 3999 {
            panic!("The number is out of bounds")
        }

        let mut letters = vec!['I', 'V', 'X', 'L', 'C', 'D', 'M'];
        letters.reverse();
        let mut dividers = vec![1, 5, 10, 50, 100, 500, 1000];
        dividers.reverse();

        let mut number = num as usize;
        let mut acc = String::new();

        for (i, divider) in dividers.iter().enumerate() {
            if i % 2 != 0 {
                continue;
            }

            let digit = (number - (number % divider)) / divider;
            number -= digit * divider;

            let one = letters[i];

            if digit < 4 {
                acc.push_str(&one.to_string().repeat(digit));
                continue;
            }

            let five = letters[i - 1];
            let ten = letters[i - 2];

            if digit == 4 {
                acc.push(one);
                acc.push(five);
            } else if digit == 9 {
                acc.push(one);
                acc.push(ten);
            } else {
                acc.push(five);
                acc.push_str(&one.to_string().repeat(digit % 5));
            }
        }

        acc
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn integer_to_roman_works() {
        assert_eq!(Solution::integer_to_roman(3), "III");
        assert_eq!(Solution::integer_to_roman(4), "IV");
        assert_eq!(Solution::integer_to_roman(9), "IX");
        assert_eq!(Solution::integer_to_roman(58), "LVIII");
        assert_eq!(Solution::integer_to_roman(1994), "MCMXCIV");
    }
}
