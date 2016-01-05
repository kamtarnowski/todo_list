class TasksController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.order(completed: :asc)
    respond_with(@tasks)
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
    task = Task.find(params[:id])
    respond_with([task, task.user])
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
    task = Task.find(params[:id])
    task.update(task_params) ? respond_with(task) : false
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    task = Task.find(params[:id])
    task.destroy ? respond_with(task) : false
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
