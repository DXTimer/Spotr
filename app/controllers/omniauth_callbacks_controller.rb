class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def instagram
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      render json: {data:  @user }, :event => :authentication
    else
      render json: { error: { user: @user.errors, message: "Refer to server logs" } }
    end
  end

  def failure
    render json: { error: "There was an error, in the request..."}
  end
end