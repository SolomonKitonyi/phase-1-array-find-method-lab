// code your solution here
function superbowlWin(arr) {

    const ans = arr.find((item) => item.result === "W");
    if(ans) {
        return ans.year
    }

}