app.component('photo-item',{
    props:{
        pic: Object
    },
    template:
    /*html*/
    `
    <div class=" group text-center text-white ">
        <button @click="showFav(pic.alter)"  @dblclick="toggleV(pic.alter)" class="group-hover:opacity-80" >
        <img :src="pic.path " class="h-full w-full">
        </button>
        <p class="text-opacity-0 text-xl group-hover:text-opacity-100 group-hover:text-black">{{pic.alter}} </p>
    </div>
    <p v-show="pic.showFav" style="color: red;" class="material-icons mt-2">
        favorite
    </p>
    `
    ,
    methods:{
        showFav(text){
            this.$emit('show-fav-icon',text);
        },
        toggleV(text){
            this.$emit('toggle-view',text);
        },
    }
})