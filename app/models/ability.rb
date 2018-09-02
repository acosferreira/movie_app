class Ability
  include CanCan::Ability

  def initialize(user)
    byebug
    user ||= User.new
      if user.present?
      can :manage, :all
    else
      can [:read], :all
    end
  end
end
