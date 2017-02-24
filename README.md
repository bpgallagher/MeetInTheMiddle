#Meetup in the Middle [![Build Status](https://travis-ci.org/ThoughtfulThinkers/MeetInTheMiddle.svg?branch=master)](https://travis-ci.org/ThoughtfulThinkers/MeetInTheMiddle)
![Meetup in the Middle](/assets/images/MeetInTheMiddleLogo.png)

[Android]( https://play.google.com/store/apps/details?id=io.nickcoleman.meetinthemiddle "Android")

[IOS]() 

## Description

Schedule an event and invite your friends. Meetup in the Middle will select a location for you based on where your guests are coming from and the type of venue you've chosen.

## Screenshots

### Main Page

### Meetup

### Login

## Tech Stack

- DB: Firebase

- Client: React-Native, React, Redux, Thunk

- Testing: Jest

## Database Structure

#### `chatrooms`

```
  abc123: {
    321efg: {
      createdAt: 1487360561315
      text: "Can't wait to see you!"
      user: {
        _id: 123abcd45ef
        name: "chat"
        }
      }
   }
```

#### `users`

```

  id: {

      firstName: "Joe"
      
      lastName: "User"
      
      location: {
      
        _id: r327t2r73rg
        
        name: "chat"
        
        }
       
       meetups: {
       
        - abc123: {
        
          lat: 39.9524
          
          lon: 75.1636
          
          uid: abc123
          
          }
          
        }
        
        uid: 123abcd45ef
        
      }
      
   }
   
 ```

#### `meetups`

