class CoursesController < ApplicationController

	def index
		@courses= Course.all

	end

	def lists
		@courses= Course.all

	end


	def new

	end

	def infoC1

	end

end