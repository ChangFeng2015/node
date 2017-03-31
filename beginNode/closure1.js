/**
 * Created by Dave on 2017/3/14.
 */
function outerFunction(args) {
    var variableInOuterFunction = args;

    function bar() {
        console.log(variableInOuterFunction);
    }

    bar();
};

outerFunction("abc");