# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|content|text|null: false|
|image|text||
|created_at|timestamp|null: false|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル   ▶チャットグループの管理

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|message_id|integer|null: false, foreign_key: true|
|member_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages


## usersテーブル    ▶︎登録ユーザーの管理

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|Email|string|null: false|
|password|string|null: false|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- has_many :messages


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
