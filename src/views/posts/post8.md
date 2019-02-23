---
title: Not using the APIs as intended
date: 2019-02-22
tags: post
layout: posts.njk
permalink: /{{ title | slug }}/index.html
---
I've talked about how I've been building stuff with Nexmo's APIs in an effort to familiarise myself with them. Turns out more than half my attempts have had to do with use-cases that were totally not what most developers were using our APIs for. So even though I ran into some limitations, I also figured out what alternative workarounds were possible.

For example, my latest exploration led me to dig a little deeper into our [Verify API](https://developer.nexmo.com/api/verify). I think the main use case for this is two-factor authentication. It's not supposed to be complicated. You enter your phone number, get sent a PIN code, enter PIN code, bada-bing-bada-boom, passwordless authentication.

This time, my hare-brained scheme was to build a player tracker for people running checkpoints. Think Amazing Race. So the checkpoint officer will have a list of all the players and their phone numbers. When a player arrives at said checkpoint, officer will trigger the PIN code. This code will get sent to the player's phone, they enter it and the officer's list gets updated.

Because the PIN is sent to the players' phones, there is no way the officer can doctor the results unless they steal the players' phones. But descent into larceny is out of the scope of my use case. I also wanted a scenario where data was not available so there should be an option for the PIN to be entered via replying to an SMS instead.

It wasn't the most elegant of solutions, but some cobbling together of the Verify API and the Messages API got me the end result I wanted. Albeit, with some user experience deficiencies, but hey, we can't win them all right? Also, I discovered a nifty little lodash-powered local JSON database called [lowdb](https://github.com/typicode/lowdb) that is great for the prototypes I've been building.

If you're interested, check out the [end result](https://glitch.com/~checkpoint-verify). And I'm still hooked on [Glitch](https://glitch.com/).