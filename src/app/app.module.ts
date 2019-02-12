import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';

@NgModule({
  declarations: [FirstComponent, ThirdComponent, SecondComponent ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule {}
