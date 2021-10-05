# fake-coin-API
 *By [Almir Paulo](https://almirpaulo.github.io/)*
 
 One day I was studying how to code a trading bot. And then I start to wonder: How could I test the bot without use actual money? Because if the bot was not ready, so I would not put myself in this kind of risk. I could not find any useful tool. Maybe I did not make enough research, but I decide to make my own tool to solve my problem. 
 
 If that's your problem too, so feel free to try fake-coin!

## The Idea
The idea of fake coin API is to simulate a currency or stock API (in a very poor, but technically useful way to test a bot). **Needless to say fake coin is not a real coin and do not intend to have real value** (For God sake, look at it's name! You don't really think it was a real thing, do you?).

First you start with 1000 fake coins, then the API will set the fake coin rating randomly each time you hit the rating endpoint. So, you can set your bot to hit the API each 5 seconds (for example...) and do your magic! 

## Install

By now, you need to git clone, than npm install. 
I plan turn it into a node package in the future so we can simply npm install...

## Endpoints

- **root**: Ping endpoint. Returns a JSON object.
        
        /
- **rating**: Check the "actual price" of the fake coin. Returns a JSON object.

        /rating
- **buy**: Buy x fake coins. Returns a string.

        /buy/x
- **sell**: Sell x fake coins. Returns a string.

        
        /sell/x

- **check**: Check how much fake coins you have. Returns a JSON object.
    
        /check


## Contribute
- If you find any bug or if you get any hard time with fake-coin, please open an [Issue](https://github.com/AlmirPaulo/fake-coin-API/issues) here on Github. I will help you as soon as possible!

- Feel free to fork the project or make pull requests. I would appreciate very much!

- If you're willing to contribute with money I would be glad to receive a "Coffee" from you!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C26878E)

## Releases

### 0.0.1 - ...
First Release
