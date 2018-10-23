const data = [
  {name: 'foo bar', email: 'foobar@baz.com', group:1},
  {name: 'bar baz', email: 'barbaz@foo.com', group:1},
  {name: 'baz foo', email: 'bazfoo@bar.com', group:2},
  {name: 'foo baz', email: 'foobaz@bar.com', group:3},
]

class Kringle {
  constructor(data){
    if(Array.isArray(data))this.list=data
  }
  shuffle (list1){
  let tempList=list1, list2=[]
  while(tempList.length>0){
    const index = Math.floor(Math.random()*tempList.length)
    list2.push(tempList[index])
    tempList=tempList.filter((c,i)=>i!==index)
  }
  //console.log('shuffled :::\n',list1.map((c,i)=>(`${c.name} (${c.group}) -> ${list2[i].name} (${list2[i].group})`)))
  this.shuffledList=list2
  }
  isSolveable (data){
    var groupLengths = data.reduce((a,b)=>({...a,[b.group]:(a[b.group]||0)+1}),{})
    var largestGroup = Object.keys(groupLengths).reduce((a,b)=>a>groupLengths[b]?a:groupLengths[b],0)
    return !(largestGroup > (data.length/2))
  }

 run(){
   if(this.isSolveable(data)){
     // compare
     let conflict = false
     do{
       this.shuffle(this.list)
       const i = this.list.findIndex((c,i)=>(c.group==this.shuffledList[i].group))
       //console.log('conflict at index ',i)
       conflict = i!==-1
     }while(conflict)

     console.log('final list :::\n',this.list.map((c,i)=>(`${c.name} (${c.group}) -> ${this.shuffledList[i].name} (${this.shuffledList[i].group})`)))
   }else{console.log('unsolveable list, one of your groups is too big')}
 }
}

module.exports = Kringle