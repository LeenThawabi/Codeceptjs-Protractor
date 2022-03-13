# following this article https://codecept.io/angular/#introduction
# but using codeceptjs less than 3.1.0 version since protractor not working on higher versions,also protractor will be deprecated by End of this year, so codeceptjs community on github or StackOverflow developers will not be able to help if there is a defect on the protractor helper
# add node module using npm i
# run "npx codeceptjs run --verbose"or --steps
# observe "× "before all" hook: codeceptjs.beforeSuite for "test something"" error ![image](https://user-images.githubusercontent.com/25851620/158059944-9d986689-7b78-4cfd-9e4f-0391b4c15009.png)

# the only solution that i found for this error is to upgrade the version to 3.1.0 but the protractor will not work on 3.1.0 version
# i tried to use playwright helper and everything working fine, so the issue not related to node js
# i guess maybe related to protractor itself or selenium driver
# i installed this command for selenium as they mentioned on codeceptjs site "Protractor requires Selenium Server to be started and running. To start and stop Selenium automatically install @wdio/selenium-standalone-service."
# here is the files
