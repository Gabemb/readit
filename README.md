# Reddit Clone

## Instructions
Today we'll be using the `sequelize cli` to make a Reddit clone. However we won't be implementing a user authentication system.

## Database Schema
### Post
* title
* body

### Comment
* postID (**association**)
* comment

### Vote
* postID (**association**)
* vote

## Router
* `GET` for `index.html`
* `GET` / `POST` / `DELETE` for `/api/post`
* `GET` / `POST` / `DELETE` for `/api/comment`
* `GET` / `POST` / `DELETE` for `/api/vote`

## Frontend
* Display page for all Posts
* Display page for single Post
* Make a Post form
* Make a Comment form for a Post
* Upvote button / Downvote button for each Post

