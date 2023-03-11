class V1::AlertsController < ApplicationController
  before_action :authenticate_user!
  def index
    @alerts = Alert.all
    # sleep(2.seconds)
    render json: @alerts, status: :ok
  end

  def show
    @alert = Alert.find(params[:id])
    # sleep(2.seconds)
    render json: @alert, status: :ok
  end

  def create
    puts alert_params[:alert_type]
    unless ['portal_opened', 'portal_closed'].include? alert_params[:alert_type] 
     head(:unprocessable_entity)
     return
    end

    @alert = Alert.new(alert_params.merge(origin: request.ip))

    @alert.save
    if @alert.save
      render json: @alert, status: :created
    else
      head(:unprocessable_entity)
    end
  end

  def destroy
    @alert = Alert.find(params[:id])
    if @alert.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private

  def alert_params
    params.require(:alert).permit(:alert_type, { :tag => [] }, :description, :origin)
  end
end
