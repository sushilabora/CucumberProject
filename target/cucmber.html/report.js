$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  Description: This feature will be used to login to Simplilearn Application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that when user enters correct user name and password they should be able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the Simplilearn application",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on the Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters correct username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters correct password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be able to see the welcome message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "nic@abc.com",
        "abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when user enters correct user name and password they should be able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the Simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct username \"nic@abc.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct password \"abc123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see the welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_see_the_welcome_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});