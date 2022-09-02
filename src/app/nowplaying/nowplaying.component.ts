import { Component, OnInit,OnDestroy } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';
declare var $:any;

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit,OnDestroy {
  nowplayingMovies: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  channel:any;
  term: string=""
  constructor(_getMoviesService: GetMoviesService ) {

    this.channel= _getMoviesService.getCats("now_playing").subscribe((data) => {
     
     this.nowplayingMovies = data.results.slice(0,16)
   })
   
 }

 ngOnInit(): void {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel(
      {
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }
    );
  });
  $(document).ready(function() {
    $(".onload").fadeOut(2000)
    $("body").css("overflow","auto");
  }) 
}

ngOnDestroy(){
  this.channel.unsubscribe()
  console.log("destroyed")
}

}
