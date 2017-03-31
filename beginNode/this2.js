/**
 * Created by Dave on 2017/3/14.
 */
function foo() {
    console.log('is this called from globals?:',this === global);
};
foo();