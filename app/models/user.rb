class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :searches
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :validatable, :omniauthable, :omniauth_providers => [:instagram]
  
  def email_required? 
    false
  end

  def self.from_omniauth(auth)
    obj = self.find_by(uid: auth.uid)
    if obj
      obj.update(token: auth.credentials.token)
    else
      create do |user|
        user.uid = auth.uid
        user.provider = auth.provider 
        user.username = auth.info.nickname
        user.password = Devise.friendly_token[0,20]
        user.token = auth.credentials.token
        user.profile_picture = auth.info.image
      end
    end
    obj
  end

end

