json.array! @new_messages do |message|
  json.content  message.content
  json.image  message.image.url
  json.time message.created_at.strftime("%Y/%m/%d %H:%M:%S")
  json.user_name  message.user.name
  json.id message.id
end
