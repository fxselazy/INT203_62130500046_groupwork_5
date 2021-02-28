app.component('photo-view',{
    props:{
        view:Boolean,
        viewSrc:String,
    },
    template:
    /*html*/
    `
    <div v-show="view" class="grid justify-items-stretch flex flex-col  p-3 m-2" style="background-color:#21211f;">
    <button>
    <span class="material-icons" style="color: white;" v-on:click="viewClose">
            disabled_by_default
            </span>
    </button>
    <img v-bind:src="viewSrc" style="width: 80%;" class="justify-self-center"/>
    </div>
    `
    ,
    methods:{
       viewClose(){
           this.$emit('has-view');
        },
    }
})