const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.tree=[];
    this.filterTree=[];
    this.data=null;
    
  }
  
  root() {
    if (this.filterTree.length>0)
      return this.filterTree[0];
    else
     return null;  
  }

  add(data) {
    this.tree[data]=data;
    this.filterTree=this.tree.filter((elem)=>elem!=null);
    this.data=data;
  }

  has(data) {
    if (this.tree.indexOf(data) == -1) {
      return false;
    }  
    else 
      return true;
  }

  find(data) {
    if (this.tree.indexOf(data) == -1) {
      return null;
    }  
    else 
      return (this.tree.indexOf(data));  
  }

  remove(data) {
    if (this.tree.indexOf(data) != -1) {
      this.tree=this.tree.filter((elem)=> elem!==data);  
      this.filterTree=this.tree.filter((elem)=>elem!=null);
    }
      
  }

  min() {
    if (this.filterTree.length>0)
      return this.filterTree[0];
  }

  max() {
    if (this.filterTree.length>0)
      return this.filterTree[this.filterTree.length-1];
  }
} 

module.exports = {
  BinarySearchTree
};