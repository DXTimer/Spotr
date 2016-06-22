class AddUserIdToSearches < ActiveRecord::Migration
  def change
    add_reference :searches, :user, foreign_key: true
  end
end
