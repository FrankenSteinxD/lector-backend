define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_majd_Desktop_weclojea_lector_backend_doc_main_js",
    "groupTitle": "C__Users_majd_Desktop_weclojea_lector_backend_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/parts/:id/comments",
    "title": "Create new comment",
    "name": "CreateComment",
    "group": "Comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment's content REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"content\": \"second comment\",\n  \"createdAt\": \"2017-11-30T10:22:07.244Z\",\n  \"part\": \"5a1e45fbc0293a23e463c007\",\n  \"author\": {\n    \"_id\": \"5a166233aeb0e40e70e486c9\",\n    \"name\": {\n      \"first\": \"Rashad\",\n      \"last\": \"K-sh\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/api/parts/:id/comments/:cid",
    "title": "Delete comment",
    "name": "DeleteComment",
    "group": "Comment",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"content\": \"updated comment\",\n  \"createdAt\": \"2017-11-30T10:22:07.244Z\",\n  \"part\": \"5a1e45fbc0293a23e463c007\",\n  \"author\": {\n    \"_id\": \"5a166233aeb0e40e70e486c9\",\n    \"name\": {\n      \"first\": \"Rashad\",\n      \"last\": \"K-sh\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/api/parts/:id/comments/:cid",
    "title": "Get comment",
    "name": "GetComment",
    "group": "Comment",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"content\": \"a comment\",\n  \"createdAt\": \"2017-11-30T10:22:07.244Z\",\n  \"part\": \"5a1e45fbc0293a23e463c007\",\n  \"author\": {\n    \"_id\": \"5a166233aeb0e40e70e486c9\",\n    \"name\": {\n      \"first\": \"Rashad\",\n      \"last\": \"K-sh\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/api/parts/:id/comments",
    "title": "Get part's comments",
    "name": "GetComments",
    "group": "Comment",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a1fdbcf5c4486135874d268\",\n    \"createdAt\": \"2017-11-30T10:22:07.244Z\",\n    \"updatedAt\": \"2017-11-30T10:22:07.244Z\",\n    \"part\": \"5a1e45fbc0293a23e463c007\",\n    \"author\": {\n      \"_id\": \"5a166233aeb0e40e70e486c9\",\n      \"name\": {\n        \"first\": \"Rashad\",\n        \"last\": \"K-sh\"\n      }\n    },\n    \"content\": \"second comment\",\n    \"totalLikes\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/api/parts/:id/comments/:cid",
    "title": "Update comment",
    "name": "UpdateComment",
    "group": "Comment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment's content.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"content\": \"updated comment\",\n  \"createdAt\": \"2017-11-30T10:22:07.244Z\",\n  \"part\": \"5a1e45fbc0293a23e463c007\",\n  \"author\": {\n    \"_id\": \"5a166233aeb0e40e70e486c9\",\n    \"name\": {\n      \"first\": \"Rashad\",\n      \"last\": \"K-sh\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/api/genres",
    "title": "Create new genre",
    "name": "CreateGenre",
    "group": "Genre",
    "version": "1.0.0",
    "description": "<p>private route can only be used by the admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre's name REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"_id\": \"5a0148cb311cbb22a0c06095\",\n  \"name\": \"أكشن\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "delete",
    "url": "/api/genres/:id",
    "title": "Delete genre",
    "name": "DeteleGenre",
    "group": "Genre",
    "version": "1.0.0",
    "description": "<p>private route can only be used by the admin</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"_id\": \"5a0148cb311cbb22a0c06095\",\n  \"name\": \"أكشن\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/api/genres",
    "title": "Get stories' genres",
    "name": "GetGenres",
    "group": "Genre",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a0148cb311cbb22a0c06095\",\n    \"name\": \"أكشن\",\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "put",
    "url": "/api/genres/:id",
    "title": "Update genre",
    "name": "UpdateGenre",
    "group": "Genre",
    "version": "1.0.0",
    "description": "<p>private route can only be used by the admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre's name REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"_id\": \"5a0148cb311cbb22a0c06095\",\n  \"name\": \"أكشن\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "post",
    "url": "/api/lists/:id/add",
    "title": "Add story to list",
    "name": "AddStoryToList",
    "group": "List",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storyId",
            "description": "<p>the id of the story you want to add to this list REQUIRED</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"_id\": \"5a29186f99170427d82c83c1\",\n  \"name\": \"للقراءة\",\n  \"user\": \"5a29186f99170427d82c83c0\",\n  \"__v\": 1,\n  \"isDefault\": true,\n  \"stories\": [\n      \"5a290f6ef0798514885e882e\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "post",
    "url": "/api/lists/",
    "title": "Create List",
    "name": "CreateList",
    "group": "List",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"__v\": 0,\n  \"name\": \"أدب\",\n  \"user\": \"5a166233aeb0e40e70e486c9\",\n  \"_id\": \"5a240d9e7377ea0ecc388caa\",\n  \"isDefault\": false,\n  \"stories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "delete",
    "url": "/api/lists/:id",
    "title": "Delete List",
    "name": "DeleteList",
    "group": "List",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"__v\": 0,\n  \"name\": \"أدب\",\n  \"user\": \"5a166233aeb0e40e70e486c9\",\n  \"_id\": \"5a240d9e7377ea0ecc388caa\",\n  \"isDefault\": false,\n  \"stories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/lists/:id",
    "title": "Get List",
    "name": "GetList",
    "group": "List",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"__v\": 0,\n  \"name\": \"أدب\",\n  \"user\": \"5a166233aeb0e40e70e486c9\",\n  \"_id\": \"5a240d9e7377ea0ecc388caa\",\n  \"isDefault\": false,\n  \"stories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/list.js",
    "groupTitle": "List"
  },
  {
    "type": "post",
    "url": "/api/parts",
    "title": "Create new part",
    "name": "CreatePart",
    "group": "Part",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part's title REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Part's html content REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An array containing part's tags.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storyId",
            "description": "<p>The id of the story to add this part to REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Part 1\",\n  \"content\": \"<h1>Hello, World</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "delete",
    "url": "/api/parts/:id",
    "title": "Delete part",
    "name": "Delete_Part",
    "group": "Part",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Part 1\",\n  \"content\": \"<h1>Hello, World</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "get",
    "url": "/api/parts/:id",
    "title": "Get part",
    "name": "GetPart",
    "group": "Part",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Part 1\",\n  \"content\": \"<h1>Hello, World</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "put",
    "url": "/api/parts/:id",
    "title": "Update part",
    "name": "UpdatePart",
    "group": "Part",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Part's html content.</p>"
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An array containing part's tags.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storyId",
            "description": "<p>The id of the story to add this part to.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Updated part\",\n  \"content\": \"<h1>Hello, World, Updated</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "post",
    "url": "/api/stories",
    "title": "Create new story",
    "name": "CreateStory",
    "group": "Story",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Story's title REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Story's short description REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Genre id REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "Image",
            "optional": false,
            "field": "picture",
            "description": "<p>Story's cover REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Story number 1\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "delete",
    "url": "/api/stories/:id",
    "title": "Delete story",
    "name": "DeleteStory",
    "group": "Story",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Story number 1\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "get",
    "url": "/api/stories",
    "title": "Get stories",
    "name": "GetStories",
    "group": "Story",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The page number you want to fetch QUERYSTRING.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>How many stories to fetch per page QUERYSTRING.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[ \n  {\n    \"_id\": \"5a290f6ef0798514885e882e\",\n    \"createdAt\": \"2017-12-07T09:52:46.347Z\",\n    \"updatedAt\": \"2017-12-07T09:54:21.397Z\",\n    \"picture\": \"1512640366328.jpg\",\n    \"author\": {\n      \"_id\": \"5a166233aeb0e40e70e486c9\",\n      \"name\": {\n        \"first\": \"Rashad\",\n        \"last\": \"K-sh\"\n      }\n    },\n    \"title\": \"ذات الرداء الأحمر\",\n    \"description\": \"ذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها،\\r\\nذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها\",\n    \"genre\": \"5a0148e9311cbb22a0c06099\",\n    \"__v\": 1,\n    \"removed\": false,\n    \"stars\": 0,\n    \"parts\": [\n      \"5a290fcdf0798514885e882f\"\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "get",
    "url": "/api/stories/:id",
    "title": "Get story",
    "name": "GetStory",
    "group": "Story",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5a290f6ef0798514885e882e\",\n  \"createdAt\": \"2017-12-07T09:52:46.347Z\",\n  \"updatedAt\": \"2017-12-07T09:54:21.397Z\",\n  \"picture\": \"1512640366328.jpg\",\n  \"author\": {\n    \"_id\": \"5a166233aeb0e40e70e486c9\",\n    \"name\": {\n      \"first\": \"Rashad\",\n      \"last\": \"K-sh\"\n    }\n  },\n  \"title\": \"ذات الرداء الأحمر\",\n  \"description\": \"ذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها،\\r\\nذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها\",\n  \"genre\": \"5a0148e9311cbb22a0c06099\",\n  \"__v\": 1,\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\n    \"5a290fcdf0798514885e882f\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "put",
    "url": "/api/stories/:id",
    "title": "Update story",
    "name": "UpdateStory",
    "group": "Story",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Story's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Story's short description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Genre id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Updated Story\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "post",
    "url": "/api/users/settings/reset",
    "title": "Change Password",
    "name": "ChangePassword",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpassword",
            "description": "<p>the current user password REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the new password REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>the password confirmation REQUIRED</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  message: \"Password changed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/facebook",
    "title": "Register/Login with facebook",
    "name": "Facebook_Login",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's Facebook account token REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"_id\": \"5a19676854f7c9267c13ade1\",\n    \"username\": \"HJeOw1vlG\",\n    \"email\": \"john@doe.com\"\n  },\n  \"token\": \"tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/forgot",
    "title": "Request reset password email",
    "name": "Forgot_Password",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No-Content",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:id/lists",
    "title": "Get user lists",
    "name": "GetUserLists",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a240ce6615da01cb0a77abc\",\n    \"name\": \"المفضلة\",\n    \"user\": \"5a240ce6615da01cb0a77abb\",\n    \"isDefault\": true,\n    \"stories\": [],\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get user profile",
    "name": "GetUserProfile",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5a166233aeb0e40e70e486c9\",\n  \"createdAt\": \"2017-11-23T05:52:51.964Z\",\n  \"updatedAt\": \"2017-11-25T10:39:48.152Z\",\n  \"email\": \"richardeo112@gmail.com\",\n  \"username\": \"BJ34zyNxM\",\n  \"__v\": 0,\n  \"totalWorks\": 0,\n  \"status\": \"\",\n  \"name\": {\n    \"first\": \"Rashad\",\n    \"last\": \"K-sh\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:id/stories",
    "title": "Get user stories",
    "name": "GetUserStories",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"_id\": \"5a1e45e6c0293a23e463c006\",\n    \"createdAt\": \"2017-11-29T05:30:14.044Z\",\n    \"updatedAt\": \"2017-11-29T05:30:35.362Z\",\n    \"picture\": \"1511933414025.jpg\",\n    \"author\": \"5a166233aeb0e40e70e486c9\",\n    \"title\": \"عنوان مؤقت يمكن استبداله في أي وقت\",\n    \"description\": \"عنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقت\",\n    \"genre\": \"5a0148cb311cbb22a0c06095\",\n    \"removed\": false,\n    \"stars\": 0,\n    \"parts\": [\n       \"5a1e45fbc0293a23e463c007\"\n    ],\n    \"__v\": 1\n  },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Get users",
    "name": "GetUsers",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a166233aeb0e40e70e486c9\",\n    \"createdAt\": \"2017-11-23T05:52:51.964Z\",\n    \"updatedAt\": \"2017-12-07T10:29:17.796Z\",\n    \"email\": \"richardeo112@gmail.com\",\n    \"username\": \"frankenstein\",\n    \"__v\": 0,\n    \"totalWorks\": 3,\n    \"status\": \"kol 5ra\",\n    \"name\": {\n      \"first\": \"Rashad\",\n      \"last\": \"K-sh\"\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login user",
    "name": "Login",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"_id\": \"5a19676854f7c9267c13ade1\",\n    \"username\": \"HJeOw1vlG\",\n    \"email\": \"john@doe.com\"\n  },\n  \"token\": \"tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register new user",
    "name": "Register",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name[first]",
            "description": "<p>User's firstname REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name[last]",
            "description": "<p>User's lastname REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's pircture url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's unique email REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"_id\": \"5a19676854f7c9267c13ade1\",\n    \"username\": \"HJeOw1vlG\",\n    \"email\": \"john@doe.com\"\n  },\n  \"token\": \"tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/reset",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token we've sent to the email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/settings/reset",
    "title": "Update User Info",
    "name": "UpdateUserInfo",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the user status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>a unique username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  message: \"Updated User Info\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/user.js",
    "groupTitle": "User"
  }
] });
