# fake-coin-API
 *By [Almir Paulo](https://almirpaulo.github.io/)*
 
 One day I was studying how to code a trading bot. And then I start to wonder: How could I test the bot without use actual money? Because if the bot was not ready, so I would not put myself in this kind of risk. I could not find any useful tool. Maybe I did not make enought research, but I decide to make my own tool to solve my problem. 
 
 If that's your problem too, so feel free to try fake-coin!

## The Idea
The idea of fake coin API is to simulate a currency or stock API (in a very poor, but technically useful way to test a bot). **Needless to say fake coin is not a real coin and do not intend to have real value** (For God sake, look at it's name! You don't really think it was a real thing, do you?).

First you start with 1000 fake coins (you can change it in config.json), then the API will set the fake coin rating randomly each 5 seconds (you can also change the interval in config.json). The rating will be 
. So, you can set your bot to hit the API each 5 seconds and do your magic! 

## Install
<!-- Como colocar um package no npm? -->

## Endpoints

- **root**: Ping endpoint.
        
        /
- **price**: Check the "actual price" of the fake coin. 

        /price
- **buy**: Buy x fake coins.

        /buy/x
- **sell**: Sell x fake coins.

        
        /sell/x

- **check**: Check how much fake coins you have.
    
        /check


## Contribute
- If you find any bug or if you get any hard time with fake-coin, please open an [Issue](https://github.com/AlmirPaulo/fake-coin-API/issues) here on Github. I will help you as soon as possible!

- Feel free to fork the project or make pull requests. I would appreciate very much!

- If you're willing to contribute with money I would be glad to receive a "Coffee" from you!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C26878E)

## Releases

### 0.0.1 - ...
First Release
