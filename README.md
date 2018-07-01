# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|reference|null: false, foreign_key: true|
|message_id|reference|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :chats


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|group_id|reference|null: false, foreign_key: true|
|message_id|reference|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :voices


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|text||
|image|text||
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- has_many :voices
- belongs_to :user


## voicesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|message_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :message


## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :message
- belongs_to :group


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
