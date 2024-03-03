import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'swiper-demo2';

  @ViewChild('mySwiper') mySwiper: any = null; // Swiperの要素にアクセスするためのViewChild



    onSwiper([swiper]) {
      console.log(swiper);
    }
    onSlideChange() {
      console.log('slide change');
    }

 // スライドがクリックされたときの処理
    onSlideClicked(event: any) {
    const clickedIndex = event.clickedIndex; // クリックされたスライドのインデックスを取得
    console.log('Clicked slide index:', clickedIndex);

  // ここでクリックされたスライドに関連するデータを処理し、表示するなどの操作を行う
  // 例えば、clickedIndexに基づいてデータを取得して表示するなどの処理を行う
}
    


    ngOnInit(): void {
      // if (this.mySwiper && this.mySwiper.swiperRef) {
      //   this.mySwiper.swiperRef.update(); // Swiperを初期化
      //   console.log(this.mySwiper); // this.mySwiperが定義されていることを確認
      // }
      this.mySwiper.nativeElement.addEventListener('slidechange', (event: any) => {
        console.log(event);
        console.log('activeIndex: ', event.detail[0].activeIndex); //現在表示中のスライドのインデックス。ただし初期値がでない
      });
    }

    //https://qiita.com/frtklog/items/df7f1c4d5d870212e779
    //event.detail[0].activeIndexで現在表示中のスライドがどれなのか
    ngAfterViewInit(): void {
      this.mySwiper.nativeElement.addEventListener('slidechange', (event: any) => {
        console.log(event);
        console.log('activeIndex: ', event.detail[0].activeIndex); //現在表示中のスライドのインデックス。ただし初期値がでない
      });
  }
}
