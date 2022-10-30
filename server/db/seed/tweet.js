const { Tweet } = require("../index");

const _TWEET = [
  {
    content: "Fresh baked bread & pastries are some of the great joys of life",
    commentCount: 19800,
    likeCount: 290600,
    retweetCount: 19200,
    quoteTweetCount: 3128,
    tweetType: "tweet",
    userId: "elonmusk",
  },
  {
    content: "Comedy is now legal on Twitter",
    commentCount: 36,
    likeCount: 2100000,
    retweetCount: 237900,
    quoteTweetCount: 36300,
    tweetType: "tweet",
    userId: "elonmusk",
  },
  {
    content: "the bird is freed",
    commentCount: 19800,
    likeCount: 290600,
    retweetCount: 351000,
    quoteTweetCount: 52200,
    tweetType: "tweet",
    userId: "elonmusk",
  },
];

const seedTweet = async () => {
  try {
    const tweet = await Promise.all(_TWEET.map((tweet) => Tweet.create(tweet)));
    return tweet;
  } catch (ex) {
    console.log(ex);
  }
};

const seedRetweet = async (tweet) => {
  try {
    const _RETWEET = [
      {
        commentCount: 0,
        likeCount: 0,
        retweetCount: 0,
        quoteTweetCount: 0,
        tweetType: "retweet",
        userId: "JoeBiden",
        tweetId: tweet[0].id,
      },
      {
        commentCount: 0,
        likeCount: 0,
        retweetCount: 0,
        quoteTweetCount: 0,
        tweetType: "retweet",
        userId: "JoeBiden",
        tweetId: tweet[1].id,
      },
    ];
    await Promise.all(_RETWEET.map((tweet) => Tweet.create(tweet)));
  } catch (ex) {
    console.log(ex);
  }
};

const seedRetweetWithQuote = async (tweet) => {
  try {
    const _QUOTE_TWEET = [
      {
        content: "sick",
        commentCount: 2,
        likeCount: 3,
        retweetCount: 0,
        quoteTweetCount: 0,
        tweetType: "retweet",
        userId: "NASA",
        tweetId: tweet[0].id,
      },
      {
        content: "very sick",
        commentCount: 2,
        likeCount: 3,
        retweetCount: 0,
        quoteTweetCount: 0,
        tweetType: "retweet",
        userId: "NASA",
        tweetId: tweet[1].id,
      },
    ];
    await Promise.all(_QUOTE_TWEET.map((tweet) => Tweet.create(tweet)));
  } catch (ex) {
    console.log(ex);
  }
};

const seedComment = async (tweet) => {
  try {
    const _COMMENT = [
      {
        content: "a comment to elon from NASA",
        commentCount: 2,
        likeCount: 3,
        retweetCount: 0,
        quoteTweetCount: 0,
        tweetType: "comment",
        userId: "NASA",
        tweetId: tweet[0].id,
      },
      {
        content: "a comment to elon from JoeBiden",
        commentCount: 2,
        likeCount: 3,
        retweetCount: 0,
        quoteTweetCount: 0,
        tweetType: "comment",
        userId: "JoeBiden",
        tweetId: tweet[0].id,
      },
    ];
    await Promise.all(_COMMENT.map((comment) => Tweet.create(comment)));
  } catch (ex) {
    console.log(ex);
  }
};

const seedAllTweet = async () => {
  const tweets = await seedTweet();
  await seedRetweet(tweets);
  await seedRetweetWithQuote(tweets);
  await seedComment(tweets);
  return tweets;
};

module.exports = seedAllTweet;
