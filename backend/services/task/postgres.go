package task

import (
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/models"
	"gorm.io/gorm"
)

type repo struct {
	DB *gorm.DB
}

func NewPostgresRepo(db *gorm.DB) Repository {
	return &repo{
		DB: db,
	}
}

func (r *repo) CreateTask(columnId uuid.UUID, name string, description string) (*models.Task, error) {
	task := &models.Task{
		Name:        name,
		Description: description,
		ColumnID:    columnId,
	}

	err := r.DB.Create(task).Error
	if err != nil {
		return nil, err
	}
	return task, nil

}

func (r *repo) GetAllTasks(columnId uuid.UUID) ([]models.Task, error) {
	var task []models.Task
	err := r.DB.Where("column_id = ?", columnId).Find(&task).Error
	if err != nil {
		return nil, err
	}
	return task, err

}
