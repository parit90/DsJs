class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    traverse(){
    }
    pop(){
        if(!this.head) return undefined
        else{
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail
            this.tail.next = null
            this.length--
            if(this.length === 0){
                this.head = null
                this.tail = null
            }
            return current
        }
    }
    //remove a node from the front of the list ->head
    shift(){
        if(!this.head) return undefined
        else{
            let current =  this.head
            this.head = current.next
            this.length--
            if(this.length === 0){
                this.tail = null
            }
            return current
        }
    }
    //add a new node to the front of the list ->head
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    
    //get node at index
    get(index){
        if(index<0 || this.length<=index) return null
        let counter = 0;
        let current = this.head;
        while(counter != index){
            current = current.next
            counter++
        }
        return current;
    }
    
    //set the node at an index
    set(index, val){
        let isFoundNode = this.get(index)
        if(isFoundNode){
            isFoundNode.val = val
            return true
        }
        else return false
    }

    //insert new node at an index ->specific position
    insert(index, val){
        if(index<0 || index>= this.length) return null
        if(index == 0){
           let temp = this.unshift(val)
           return !!temp
        }
        if(index == this.length){
            let temp = this.push(val) 
            return !!temp
        }

        let newNode = new Node(val)
        let prevNode = this.get(index -1)
        let prevNodeRef = prevNode.next
        prevNode.next = newNode
        newNode.next = prevNodeRef

        this.length++
        return true
    }

    //remove node at an index ->specific position
    remove(index){
        if(index<0 || index>= this.length) return null
        if(index == 0) return this.shift(index)
        if(index == this.length-1) return this.pop()

        let prevNode = this.get(index-1)
        let currentNode = this.get(index)
        let currentNodeRef = currentNode.next
        prevNode.next = currentNodeRef
        this.length--
        return currentNode
    }

    //reverse link list
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next, prev = null
        for(let i=0;i<this.length;i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this;
    }
}

var list = new SinglyLinkList()
list.push("Hello")
list.push("World")
list.push("!")
list.push("$")
// list.pop()
// console.log(list)
// list.shift()
// console.log(list)
// console.log("Get: ",list.get(1))
// list.set(1,"Parit")
// console.log("Get: ",list.get(1))
list.insert(2,"INDIA")
// console.log(JSON.stringify(list))
console.log("Removed : ",list.remove(2))
// console.log("Removed : ",list.remove(1))
console.log("list : ",JSON.stringify(list))
list.reverse()
console.log("list : ",JSON.stringify(list))