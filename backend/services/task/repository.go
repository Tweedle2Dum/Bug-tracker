package task

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
)

type Repository interface {
	CreateTask(columnId uuid.UUID, name string, description string,createdBy string) (*models.Task, error)
	GetAllTasks(columnId uuid.UUID) ([]models.Task, error)
}
