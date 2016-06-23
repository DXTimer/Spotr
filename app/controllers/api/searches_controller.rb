class Api::SearchesController < ApplicationController

  def index
    render json: Search.all
  end

  def create
    @user = User.find(search_params[:id])
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
    params.require(:search).permit(:id, :uid, :tags => [])
  end

end
