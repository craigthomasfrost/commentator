## Overview
Commentator is a microservice to flag whether a comment is likely to require moderation.

## Use

Post JSON to https://commentator.now.sh/ with the contents of the comment as the value 
of a `comment` key, and optionally a `limit` to customise the result based on context 
(i.e. a negative integer to allow _some_ negative connotations, or a positive 
integer to moderate _sort of_ positive comments).

## Example

Post:

```
{
  "comment": "You're a fucking jerk and I hate you",
  "limit": -4
}
```

Response:

```
{
  "commentate": true,
  "words": [
    "hate",
    "jerk",
    "fucking"
  ],
  "score": -10
}
```

## License

This software is published under the [MIT License](https://opensource.org/licenses/MIT)
