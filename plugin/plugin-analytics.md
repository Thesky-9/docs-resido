# Analytics

Integrate with Google Analytics

## Getting credentials

Please check instruction in Admin -> Settings -> General.

![Instructions](_images/analytics/analytics-instruction.png)

Google tag ID: https://support.google.com/analytics/answer/9539598#find-G-ID

Property ID: https://developers.google.com/analytics/devguides/reporting/data/v1/property-id

Service Account Credentials: https://github.com/akki-io/laravel-google-analytics/wiki/2.-Configure-Google-Service-Account-&-Google-Analytics

After getting JSON credential file, you need to open this file and copy content to "Service Account Credential" field.

The final setting will look like this:

![Demo settings](_images/analytics/analytics-demo-settings.png)

Check this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2q7ufd8W8WI?si=XZnYcfZ55vg2WgSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Troubleshooting

### Service is not enabled

If you got this error:

![Image](_images/analytics/analytics-service-not-enabled.png)

You need to enable "Google Analytics Data API".

Select project

![Image](_images/analytics/analytics-select-project.png)

Search for API

![Image](_images/analytics/analytics-select-api.png)

Enable API

![Image](_images/analytics/analytics-enable-api.png)

### Setup timezone and clear cache

- Go to Admin -> Settings -> General and setup timezone to your local timezone.

![Image](_images/analytics/analytics-timezone.png)

- Go to Admin -> Platform Administration -> Cache management and clear your site cache.

![Image](_images/analytics/analytics-cache.png)

::: warning
Analytics data in Admin dashboard is displayed daily data, so it will reset chart every day. It is displaying data from
API, not realtime analytics so please wait until your site has data from API.
:::

Give your comment here if you got any problem.

Good luck!
