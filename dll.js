class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let poppedNode = this.tail
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return this

    }
    shift(){
        if(this.length == 0) return undefined
        let oldHead = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(){
        let newNode = new Node(val)
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    // get the list item either from start or end based on index
    // if index is close to higher value, start the traverse from tail
    // if index is close to lower value, start the traverse from begining 
    get(index, val){
        if(index<0 || index>=this.length) return null
        if(index<=this.length/2){
            let count = 0 
            let current = this.head
            while(count!=index){
                current = current.next
                count++
            }
        }else{
            let count = this.length-1
            let current = this.tail
            while(count!=index){
                current = current.prev
                count--
            }
        }
        return current
    }
    
    //same as sll
    set(index,val){
        let isFoundNode = this.get(index)
        if(isFoundNode){
            isFoundNode.val = val
            return true
        }
        else return false
    }

    insert(index,val){
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
        newNode.prev = prevNode
        prevNodeRef.prev = newNode

        this.length++
        return true
    }
}

let list = new DoublyLinkList()
list.push(99)
list.push(100)

list.shift()
list.shift()
console.log(list);