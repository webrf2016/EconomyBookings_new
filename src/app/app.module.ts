import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonPrimitiveComponent } from './primitives/button-primitive/button-primitive.component';
import { ChecklistPrimitiveComponent } from './primitives/checklist-primitive/checklist-primitive.component';
import { IconsPrimitiveComponent } from './primitives/icons-primitive/icons-primitive.component';
import { DropdownPrimitiveComponent } from './primitives/dropdown-primitive/dropdown-primitive.component';
import { InputPrimitiveComponent } from './primitives/input-primitive/input-primitive.component';
import { IconsFlagsPrimitiveComponent } from './primitives/icons-flags-primitive/icons-flags-primitive.component';
import { HeadingsPrimitiveComponent } from './primitives/headings-primitive/headings-primitive.component';
import { MainLogoPrimitiveComponent } from './primitives/main-logo-primitive/main-logo-primitive.component';
import { FormSelectPrimitiveComponent } from './primitives/form-select-primitive/form-select-primitive.component';
import { StoreButtonPrimitiveComponent } from './primitives/store-button-primitive/store-button-primitive.component';
import { RatingPrimitiveComponent } from './primitives/rating-primitive/rating-primitive.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MybookingDropdownComponent } from './components/mybooking-dropdown/mybooking-dropdown.component';
import { StayTunedBlockComponent } from './components/stay-tuned-block/stay-tuned-block.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { QuestionsBlockComponent } from './components/questions-block/questions-block.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookByPhoneBlockComponent } from './components/book-by-phone-block/book-by-phone-block.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ReviewBlockComponent } from './components/review-block/review-block.component';
import { RatingsBlockComponent } from './components/ratings-block/ratings-block.component';
import { BookCarComponent } from './layouts/book-car/book-car.component';
import { OtherCitiesComponent } from './layouts/other-cities/other-cities.component';
import { FooterLayoutComponent } from './layouts/footer-layout/footer-layout.component';
import { SitemapLayoutComponent } from './layouts/sitemap-layout/sitemap-layout.component';
import { RentCarSectionLayoutComponent } from './layouts/rent-car-section-layout/rent-car-section-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimitiveComponent,
    ChecklistPrimitiveComponent,
    IconsPrimitiveComponent,
    DropdownPrimitiveComponent,
    InputPrimitiveComponent,
    IconsFlagsPrimitiveComponent,
    HeadingsPrimitiveComponent,
    MainLogoPrimitiveComponent,
    FormSelectPrimitiveComponent,
    StoreButtonPrimitiveComponent,
    RatingPrimitiveComponent,
    DropdownComponent,
    MybookingDropdownComponent,
    StayTunedBlockComponent,
    FeedbackComponent,
    QuestionsBlockComponent,
    NavbarComponent,
    BookByPhoneBlockComponent,
    SubscribeComponent,
    ReviewBlockComponent,
    RatingsBlockComponent,
    BookCarComponent,
    OtherCitiesComponent,
    FooterLayoutComponent,
    SitemapLayoutComponent,
    RentCarSectionLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
