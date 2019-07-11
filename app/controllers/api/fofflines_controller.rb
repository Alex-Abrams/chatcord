class Api::FofflinesController < ApplicationController
  # this is a simple controller to generate fake offline names until friends requests is done
  # but i would like to begin starting my other project and will periodically come back to this one
  def index
    @fofflines = Foffline.all
  end
end
