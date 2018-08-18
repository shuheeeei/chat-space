require 'rails_helper'

describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      # メッセージがあれば保存できる
      it "is valid with a message" do
        message = build(:message, image: nil)
        expect(message).to be_valid
      end

      # 画像があれば保存できる
      it "is valid with an image" do
        image = build(:message, content: nil)
        expect(image).to be_valid
      end

      # メッセージと画像があれば保存できる
      it "is valid with both message and image" do
        messages = build(:message)
        expect(messages).to be_valid
      end
    end


    context 'can not save' do
      # メッセージも画像も無いと保存できない
      it "is invalid without both message and image" do
        messages = build(:message, content: nil, image: nil)
        messages.valid?
        expect(messages.errors[:content]).to include("を入力してください")
      end

      # group_idが無いと保存できない
      it "is invalid without a group_id" do
        group_id = build(:message, group: nil)
        group_id.valid?
        expect(group_id.errors[:group]).to include("を入力してください")
      end

      # user_idが無いと保存できない
      it "is invalid without a user_id" do
        user_id = build(:message, user: nil)
        user_id.valid?
        expect(user_id.errors[:user]).to include("を入力してください")
      end
    end

  end
end
