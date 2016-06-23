class Api::SearchesController < ApplicationController
  before_action :set_user

  def index
    if !!@user
      render json: @user.searches.last.tags
    else
      render json: { error: "You are not allowed access to this page."}
    end
  end

  def create
    search = @user.searches.new()
    param_tags = search_params[:tags]
    tags = []
    param_tags.each do |tagname|
      tags << Tag.where(tag_name: tagname).first_or_create
    end
    tags.each do |tag|
      search.tags << tag
    end
    if search.save
      render json: search, status: :ok
    else
      render json: {status: :unprocessable_entity}
    end
  end

  private

  def search_params
    params.require(:search).permit(:id, :tags => [])
  end

  def set_user
    @user = User.find_by(id: params[:user_id])
  end
end
