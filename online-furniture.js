/**
 * Created by alejandrok on 2/6/16.
 */


//Instantiate new products Queue
var productsQueue = new Queue();




function enqueue(product) {

    productsQueue.enqueue(product);
    console.log('Product was added to queue');
    console.log(p);

}

function dequeue() {

    var p = productsQueue.dequeue();
    return p;

    console.log('Product was removed from queue');
    console.log(p);
}

function peek() {

    var p = productsQueue.peek();
    return p;

}

function length() {
    return productsQueue.getLength();
}

function isEmpty(){

    return productsQueue.isEmpty();
}