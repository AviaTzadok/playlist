let fullSongsObj = {
  data: {
    kind: "youtube#searchListResponse",
    etag: "EpyyL04GFzh8cj6Su-6xKiUxk3k",
    nextPageToken: "CAMQAA",
    regionCode: "IL",
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 3,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "GNSpiZrL_XhH_9SIcwrjoISNNgc",
        id: {
          kind: "youtube#video",
          videoId: "3gK_2XdjOdY",
        },
        snippet: {
          publishedAt: "2016-08-04T02:03:04Z",
          channelId: "UCcVZ-M88BLQj-JxjWey3heg",
          title: "Titanic - My Heart Will Go On (Music Video)",
          description:
            "Titanic - My Heart Will Go On Music Video The Titanic movie to Celine Dion - My Heart Will Go On. If you like the video Subscribe, ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/3gK_2XdjOdY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/3gK_2XdjOdY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/3gK_2XdjOdY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Filledagreat",
          liveBroadcastContent: "none",
          publishTime: "2016-08-04T02:03:04Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "D5AypR7JXiN1V1XJiDLxKQgEsOo",
        id: {
          kind: "youtube#video",
          videoId: "IAuRoAUV19o",
        },
        snippet: {
          publishedAt: "2020-06-18T07:00:07Z",
          channelId: "UCh6C5LG14uZKmwCgGxf-nDQ",
          title:
            "Céline Dion - My Heart Will Go On (Taking Chances World Tour: The Concert)",
          description:
            "Céline Dion - My Heart Will Go On (Taking Chances World Tour: The Concert) Listen to Taking Chances World Tour – The ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/IAuRoAUV19o/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/IAuRoAUV19o/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/IAuRoAUV19o/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "CelineDionVEVO",
          liveBroadcastContent: "none",
          publishTime: "2020-06-18T07:00:07Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "Gln9-5eO4nCNYjJIrsve0Xh2Ewg",
        id: {
          kind: "youtube#video",
          videoId: "Qz9RTOKpLsM",
        },
        snippet: {
          publishedAt: "2010-01-11T18:41:49Z",
          channelId: "UCPhDNuhI_KOAUs4eIqlqrVw",
          title: "Celine Dion - My Heart will go on - Titanic-Lyrics",
          description:
            'The songtext for Celine Dions "My Heart will go on" from the movie "Titanic" (1997) Much fun by singing =)',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Qz9RTOKpLsM/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Qz9RTOKpLsM/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Qz9RTOKpLsM/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Whisper13122009",
          liveBroadcastContent: "none",
          publishTime: "2010-01-11T18:41:49Z",
        },
      },
    ],
  },
  status: 200,
  statusText: "",
  headers: {
    "cache-control": "private",
    "content-encoding": "gzip",
    "content-length": "981",
    "content-type": "application/json; charset=UTF-8",
    date: "Fri, 14 Jan 2022 08:14:38 GMT",
    server: "scaffolding on HTTPServer2",
    vary: "Origin, X-Origin, Referer",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 3,
      key: "AIzaSyC3-IiV9zOMGj4hrKSpxLsMb7lRf1Gp8LE",
      q: "My Heart Will Go On",
    },
    method: "get",
    url: "/search",
  },
  request: {},
};
export default fullSongsObj;
