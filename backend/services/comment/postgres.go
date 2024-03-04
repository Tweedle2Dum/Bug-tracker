package comment

import (
	"log"

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

func (r *repo) CreateComment(content string, taskId uuid.UUID, userId uuid.UUID) (*models.Comment, error) {
	newComment := &models.Comment{
		Text:   content,
		TaskID: taskId,
		UserID: userId,
	}
	if err := r.DB.Create(newComment).Error; err != nil {
		log.Fatal(err)
		return nil, err
	}

	return newComment, nil

}

func (r *repo) GetAllComments(taskId uuid.UUID) ([]models.Comment, error) {
	var comments []models.Comment
	if err := r.DB.Where("task_id = ?", taskId).Find(&comments).Error; err != nil {
		log.Fatal(err)
		return nil, err
	}
	if err := r.DB.Preload("User").Preload("Task").Where("task_id = ?", taskId).Find(&comments).Error; err != nil {
		log.Fatal(err)
		return nil, err
	}

	return comments, nil

}
