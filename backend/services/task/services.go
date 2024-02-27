package task

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Service interface {
	CreateTask(columnId uuid.UUID, name string, description string) (*models.Task, error)
	GetAllTasks(columnId uuid.UUID) ([]models.Task, error)
}

type taskSvc struct {
	repo Repository
}


func (s *taskSvc) CreateTask (columnId uuid.UUID, name string, description string) (*models.Task, error) {
	
	panic("implement")

}

func (s *taskSvc) GetAllTasks (columnId uuid.UUID) ([]models.Task, error) {
	panic("implement")

}


func NewService (r Repository) Service {

	return &taskSvc{
		repo: r,
	}

}