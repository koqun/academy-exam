new Vue({
    el:'#app',
    data:{
        //메모마다 개별값 추가될 곳
        id:0,
        // 제목 값
        title:'',
        // 메모 값
        memo:'',

        memolist:[]
    },
    methods:{
        addMemo:function(){
            this.id++; 
            
            this.memolist.push({id:this.id, title:this.title, memo:this.memo});
            this.title=""; //제목창 초기화
            this.memo=""; //메모창 초기화
        },
        deleteMemo:function(id){
            let index=0;
            this.memolist.forEach((element,i)=>{
                if(element.id==id){
                    index=i;
                }
            });
            this.memolist.splice(index,1);
        }
    }
})

// document.addEventListener('click', function(event) {
//     if (event.click) {
//       event.preventDefault();
//     };
//   }, true);