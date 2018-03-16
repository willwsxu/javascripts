// 474. Ones and Zeroes
var findMaxForm = function(strs, m, n) {
    var memo=new Array(m+1)
    for (i=0; i<memo.length; i++) {
        memo[i]=new Array(n+1)
        for (j=0; j<memo[i].length; j++) {
            memo[i][j]=0
        }
    }
    for ( i=0; i< strs.length; i++) {
        s=strs[i]
        ones=0
        zero=0
        for (j=0; j<s.length; j++) {
            if (s.charAt(j)=='1')
                ones++
            else
                zero++
        }
        for (r=m; r>=zero; r--) {
            for (c=n; c>=ones; c--)
                memo[r][c]=Math.max(memo[r][c],1+memo[r-zero][c-ones])
        }
    }
    return memo[m][n]
};

// 377. Combination Sum IV
var combinationSum4Dp = function(nums, dp, target) {
    if (dp[target]>=0)
        return dp[target]
    total=0
    for (i=0; i<nums.length; i++) {
        if (target>=nums[i])
            total += combinationSum4Dp(nums, dp, target)
    }
};
var combinationSum4 = function(nums, target) {
    dp = new Array(target+1)
    for (i=0; i<dp.length; i++) {
        dp[i]=-1
    }
    dp[0]=0
    return combinationSum4Dp(nums, dp, target)
};