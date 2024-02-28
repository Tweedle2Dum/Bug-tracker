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
	
	return s.repo.CreateTask(columnId,name,description)

}

func (s *taskSvc) GetAllTasks (columnId uuid.UUID) ([]models.Task, error) {
	return s.repo.GetAllTasks(columnId)

}


func NewService (r Repository) Service {

	return &taskSvc{
		repo: r,
	}

}