const nodes = {};

['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(z => nodes[z] = {val:z})

nodes.a.left = nodes.b;
nodes.b.left = nodes.c;
nodes.b.right = nodes.d;
nodes.a.right = nodes.e;
nodes.e.left = nodes.f;
nodes.f.left = nodes.g;
nodes.f.right = nodes.h;

printNode(nodes.a);


function printNode(rootNode) {

  if(rootNode.left && rootNode.right) {
    printNode(rootNode.left);
    console.log(rootNode.val)
    printNode(rootNode.right)
  } else if(rootNode.left) {
      printNode(rootNode.left)
    } else if(!rootNode.left) {
    console.log(rootNode.val)
  } else {
    console.log(rootNode.val)
  }

}
