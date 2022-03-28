
const url = "https://api.spacexdata.com/v2/launchpads";
var launchSitesNames = d3.json(url).then(spaceXLaunchSites => spaceXLaunchSites.map(site => site.full_name));
var launchSiteLat = d3.json(url).then(spaceXLaunchSites => spaceXLaunchSites.map(site => site.location.latitude));
var launchSiteLong = d3.json(url).then(spaceXLaunchSites => spaceXLaunchSites.map(site => site.location.longitude));
console.log(launchSitesNames, launchSiteLat, launchSiteLong);