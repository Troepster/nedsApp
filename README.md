
## Running the app
To run your project, navigate to the directory and run the following commands.

### iOS
* `yarn`
* `cd ios`
* `pod install`
* `cd ..`
* `yarn ios`

### Android
* `yarn`
* `yarn android`

## Please Note
I've changed the api call to return 20 results, so it is more populated at any time, even by upping the limit it might still not always show 5 races as the returned categories are mixed, I did try to pass a category ID to the api call but that did not affect the call, I guess you have a separate API for that.

The bottom filter will display all results if no category is selected, you can toggle the category by clicking on one of the tabs at the bottom.

I did not add Redux as the complexity of the application did not warrant it, I in stead added a Context for the selected category.

My Data is set to fetch fresh data every 60 seconds.

I've only typed the fields that I'm going to use in the API call, I am aware that there are more data returned

I've added some tests for the Card component
