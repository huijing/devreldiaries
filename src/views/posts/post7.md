---
title: Learning our own APIs
date: 2019-02-10
tags: post
layout: posts.njk
permalink: /{{ title | slug }}/index.html
---
When I joined Nexmo, I wasn't just new to DevRel, I was new to the communications industry as a whole. It's been fascinating for me since I started, and still is right now. I never [knew how routing worked before this](/i-did-support-and-i-liked-it/), or how our carrier teams had to negotiate with different suppliers and so on.

Our Singapore office is relatively small that I can't help but be in the vicinity of our BizOps team and Support team. Simply by having lunch with them and overhearing their conversations about the tickets they were working on gave me a lot more insight about how all this worked.

A big part of our DevRel responsibilities involve creation of technical content, and the best way to come up with that is to build stuff with our APIs. One thing I've noticed is that because Nexmo's APIs take place on the server side, most tutorials don't really cover much on the frontend of things. But with my background as a CSS aficionado, I couldn't walk away from a project without a properly styled frontend. Just can't do it.

My latest API exploration involved the [Number Insight API](https://developer.nexmo.com/number-insight/overview) which allows us to check stuff about a phone number, like verify if it's even a real number, locale and formatting information etc. 

Because I was using [Koa.js](https://koajs.com/) as the framework, I had to figure out how to grab the response from the Number Insight API and pass it back to the frontend as part of the POST response. Promises were made. (Sorry I couldn't help it)

Anyway, end result here: [Number Insight Koa](https://glitch.com/~number-insight-koa). Also, [Glitch](https://glitch.com) is *really* growing on me.