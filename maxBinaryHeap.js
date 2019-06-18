class MaxBinaryHeap{
    constructor(){
        this.value = new Array()
    }
    insert(val){
        this.value.push(val)
        this.shiftUP()
        return this.value
    }
    shiftUP(){
        let index = this.value.length -1;
        let val = this.value[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parentVal = this.value[parentIndex]
            if(val <= parentVal) break;
            else{
                this.value[parentIndex] = val
                this.value[index] = parentVal    
                index = parentIndex            
            }
        }
    }
}

let MaxBHeap = new MaxBinaryHeap()
MaxBHeap.insert(55)
MaxBHeap.insert(40)
MaxBHeap.insert(30)
MaxBHeap.insert(20)
MaxBHeap.insert(25)
MaxBHeap.insert(28)
MaxBHeap.insert(70)
MaxBHeap.insert(100)

console.log(MaxBHeap)
//           55                      
//      40       30                
//   20   25  28    25               
// 70
     