class TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  # GET /tasks.json
  def index
    if params[:tasks] == 'active'
      @tasks = Task.active.order(completed: :asc)
    elsif params[:tasks] == 'inactive'
      @tasks = Task.inactive.order(completed: :asc)
    else
      @tasks = Task.order(completed: :asc)
    end
    respond_with(@tasks)
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
    if @task.user.present?
      array = @task.user.tasks.pluck(:id)
      array.delete(params[:id].to_i)
      random_user_tasks = array.sample(2)
    end
    array = [@task, @task.user, random_user_tasks]
    render json: array
    # respond_with(array)
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
    respond_with([@task, @task.user])
  end

  # POST /tasks
  # POST /tasks.json
  def create
    task = Task.new(task_params)
    task.save ? respond_with(task) : false
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    task.update(task_params) ? respond_with(@task) : false
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    task.destroy ? respond_with(@task) : false
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.require(:task).permit(:id, :completed, :user_id, :title, :description)
    end
end
