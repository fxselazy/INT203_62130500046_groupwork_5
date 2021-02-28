app.component('photo-search',{
    props:{
        search:Boolean,
        searchField:String,
    },
    emits:['update:searchField']
    ,
    template:
    /*html*/
    `<div class="text-center mt-4">
          <span v-show="search" class="material-icons" @click="handleSearch">search</span>
            <div v-show="!search">
                <input class="border-2 w-1/2" :value='searchField' @input=$emit('update:searchField',$event.target.value)  type="text" placeholder="Search something...">
                <button @click="handleCCSearch" class="material-icons">cancel</button>
                <p v-show="hasPic"> Not Found </p>
                <p>Search word : {{searchField}}</p>
            </div>  
        </div>`
    ,
    methods:{
       handleSearch(){
           this.$emit('start-search');
        },
       handleCCSearch(){
            this.$emit('cancel-search');
        },
        hasPic(){
            this.$emit(`has-Result`)
        }
    }
})