![home_page](https://github.com/khalid-shohag/chobichokro/assets/52879463/bf15fed2-5058-458e-a4d2-de61fe89d484)
## Chobichokro
The Chobichokro Web App is a comprehensive platform that aims to streamline the movie distribution
and theater management process within the Bangladeshi film industry. This web app will facilitate interactions among distributors, theater owners, and audiences, providing an efficient and user-friendly way to
manage movie releases, ticket bookings, financial transactions, and performance analysis.

[![MIT License](https://badgen.net/npm/license/lodash?color=yellow&label=License)](https://opensource.org/licenses/)
[![Data Base](https://badgen.net/badge/icon/mongodb?color=4D2EA5&icon=mongodb&label=Database)](https://opensource.org/licenses/)
![frontend-react](https://img.shields.io/badge/Frontend-React-informational?style=flat&logo=react&logoColor=00D8FF&color=00D8FF)

## The backend of the project is [Chobichokro-API](https://github.com/Kamol-Paul/chobichokro-api)


# Screenshot of Chobichokro #
## Home Page ##
![home_page](https://github.com/khalid-shohag/chobichokro/assets/52879463/cff7e5f6-1068-441d-add1-19bb076b0637)


## Search Result Actor ##
![searching_result_khan](https://github.com/khalid-shohag/chobichokro/assets/52879463/c31b89d7-6dc7-4e0f-a50e-88bfa67bea3f)


## Search Result Genre ##

![search_result_genre](https://github.com/khalid-shohag/chobichokro/assets/52879463/7ef32a24-b8d2-4e5f-9e94-00d3160652e9)


## Search Result Movie Name ##
![search_result](https://github.com/khalid-shohag/chobichokro/assets/52879463/6d142296-77d1-4f80-a08c-328e087f8c25)

## Theatre Home Page ##
![Screenshot 2023-09-29 232421](https://github.com/khalid-shohag/chobichokro/assets/52879463/f1da3915-d9a9-44d5-886d-5a1a4c952755)

## Seat Booking Request ##
![theatre_seat_booking_submit](https://github.com/khalid-shohag/chobichokro/assets/52879463/4f170d7f-8779-44b0-ba68-61352f9bd0e9)


## Seat Booking Confirmation ##
![theatre_seat_booking_confirmation](https://github.com/khalid-shohag/chobichokro/assets/52879463/0ff7366a-2f24-4095-85e5-4426fb0003bd)


## Audience Dashboard ##
![audience_dashboard](https://github.com/khalid-shohag/chobichokro/assets/52879463/df4b05bf-900d-49c6-ab66-e22b284170b5)


## Movie review ##
![movie_review](https://github.com/khalid-shohag/chobichokro/assets/52879463/4e4586e5-1713-42da-abe9-2a085bb008d6)


## review adding ##
![review_addding](https://github.com/khalid-shohag/chobichokro/assets/52879463/3e854f90-47a4-4c0b-b7c2-02762d952740)



## Distributor Movie Info ##
![distributor_movie_info](https://github.com/khalid-shohag/chobichokro/assets/52879463/0603b091-82d2-45c3-a8c2-b0ad08ab3696)


## License Request Form ##
![license_request_form](https://github.com/khalid-shohag/chobichokro/assets/52879463/73b9da83-609a-4422-99d9-435bff8b77cb)

## Admin Tax Information ## 
![tax_reports](https://github.com/khalid-shohag/chobichokro/assets/52879463/0dd2144f-267d-4e3b-bc19-86dd35982875)



## Tech Stack

**Server:**

- Spring boot 3
- Spring Security
- Spring Data JPA
- Spring Mail
- JWT
- Maven
- Swagger
- Lombok
- python 3.10
- pytorch 1.9
- flask 2.0
- RobertaForSequenceClassification
  
**Frontend**
- react
- emotion
- mui
- react-pdf
- reduxjs
- testing-library
- axios
- react-toastify

**Data Base:**

- MongoDB

|
## Project Structure

```
chobichokro
├─ .gitignore
├─ .idea
│  ├─ .gitignore
│  ├─ chobichokro.iml
│  ├─ modules.xml
│  └─ vcs.xml
├─ package-lock.json
├─ package.json
├─ public
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon.png
│  ├─ chobichokro_logo.png
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ assets
   │  ├─ aqua-film-reel.jpg
   │  ├─ avatar2.png
   │  ├─ banner.jpg
   │  ├─ bg.gif
   │  ├─ camera-219958_1280.jpg
   │  ├─ cinema-film-camera-banner-with-copy-space-vector.jpg
   │  ├─ cinema-film-production-realistic-transparent-composition-with-isolated-image-filming-camera-stand-vector-illustration_1284-66161.jpg
   │  ├─ CinemaVideo.mp4
   │  ├─ film-596009_640.jpg
   │  ├─ giphy.gif
   │  ├─ icons8-refresh.gif
   │  ├─ icons8-spinner.gif
   │  ├─ lic_reg_bg.jpg
   │  ├─ light.gif
   │  ├─ load_image.gif
   │  ├─ login_page_bg.jpg
   │  ├─ muted.png
   │  ├─ profile.png
   │  ├─ reciept_bg.webp
   │  ├─ reel.jpg
   │  ├─ silver-film-roll-strip-white-background_281653-1139.jpg
   │  ├─ speaker.jpg
   │  ├─ theatre-studio-01.jpg
   │  ├─ ticket
   │  ├─ two-yellow-tickets_1101-56.jpg
   │  └─ unmuted.png
   ├─ components
   │  ├─ admin
   │  │  ├─ AdminLogin.js
   │  │  ├─ LicenseApproved.js
   │  │  ├─ LicensePending.js
   │  │  ├─ SystemAdmin.css
   │  │  ├─ SystemAdmin.js
   │  │  └─ TaxReports.js
   │  ├─ appear
   │  │  ├─ Appear.css
   │  │  ├─ DataLoading.js
   │  │  ├─ movieDetails.js
   │  │  ├─ MovieReview.js
   │  │  ├─ PreBooking.js
   │  │  ├─ receipt.js
   │  │  ├─ ReviewPopUp.js
   │  │  ├─ RunningMovie.js
   │  │  ├─ RunningShowList.js
   │  │  ├─ TheatreDataLoading.js
   │  │  └─ TicketBooking.js
   │  ├─ audience
   │  │  ├─ AudienceLogin.js
   │  │  ├─ AudienceRegistration.js
   │  │  ├─ dashboard.css
   │  │  ├─ dashboard.js
   │  │  └─ dashList
   │  │     └─ ReviewList.js
   │  ├─ AudienceNavbar.js
   │  ├─ design_file
   │  │  └─ LicenseRegistration.css
   │  ├─ distributor
   │  │  ├─ cast.js
   │  │  ├─ director.js
   │  │  ├─ DistributorLogin.js
   │  │  ├─ DistributorPage.css
   │  │  ├─ DistributorPage.js
   │  │  ├─ genre.js
   │  │  ├─ MovieList.js
   │  │  ├─ MovieReleaseAnnouncement.js
   │  │  ├─ Pagination.js
   │  │  ├─ poster.js
   │  │  └─ ReleasedMovie.js
   │  ├─ Footer.css
   │  ├─ Footer.js
   │  ├─ Home.css
   │  ├─ Home.js
   │  ├─ HomePage.js
   │  ├─ kamol
   │  │  └─ BackdropModel.jsx
   │  ├─ LicenseRegistration.js
   │  ├─ LicenseStatus.js
   │  ├─ LicenseStatusLogin.js
   │  ├─ Login.css
   │  ├─ Login.js
   │  ├─ navbar.css
   │  ├─ navbar.js
   │  ├─ SearchResult.js
   │  ├─ SelectedLoginUser.js
   │  └─ theatre
   │     ├─ ReelBook.js
   │     ├─ ReelStatus.js
   │     ├─ SeatBooking.css
   │     ├─ SeatBooking.js
   │     ├─ show
   │     │  ├─ Hall.js
   │     │  ├─ NewShow.js
   │     │  ├─ RunningShow.js
   │     │  ├─ ShowList.js
   │     │  └─ ShowTime.js
   │     ├─ TheatreLogin.js
   │     ├─ TheatrePage.css
   │     └─ TheatrePage.js
   ├─ dev
   │  ├─ index.js
   │  ├─ palette.jsx
   │  ├─ previews.jsx
   │  ├─ README.md
   │  └─ useInitial.js
   ├─ helper
   │  └─ axios
   │     ├─ GetAll.js
   │     └─ getAllMovies.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ reportWebVitals.js
   └─ setupTests.js

```

## License

[MIT](https://choosealicense.com/licenses/mit/)

##  Contributor ##
[@khalid-shohag](https://github.com/khalid-shohag)
[@Kamol-Paul](https://github.com/Kamol-Paul)
