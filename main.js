const app = {
    data() {
        return {
            pictures: [
                { path: './images/1.jpg', alter: 'Ancient Bristlecone Pine Forest, United States' ,showFav: false },
                { path: './images/2.jpg', alter: 'Campese, Italy' ,showFav: false},
                { path: './images/3.jpg', alter: 'Stakkholtsgja canyon, Iceland' ,showFav: false},
                { path: './images/4.jpg', alter: 'Gold Coast, Australia' ,showFav: false},
                { path: './images/5.jpg', alter: 'Great Ocean Road, Peterborough, Australia' ,showFav: false},
                { path: './images/6.jpg', alter: 'Lefkada, Greece' ,showFav: false}
            ],
            path:"./images/1.jpg",
            searchField:'',
            isSearch: true,
            hasView : false,
            viewImg:'',
            hasResult : false,
            showPic : [],
        }
    },
    methods:{
        showFavIcon(text){
            console.log(text);
            const index = this.pictures.findIndex(pic => pic.alter == text)
            console.log(index);
            this.pictures[index].showFav = !this.pictures[index].showFav;
            console.log(index);
        },
        startSearch(){
            this.isSearch = !this.isSearch;
        },
        cancelSearch(){
            this.isSearch = !this.isSearch;
            this.searchField = '';
        },
        toggleView(index){
            this.viewImg = this.pictures[index].path;
            this.hasView = true;
        }
        
    },
    computed:{
        countLike(){
            return this.pictures.filter(s => s.showFav).length;
        },
        countShow(){
            return this.showPic.length
        },
        filteredList(){
            // return this.pictures.filter(pic => {
            //     // return this.showPic = pic.alter.toLowerCase().includes(this.searchField.toLowerCase())
                
            //     });  
            this.showPic = this.pictures.filter(pic => pic.alter.toLowerCase().search(this.searchField.toLowerCase()) > -1)  
            return this.searchField  
        },
        searchPic(){
            this.hasResult = !this.showPic.length
            return this.showPic ?  this.showPic : this.pictures;
        }
    }
};
Vue.createApp(app).mount('#app');