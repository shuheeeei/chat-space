class UsersController < ApplicationController
  before_action :set_users, only: [:index, :edit]

  def index
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def set_users
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end


end
