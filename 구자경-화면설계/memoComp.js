Vue.component('memo-component',{
    props:['id', 'title'],
    template:
    `<div>
        <h2>{{title}} <button @click="deleteMemo">X</button></h2>
        
        <slot name="memoArea"></slot>

        <hr>

        <p>{{time|yyyyMMdd}}</p>
    </div>`,
    data:function(){
        return{
            title:this.title,
            time:new Date()
        }
    },
    methods:{
        deleteMemo:function(){
            this.$emit("del", this.id)
        }
    },
    filters : {
        // filter로 쓸 filter ID 지정
        yyyyMMdd : function(value){ 
            // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
            if(value == '') return '';
        
            // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
            var js_date = new Date(value);

            // 연도, 월, 일 추출
            var year = js_date.getFullYear();
            var month = js_date.getMonth() + 1;
            var day = js_date.getDate();

            // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
            if(month < 10){
                month = '0' + month;
            }

            if(day < 10){
                day = '0' + day;
            }

            // 최종 포맷 (ex - '2021-10-08')
            return year + '년 ' + month + '월 ' + day + '일';
    }
    }
})