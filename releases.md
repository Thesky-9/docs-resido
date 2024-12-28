# Release Notes

## 4.0.0 (Dec 28, 2024)

- Change minimum PHP version: Require PHP 8.2.0 or higher.
- Optimize source code: Improve performance and maintainability.
- Improve TinyMCE editor: add RTL mode
- Improve front theme UI
- Improve cache for better performance
- Optimize source code
- Update third-party libraries to the latest version

## 3.5.0 (Oct 17, 2024)

- Add Backblaze cloud storage support
- Add more social login button styles
- Add option to disable thumbnails generation when uploading images
- Add jfif file support
- Add term & privacy URL to theme options
- Add option to disable cache options
- Add missing translation texts
- Add option to convert image to WebP when uploading to Admin -> Media
- Add setting to change logo height in email template
- Add option to set admin logo max height
- Allow raw HTML code in static block
- Expanded icon set with Tabler Icons (https://tabler.io/icons)
- Include missing Google Fonts in the available list
- Add support for .avif image format
- Enhance UI block 'Custom HTML' with code formatting
- Introduce option to limit image upload dimensions (width & height)
- Fix RTL issue in contact form
- Fix categories tree in post form
- Add option to change post's author
- Fix missing translations in email templates
- Fix download language files from GitHub, it was missing translations for theme
- Improve media settings, prevent errors when enter wrong settings
- Improve admin panel UI, fix RTL issues
- Improve sitemap cache, fix cache is not refreshed when changing language
- Improve cache for better performance
- Optimize database queries for improved multi-language support
- Enhance caching mechanism for better performance
- Refine and optimize source code for efficiency
- Update third-party libraries to the latest version
- 
## 3.4.0 (Jun 02, 2024)
- Add project filter field for the properties list
- Add project information to the property
- Fix small issues on front theme UI
- Fix dark mode in roles & permissions page
- Fix download posts example CSV/Excel
- Add sharing and copy indirect link for media files
- Add plugin filter by status in plugins listing page
- Update translation plugin: allows importing translations from CSV/Excel
- Update Google Fonts list
- Improve performance
- Improve email templates
- Improve media generate thumbnails

## 3.3.1 (May 12, 2024)

- Fix showing images in the project.
- Fix CSS & icons for RTL (right-to-left) layout.
- Update core.

## 3.3.0 (May 3, 2024)

- Fix project in plugin RealEstate
- Fix investor in plugin RealEstate
- Fix show properties list on project detail page
- Add shortcode project
- Update core

## 3.2.0 (Apr 23, 2024)

- Fix investor in plugin RealEstate
- Fix package in plugin RealEstate
- Improve core & performance

## 3.1.2 (Feb 25, 2024)

- Fix properties listing with map
- Fix account registration
- Improve core


## 3.1.0 (Feb 22, 2024)

- Fix create menu
- Fix media thumbnail
- Improve email
- Add custom CSS/JS for admin pane
- Improve core & performance

## 3.0.0 (Jan 13, 2024)

- Revamp admin theme, make it super beautiful. Check this video: https://www.youtube.com/watch?v=tRxGSHL8bI0
- Upgrade to Laravel 10.
- Improve core code and performance.
- Make it easier to customize
- Fix plugin Analytics when extension bcmath not enabled
- Fix media double click
- Fix responsive issue on the admin panel
- Add option to select language when installing script with installer
- Add option to stop converting media file URL to friendly URL
- Add user preference to select default language, dark/light mode...
- Add option to set color for media folder
- Add option to stop indexing a page
- Improve Admin theme UI
- Improve translations from the admin panel, make it easier to use.
- Improve System updater, fix permission issues on some servers
- Improve email notification settings

## 2.22.0 (Oct 24, 2023)
- Improve performance & theme UI
- Add slugs translation
- Improve multi-language
- Add option to disable agent info in the property detail page
- Fix text direction button in CKEditor
- Fix issues when using PostgreSQL
- Improve System updater
- Improve core & performance
- Improve locale/translation download
- Improve Analytics widgets


## 2.21.0 (Aug 08, 2023)
- Improve tables
- Fix seeder
- Fix load vueApp in account dashboard page
- Improve core & performance
- Improve system updater & performance

## 2.20.3 (Aug 03, 2023)
- Fix load vueApp in account dashboard page

## 2.20.0 (Jul 17, 2023)

- Make property images sortable in agent dashboard
- Bootstrap 5.3.0 compatible
- Add cronjob setting instruction
- Improve theme translations
- Improve core & performance
- Improve Analytics plugin, switch to use GA4, no more UA.
- Improve plugin management.
- Fix issue when switching default language
- Improve admin notification: only keep notifications in 30 days
- Improve setting pages
- Improve captcha plugin, fix issue when using multiple captcha
- Improve admin bar
- Improve system updater & performance
- Improve UI for installer
- Improve core source code & performance
- Add multi-language for email templates


## 2.19.0 (Jun 06, 2023)

- Add multi-language for email templates
- Fix issue when switching default language
- Fix watermark issues: missing watermark for images in sub-folder
- Add properties/projects import & export to CSV
- Fallback option for Google Fonts cache
- Disable scroll effect in the admin panel
- Fix og:site_name
- Fix bug on new Stripe API change
- Fix search properties/projects
- Fix bug download images in Admin -> Media
- Fix preview PDF file & bulk changes in table
- Fix sitemap issue when enable pagespeed optimizer
- Publish translation files when activate plugin / upgrade to the new version
- Make editor translatable, display based on admin language
- Improve loading performance
- Improve system updater & performance
- Improve UI for installer
- Improve sitemap (add sitemap indexes)
- Improve Google Analytics settings
- Improve admin notifications, hide notification if current logged user don't have permission to see it

## 2.18.0 ( Apr 4, 2023)

- Fix Js validation 
- Fix route cache
- Fix coding standard
- Fix GA4
- Fix plugin location
- Fix PHPStand issues
- Improve sitemap
- Update core
- Refactor code

## 2.17.0 ( Mar 7, 2023)

- Fix coding standards
- Fix show shortcode in project detail
- Fix project
- Fix create investor
- Fix select2
- Fix CKEditor
- Refactor code

## 2.16.2 ( Feb 26, 2023)

- Update core
- Fix small bugs
- Refactor code

## 2.16.1 ( Feb 21, 2023)

- Fix agent property list
- Fix create investor
- Fix form property
- Fix the preview PDF file & bulk changes in table
- Fix coding standard
- Update core

## 2.16.0 ( Feb 14, 2023 )

- Fix small bug
- Fix download translation locale
- Purifier allows the audio tag
- Improve analytics, fix installer
- Fix plugin Language
- Update maintenance mode view & Add alt for the image in Media
- Add an option to disable the installer

## 2.15.0 ( Jan 27, 2023)

- Big update: Add type Project. Link: https://resido.thesky9.com/projects
- Upgrade to Laravel framework 9.x
- Drop PHP 7.x support.
- Add an option to install plugins from marketplace.botble.com in Admin -> Plugins.
- Add an option to clean up site data.
- Add canonical tag for page, post, category, tag & gallery.
- Able to update free plugins directly in Admin -> Plugins.
- Fix Wasabi & BunnyCDN media driver.
- Fix the issue when enabling page speed options in settings.
- Fix sitemap JS libraries.
- Change the default Google Fonts CDN URL to fonts.bunny.net.
- Improve performance.
- Improve sitemap queries.
- Improve core & UI.
- Improve email template. Add Twig function.
- Improve multi-language.
## 2.14.0 ( Dec 23, 2022)

- Fix language
- Fix avatar upload on rtl
- Fix period

## 2.13.2 ( Nov 24, 2022)

- Hotfix: media upload

## 2.13.2 ( Nov 21, 2022)

- Fix: simple slider
- Improve queries & UI
- Improve license activation


## 2.13.1 ( Nov 9, 2022)

- Update purifier config & update TinyMCE
- Fix SEO helper
- Refactor code
- Fix upload agent images and property images in the account dashboard


## 2.13.0 ( Nov 02, 2022)

- Fix SEO helper
- Improve installer
- Improve error handler
- Improve editor
- Update purifier config & update TinyMCE

## 2.12.0 ( Oct 30, 2022)

- Fix the contact form
- Fix the SEO title
- Improve multi-language
- Improve language & settings
- Improve Vue components
- Improve media
- Add installer
- Refactor code

## 2.11.0 ( Sep 29, 2022)

- Fix show recent properties view in the property detail page
- Fix shortcode
- Refactor code

## 2.10.0 ( Sep 16, 2022)

- Fix bug language
- Fix pagespeed optimization and language route prefix
- Fix file upload visibility
- Fix search properties
- Fix sort by city name to getting cities by state
- Fix dompdf public path & add the Catalonia flag
- Fix reset email template
- Fix the captcha when login
- Fix bugs on PHP 8
- Improve payment
- Improve repository queries
- Refactor migration
- Refactor code

## 2.9.1 ( Aug 15, 2022)

- Fix plugin Location
- Refactor code

## 2.9.0 ( Aug 12, 2022)

- Update SSLCommerz payment gateway 
- Update migrations
- Update translate email
- Improve PayPal & Stripe payment gateway
- Fix media images field
- Refactor code


## 2.8.0 ( Jul 06, 2022)

- Fix media
- Fix the traffic map
- Fix filter
- Fix multi-language
- Fix theme translations
- Fix cities search
- Update location to able to update country code and dial code
- Update editor
- Improve language plugin
- Refactor code
- Improve menu
- Improve translations
- Improve media watermark
- Improve plugin Backup
- Improve form field custom select & autocomplete

## 2.7.0 ( May 19, 2022)

- Fix property sliders
- Fix property detail page
- Fix translation feature
- Fix bugs
- Fix hero style
- Fix shortcode
- Fix search min & max square
- Add ability to set auto slider in homepage
- Add image resolution tip for property
- Refactor code

## 2.6.0 ( May 5, 2022)

- Fix rating
- Fix multi-language
- Add media settings for thumbnail sizes
- Add ability to share property via whatsapp
- Refactor code

## 2.5.0 ( Apr 14, 2022)

- Update translation
- Improve dashboard widgets
- Fix property type.
- Fix CSS Mobile.
- Update core.

## 2.4.1 ( Mar 26, 2022)

- Fix CSS header.
- Fix Package Translation.

## 2.4.0 ( Mar 24, 2022)

- Fix editor
- Fix city
- Fix language advanced
- Refactor code.
- Improve plugin system.

## 2.3.0 ( Feb 22, 2022)

- Improve shortcodes: Featured properties, Properties slide, Properties hero slide.
- Improve multi-language.

## 2.2.0 ( Feb 08, 2022)

- Fixed import cities & states.
- Fix CSS mobile.
- Update schema for post & page

## 2.1.0 ( Jan 17, 2022)

- Fixed import cities & states.
- Fixed S3 config.
- Refactor code.

## 2.0.0 ( Jan 03, 2022)

- Improve multi-language.
- Added import cities & states from CSV.
- Update dashboard widgets for real estate.
- Improve contact form & fix dependencies
- Fixed social login settings.
- Fixed hero slide
- Fixed mobile menu
- Fixed duplicate shortcode in CKEditor & refactor code
- Refactor code.

## 1.15.0 ( Dec 22, 2021 )

- Fixed search by location.
- Fixed shortcode properties revent viewed.
- Improve search by location.
- Improve editor & media.
- Improve multi-language.
- Improve editor & media.
- Improve theme translations
- Improve multi-language: cache routes per language
- Improve RTL style.
- Refactor code.

## 1.14.0 ( Dec 02, 2021 )

- Fix currency setting
- Fix social login settings & improve media
- Fix youtube
- Allow cities work without state 
- Refactor code
- Update core
- Update translate theme

## 1.13.1 ( Nov 22, 2021 )

- Fix filter grid layout
- Fix language

## 1.13.0 ( Nov 21, 2021 )

- Added option to disable credits system, agents can post their properties for free.
- Fix search location
- Fix filter
- Fix social login
- Fix admin bar setting.
- Fix Stripe payment gateway in non-decimal currencies.
- Fix UI agent dashboard.
- Fix some small issues when upgrading to Bootstrap 5.
- Improve multi-language.
- Improve shortcode.
- Improve plugin Analytics, view analytics data by date range.
- Improve Razorpay.
- Improve payment.
- Improve core & UI.
- Improve RTL mode.
- Update to the latest Laravel version 8.72.0.
- Optimize queries performance.

## 1.12.0 ( Oct 25, 2021 )

- Update code for property type
- Fix icon field for facilities
- Improve plugin Analytics
- Improve plugin Multi-Language
- Improve plugin Backup
- Refactor code
- Fix some bugs

## 1.11.0 ( Oct 16, 2021 )

- Fix RTL account
- Fix Skin option
- Improve RazorPay
- Allow disabling post approval
- Refactor code
- Fix some bugs

## 1.10.2 ( Oct 06, 2021 )

- Fix some bugs

## 1.10.1 ( Oct 06, 2021 )

- Fix some bugs
- Fix translation of agent dashboard
- Update seeder
- Update core 5.22

## 1.10.0 ( Oct 06, 2021 )

Theme: 
- Fix language
- Fix search cities
- Fix payment transaction
- Update package
- Add widget newsletters

Admin:
- Fix send email
- Update bootstrap 5
- Update editor & media
- Improve UI
- Add BunnyCDN cloud storage

## 1.9.0 ( Sep 29, 2021 )

Theme: 
- Fix leaflet
- Check types
- Update lazyload
- Fix translation
- Fix review
- Fix account language
Admin:
- Update Credits manual
- Add plugin Newsletter
- Fix Paypal
- Fix & update core


## 1.8.0 ( Sep 15, 2021 )

- Update lazyload image.
- Fix feature icon.
- Fix some bugs Theme.
- Fix admin email.
- Fix cache issue in media.
- Improve theme custom CSS/JS.
- Improve plugin Member, Blog & Newsletter.
- Improve allowed iframe types.
- Handle TokenMismatchException.
- Prevent error when missing watermark image.
- Update to the latest Laravel version 8.60.0
- Improve core.
- Optimize queries performance.

## 1.7.0 ( Sep 01, 2021 )

- Update UI
- Update core
- Improve Payment
- Fix show map in property detail
- Fix show location in property detail
- Fix setting currency
- Fix update credit
- Fix translations in agent dashboard

## 1.6.0 ( Aug 20, 2021 )

- Update UI
- Add recently viewed properties
- Support catpcha form login/register
- Update core backend

## 1.5.0 ( Aug 18, 2021 )

- Fix send email author
- Fix empty image
- Fix menu mobile agent
- Update core backend
- Update featured city

## 1.4.0 ( Aug 13, 2021 )

- Fix social login
- Refactor code

## 1.3.0 ( Aug 11, 2021 )

> Theme 

- Update Wishlist
- Improve UI

> Backend

- Update core & payment gateways
- Improve media config
- Refactor code


## 1.2.0 ( Aug 05, 2021 )

> Theme 

- Update shortcode
- Update Static

> Backend

- Update payment
- Improve media
- Refactor code

## 1.1.0 ( Jul 29, 2021 )

- Minor bug fixing

## 1.0.0 ( July 20, 2021 )

- Initial release version 1.0