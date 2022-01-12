const receivesAFunction = (callback) => {
    callback();
}

const returnsANamedFunction = () => {
    function item() {}
    return item;
}

const returnsAnAnonymousFunction = () => {
    return function() {

    };
}